import Connect from '@/lib/mongodb/connect';
import database from '@/lib/mongodb/database';
import clientPromise from '@/lib/mongodb/mongodb';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

let baseURL: string;
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000';
} else {
  baseURL = 'https://mauritiusmedia.vercel.app';
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  // @ts-ignore
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: database,
  }),
  database: process.env.MONGO_DB_URI,
  providers:
    process.env.NODE_ENV === 'development'
      ? [
          GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
          }),
        ]
      : [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
          }),
          // ...add more providers here
        ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  session: { strategy: 'jwt' },
  events: {
    // this function is called when it is the first time the user signs in
    createUser: async ({ user }) => {
      // update the database e.g. with paymet information from stripe...
      const collection = await Connect('users');

      // add stripe customer id to database
      await collection.updateOne(
        { email: user.email },
        { $set: { role: 'guest' } }
      );
    },
    signIn: async () => {
      // on signin revalidate
      await fetch(
        `${baseURL}/api/revalidate?tag=equipment&secret=${process.env.SECRET_REVALIDATION_TOKEN}`,
        { method: 'POST' }
      );
    },
  },
  callbacks: {
    async jwt({ token, user }) {
      // use this method to set the user id (workaround) when using useSession
      // Initialize the token with the default values
      if (user) {
        // this is neccessary because first time for example the paymentId is not in the user object.
        // so we have to make a manually call to the database
        const collection = await Connect('users');
        const updatedUser = await collection.findOne({ email: user.email });

        if (updatedUser) {
          token.id = updatedUser._id;
          token.role = updatedUser.role;
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.role = token.role as string;
      return session;
    },
  },
};
