import Image from 'next/image';

export default async function About() {
  return (
    <main>
      <section className="max-w-2xl flex flex-col md:flex-row mx-4 lg:mx-auto text-black">
        <div className="flex flex-col z-20 mt-20 bg-white/80 py-8 px-4 lg:px-16 rounded-xl text-lg gap-4">
          <h1 className=" antialiased text-3xl font-bold mb-2 text-secondary-500">
            <span className="text-primary-500">About </span>Us
          </h1>
          <Image
            alt="Us"
            src="/us.jpg"
            width={500} // Adjust the width and height to your desired size
            height={500} // Make them both equal to create a square
            className="object-cover w-full h-full"
          />
          <p>
            Zu Beginn der Coronapandemie im März 2020 wurden einige Jugendliche
            aus unserer Gemeinde damit beauftragt, unsere Gemeindegottesdienste
            live zu streamen und Setups für kleinere Formate, Interviews und
            Kurzfilme zu entwickeln. Das Mauritius.Media Team war geboren.
          </p>
          <div>
            Inzwischen gehören etwa 10 Jugendliche und junge Erwachsene zum
            Mauritius.Media Team. Über 80 Gottesdienste wurden mit interaktiven
            Inhalten live gestreamt, Kurzfilme mit Kindern der Kinderkirche und
            Mitarbeitern aus der Evangelischen Jugend produziert, Interviews mit
            Bürgermeister und Künstler aufgezeichnet und vieles mehr.
          </div>

          <div>
            Unser Mauritius.Media Team ist ein wichtiger Baustein in unserer
            Jugendarbeit geworden und so konzipiert, dass junge Menschen im
            Umgang mit Video- und Tontechnik, Filmproduktion und Regiearbeit
            geschult und hochwertige Inhalte für unsere Gemeindearbeit
            produziert werden. Wir möchten gerne, dass unser Mauritius.Media
            Team noch weiter wächst und junge Menschen ihre Kreativität
            entdecken und einbringen können. Das Engagement und die tollen
            Produktionen unseres Media Teams begeistern uns richtig!
          </div>
          <div>
            Wenn Sie unser Mauritius.Media Team unterstützen wollen, dann freuen
            wir uns über Rückmeldungen und Spenden!
          </div>
        </div>
      </section>
    </main>
  );
}
