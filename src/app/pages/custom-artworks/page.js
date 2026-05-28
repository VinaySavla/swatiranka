import Image from "next/image";

export const metadata = {
  title: "Custom Artworks - Swati Ranka",
  description: "Commission art pieces custom made for your space by Swati Ranka.",
};

export default function CustomArtworksPage() {
  return (
    <>
      <section className="relative w-full h-[300px] md:h-[450px] lg:h-[600px] overflow-hidden">
        <Image
          src="https://swatiranka.in/cdn/shop/files/WhatsApp_Image_2024-01-16_at_1.16.57_PM_1.jpg?v=1705400526&width=2000"
          alt="Custom Artworks"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "51.0129% 9.7622%" }}
          priority
        />
      </section>

      <div className="page-width py-12 lg:py-16">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-[1.5rem] lg:text-[1.6rem] text-[rgba(18,18,18,0.75)] font-body leading-relaxed">
            Connect with the artist on swatiranka.art@gmail.com or drop a message here to commission art pieces custom made for your space!
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 md:px-0">
          <form className="space-y-6 form-group">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  id="ContactForm-name"
                  name="contact[Name]"
                  className="block px-5 pb-4 pt-6 w-full text-base text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                />
                <label
                  htmlFor="ContactForm-name"
                  className="absolute text-gray-500 text-base duration-300 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="ContactForm-email"
                  name="contact[email]"
                  required
                  className="block px-5 pb-4 pt-6 w-full text-base text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                />
                <label
                  htmlFor="ContactForm-email"
                  className="absolute text-gray-500 text-base duration-300 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  Email <span aria-hidden="true">*</span>
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                type="tel"
                id="ContactForm-phone"
                name="contact[Phone number]"
                pattern="[0-9\-]*"
                className="block px-5 pb-4 pt-6 w-full text-base text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder=" "
              />
              <label
                htmlFor="ContactForm-phone"
                className="absolute text-gray-500 text-base duration-300 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
              >
                Phone number
              </label>
            </div>

            <div className="relative">
              <textarea
                id="ContactForm-body"
                name="contact[Comment]"
                rows="10"
                className="block px-5 pb-4 pt-5 w-full text-base text-gray-900 bg-transparent border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer resize-y"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="ContactForm-body"
                className="absolute text-gray-500 text-base duration-300 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
              >
                Comment
              </label>
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className="button button--secondary border-[#121212] text-[#121212] hover:bg-[#121212] hover:text-white px-10 py-3 text-sm tracking-[0.2em] w-auto inline-block min-w-[120px] transition-colors duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
