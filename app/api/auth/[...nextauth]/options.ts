import database from '@/lib/mongodb/database';
import clientPromise from '@/lib/mongodb/mongodb';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

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
            profile(profile) {
              return {
                role: 'guest',
                id: profile.id.toString(),
                name: profile.name,
                image: profile.avatar_url,
                email: profile.email,
                location: profile.location,
                emailVerified: profile.emailVerified,
              };
            },
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
          }),
        ]
      : [
          GoogleProvider({
            profile(profile) {
              return {
                role: 'guest',
                id: profile.sub.toString(),
                name: profile.name,
                image: profile.picture,
                email: profile.email,
                location: profile.locale,
                emailVerified: profile.email_verified,
              };
            },
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
    createUser: async () => {
      /*
      // update the database e.g. with paymet information from stripe...
      const collection = await Connect('users');

      // add stripe customer id to database
      await collection.updateOne(
        { email: user.email },
        { $set: { role: 'guest' } }
      );
      */
    },
  },
  callbacks: {
    async jwt({ token, user }) {
      // use this method to set the user id (workaround) when using useSession
      // Initialize the token with the default values
      if (user) {
        // this is neccessary because first time for example the paymentId is not in the user object.
        // so we have to make a manually call to the database
        /*
        const collection = await Connect('users');
        const updatedUser = await collection.findOne({ email: user.email });

        if (updatedUser) {
          token.id = updatedUser._id;
          token.role = updatedUser.role;
        }
        */
        token.id = user.id;
        token.role = user.role;
      }

      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
    async signIn({ user }) {
      const allowedMails = process.env.ALLOWED_USER_EMAIL;
      const arrayAllowedMails = allowedMails ? allowedMails.split('/#/') : [];

      if (process.env.NODE_ENV === 'development') {
        // Check if the user's email is in the list of allowed emails
        if (user && user.email && arrayAllowedMails.includes(user.email)) {
          return true; // Allow sign-in
        } else {
          return false; // Deny sign-in
        }
      } else {
        // Check if the user's email is in the list of allowed emails
        if (user && user.email && arrayAllowedMails.includes(user.email)) {
          return true; // Allow sign-in
        } else {
          return false; // Deny sign-in
        }
      }
    },
  },
};
