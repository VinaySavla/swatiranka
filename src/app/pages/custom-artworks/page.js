import Image from "next/image";

export const metadata = {
  title: "Custom Artworks - Swati Ranka",
  description: "Commission art pieces custom made for your space by Swati Ranka.",
};

export default function CustomArtworksPage() {
  return (
    <>
      <section className="relative w-full h-[260px] md:h-[420px] lg:h-[520px] overflow-hidden">
        <Image
          src="/images/CustomArtWork/WhatsApp_Image_2024-01-16_at_1.16.57_PM_1-CustomArtWorkBanner.jpg"
          alt="Custom Artworks"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "51.0129% 9.7622%" }}
          priority
        />
      </section>

      <section className="bg-white">
        <div className="page-width py-12 lg:py-16">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-[1.55rem] lg:text-[1.6rem] text-[rgba(18,18,18,0.7)] font-body leading-relaxed tracking-[0.04em]">
              Connect with the artist on swatiranka.art@gmail.com or drop a
              message here to commission art pieces custom made for your space!
            </p>
          </div>

          <form className="max-w-4xl mx-auto space-y-6">
            <h2 className="sr-only">Contact form</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                id="ContactForm-name"
                name="contact[Name]"
                placeholder="Name"
                className="w-full border border-[#6b6b6b] bg-transparent px-6 py-4 text-[1.5rem] text-[#2b2b2b] placeholder:text-[#6b6b6b] font-body tracking-[0.2em] focus:outline-none focus:border-[#121212]"
              />
              <input
                type="email"
                id="ContactForm-email"
                name="contact[email]"
                placeholder="Email *"
                required
                className="w-full border border-[#6b6b6b] bg-transparent px-6 py-4 text-[1.5rem] text-[#2b2b2b] placeholder:text-[#6b6b6b] font-body tracking-[0.2em] focus:outline-none focus:border-[#121212]"
              />
            </div>

            <input
              type="tel"
              id="ContactForm-phone"
              name="contact[Phone number]"
              pattern="[0-9\-]*"
              placeholder="Phone number"
              className="w-full border border-[#6b6b6b] bg-transparent px-6 py-4 text-[1.5rem] text-[#2b2b2b] placeholder:text-[#6b6b6b] font-body tracking-[0.2em] focus:outline-none focus:border-[#121212]"
            />

            <textarea
              id="ContactForm-body"
              name="contact[Comment]"
              rows="6"
              placeholder="Comment"
              className="w-full border border-[#6b6b6b] bg-transparent px-6 py-4 text-[1.5rem] text-[#2b2b2b] placeholder:text-[#6b6b6b] font-body tracking-[0.2em] focus:outline-none focus:border-[#121212] resize-y"
            ></textarea>

            <div className="pb-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-[#9bae9b] text-white px-10 py-3 text-[1.2rem] tracking-[0.2em] font-body normal-case"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
