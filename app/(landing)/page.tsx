import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  return (
    <main>
      <section className="grid grid-cols-4 gap-1 md:gap-2 max-w-2xl mx-4 pt-20 lg:mx-auto text-black mt-20">
        <div className="col-span-4 md:col-span-3 z-10 bg-white/100 py-8 px-16 rounded-xl duration-300">
          <div>
            <h1 className=" antialiased text-3xl font-bold mb-2 text-secondary-500">
              <span className="text-primary-500">Mauritius</span>Media
            </h1>
            <p className="font-base text-xl">
              Our tool to manage our technical equipment, sunday services and
              more.
            </p>
          </div>
          <h2 className="mt-4 text-lg font-base">Explore...</h2>
          <div className="flex mt-2 gap-2">
            <Link
              href="/about"
              className="rounded-full w-fit  px-4 py-2 shadow-lg bg-white text-black lg:hover:bg-primary-600 lg:hover:text-white duration-300"
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="rounded-full w-fit  px-4 py-2 shadow-lg bg-white text-black lg:hover:bg-primary-600 lg:hover:text-white duration-300"
            >
              Gallery
            </Link>
          </div>
        </div>
        <Image
          alt="Us"
          src="/logo-new.png"
          width={500} // Adjust the width and height to your desired size
          height={500} // Make them both equal to create a square
          className="col-span-4 md:col-span-1 object-cover w-full h-full lg:-rotate-3 hover:-rotate-0 hover:translate-x-2 duration-300 rounded-xl z-10 lg:-translate-x-6 -translate-x-4 lg:translate-y-4 -translate-y-6 shadow-md"
        />
        <div className="col-span-4 bg-primary-500 py-8 px-16 rounded-xl duration-300">
          <h2 className="mb-4 font-base text-xl">
            Find our Production with Mauritiuskirche Pleidelsheim on YouTube.
          </h2>
          <Link
            href="https://www.youtube.com/channel/UCx17BMSHYzz18s5o26I5M9A"
            target="_blank"
            className="rounded-full w-fit px-4 py-2 shadow-lg bg-white text-black lg:hover:bg-secondary-600 lg:hover:text-white duration-300"
          >
            Link to YouTube
          </Link>
        </div>
        <Image
          alt="Us"
          src="/us.jpg"
          width={500} // Adjust the width and height to your desired size
          height={500} // Make them both equal to create a square
          className="col-span-4 lg:col-span-2 object-cover w-full h-full lg:rotate-3 hover:-rotate-0 hover:-translate-x-2 duration-300 rounded-xl z-10 lg:translate-x-6 translate-x-4 lg:translate-y-4 -translate-y-6 shadow-md"
        />
        <Link
          href="https://www.mauritiuskirche.de"
          className="flex flex-col w-full col-span-4 lg:col-span-2 items-center text-center justify-center bg-secondary-500 py-8 px-16 rounded-xl lg:hover:bg-primary-500 duration-300"
        >
          <h2 className="font-base text-xl">Explore Mauritiuskirche.de</h2>
        </Link>
      </section>
    </main>
  );
}
