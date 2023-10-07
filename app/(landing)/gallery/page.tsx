import Image from 'next/image';

const images = [
  'image-0.jpg',
  'image-1.jpg',
  'image-2.jpg',
  'image-3.jpg',
  'image-4.jpg',
  'image-5.jpg',
  'image-6.jpg',
  'image-7.jpg',
  'image-8.jpg',
  'image-9.jpg',
  'image-10.jpg',
  'image-11.jpg',
];

export default async function About() {
  return (
    <main>
      <section className="max-w-2xl flex flex-col md:flex-row mx-4 lg:mx-auto text-black">
        <div className="flex flex-col z-20 mt-20 bg-white/80 py-8 px-16 rounded-xl text-lg gap-4">
          <h1 className=" antialiased text-3xl font-bold mb-2 text-secondary-500">
            <span className="text-primary-500">Gallery</span>
          </h1>
          {/** IMAGE GRID */}
          <div className="grid grid-cols-2">
            {images.map((image: string, index: number) => {
              return (
                <div className="aspect-square" key={index}>
                  <Image
                    alt="Image"
                    src={`/images/${image}`}
                    width={200} // Adjust the width and height to your desired size
                    height={200} // Make them both equal to create a square
                    className="object-cover w-full h-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
