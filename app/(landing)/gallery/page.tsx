import Image from 'next/image';

const images = [
  'image-0.jpeg',
  'image-1.jpeg',
  'image-2.jpeg',
  'image-3.jpeg',
  'image-4.jpeg',
  'image-5.jpeg',
  'image-6.jpeg',
  'image-7.jpeg',
  'image-8.jpeg',
  'image-9.jpeg',
  'image-10.jpeg',
  'image-11.jpeg',
];

export default async function About() {
  return (
    <main>
      <section className="max-w-2xl flex flex-col md:flex-row mx-4 lg:mx-auto text-black">
        <div className="flex flex-col z-20 mt-20 bg-white/80 py-8 px-4 lg:px-16 rounded-xl text-lg gap-4">
          <h1 className=" antialiased text-3xl font-bold mb-2 text-secondary-500">
            <span className="text-primary-500">Gallery</span>
          </h1>
          {/** IMAGE GRID */}
          <div className="grid md:grid-cols-2 xs:grid-cols-1">
            {images.map((image: string, index: number) => {
              return (
                <div className="aspect-square" key={index}>
                  <Image
                    alt="Image"
                    src={`/images/${image}`}
                    width={500} // Adjust the width and height to your desired size
                    height={500} // Make them both equal to create a square
                    className="object-cover w-full h-full"
                  />
                </div>
              );
            })}
          </div>
          <div>
            <p>Fotos: Aaron Weißhardt</p>
            <p className="text-sm">Quality reduced.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
