import Link from 'next/link';

export default async function Home() {
  return (
    <main>
      <section className="max-w-2xl flex flex-col md:flex-row mx-4 pt-20 lg:mx-auto text-black">
        <div className="flex flex-col z-20 mt-20 bg-white/80 py-8 px-16 rounded-xl">
          <div>
            <h1 className=" antialiased text-3xl font-bold mb-2 text-secondary-500">
              <span className="text-primary-500">Mauritius</span>Media
            </h1>
            <p className="font-base text-xl">
              Our tool to manage our technical equipment, sunday services and
              more.
            </p>
          </div>
          <Link
            href="/dashboard"
            className="rounded-full w-fit mt-4 px-4 py-2 shadow-lg bg-white text-black lg:hover:bg-primary-600 lg:hover:text-white duration-300"
          >
            Explore
          </Link>
        </div>
      </section>
    </main>
  );
}
