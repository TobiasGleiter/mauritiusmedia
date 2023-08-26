export default async function Home() {
  return (
    <main>
      <section className="max-w-2xl flex flex-col md:flex-row mx-4 pt-20 lg:mx-auto min-h-screen">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          className="absolute top-0 left-0 w-full h-screen object-cover z-0"
          autoPlay
          muted
          loop
        >
          <source src="/mauritiusmedia-intro.mp4" type="video/mp4" />
        </video>
        <div className="z-50 mt-20">
          <h1 className="xs:text-4xl md:text-lg font-bold mb-2 text-white">
            MauritiusMedia
          </h1>
          <p className="font-base xs:text-xs md:text-base">
            This tool is currently under construction.
          </p>
        </div>
      </section>
    </main>
  );
}
