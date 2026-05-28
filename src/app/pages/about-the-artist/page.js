import Image from "next/image";

export const metadata = {
  title: "About The Artist - Swati Ranka",
  description: "About Swati Ranka, artist dedicated to the exploration of diverse styles, subjects, and mediums.",
};

export default function AboutTheArtistPage() {
  return (
    <>
      <section className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <Image
          src="https://swatiranka.in/cdn/shop/files/83A1214.jpg?v=1704838956&width=2000"
          alt="Swati Ranka - Artist"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "42.7462% 13.1674%" }}
          priority
        />
      </section>

      <div className="page-width py-12 lg:py-20 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-[2.8rem] lg:text-[4rem] text-[#121212] mb-12 tracking-wide font-light">
            About The Artist
          </h2>

          <div className="prose prose-lg max-w-none text-[rgba(18,18,18,0.75)] font-body text-center mx-auto">
            <p className="mb-8 leading-relaxed text-[1.5rem] lg:text-[1.6rem]">
              Thank you for stepping into the realm of my creations. As an artist, I am
              dedicated to the exploration of diverse styles, subjects, and mediums, constantly
              pushing the boundaries of creativity. For me, art is not just a skill; it&apos;s a
              journey from the void of nothingness to the splendor of creation.
            </p>

            <p className="mb-8 leading-relaxed text-[1.5rem] lg:text-[1.6rem]">
              Driven by a profound love for the artistic process, I find joy in experimenting
              with different elements, weaving them into visual tales that resonate with a
              wide audience. My artistic journey is not only a personal passion but also a divine
              gift, as I believe God has blessed me with the ability to craft beauty. In
              every stroke and every hue, I pour my heart and soul, aiming to make spaces a bit
              more enchanting and souls a bit more inspired. Join me on this artistic odyssey,
              where simplicity, joy, and the transformative power of creation converge.
            </p>

            <p className="mt-8 text-[1.5rem] lg:text-[1.6rem] leading-relaxed">- Swati</p>
          </div>
        </div>
      </div>
    </>
  );
}
