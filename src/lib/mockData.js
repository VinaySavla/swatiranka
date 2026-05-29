export const heroSlides = [
  {
    id: 1,
    image:
      "/images/Home/slideshow/01-83A0929.jpg",
    alt: "Abstract painting",
    objectPosition: "70% 18%",
  },
  {
    id: 2,
    image:
      "/images/Home/slideshow/02-WhatsApp_Image_2023-12-02_at_5.14.35_PM_20.jpg",
    alt: "Textured artwork",
    objectPosition: "50% 50%",
  },
  {
    id: 3,
    image:
      "/images/Home/slideshow/03-WhatsApp_Image_2023-12-02_at_5.14.35_PM_22.jpg",
    alt: "Colorful abstract art",
    objectPosition: "50% 50%",
  },
  {
    id: 4,
    image:
      "/images/Home/slideshow/04-83A0619.jpg",
    alt: "Modern art piece",
    objectPosition: "50% 30%",
  },
  {
    id: 5,
    image:
      "/images/Home/slideshow/05-IMG_8837.jpg",
    alt: "Art studio",
    objectPosition: "50% 50%",
  },
];

export const collections = [
  {
    id: 1,
    title: "Woman",
    handle: "woman",
    image:
      "/images/Home/WhatsAppImage2024-01-16at1.02.29PM-WomenCategoryBanner.jpg",
    objectPosition: "50% 30%",
  },
  {
    id: 2,
    title: "Abstract Landscapes",
    handle: "abstract-landscapes",
    image:
      "/images/Home/IMG_8906-AbstractLandscapeCategoryBanner.jpg",
    objectPosition: "50% 50%",
  },
  {
    id: 3,
    title: "Texture Art",
    handle: "texture-art",
    image:
      "/images/Home/IMG_8837-TextureArtCategoryBanner.jpg",
    objectPosition: "50% 50%",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Vivek S",
    text: "Swati's art brings a lot personality to one's space. They created a unique atmosphere with beautiful and vibrant paintings.",
    image:
      "/images/Home/IMG_8909-VivekTestimonial.jpg",
    objectPosition: "51% 3%",
  },
  {
    id: 2,
    name: "Sonia Gupta",
    text: "Swati's paintings are soulful and enriches our day to day mundane life.",
    image:
      "/images/Home/WhatsApp_Image_2023-12-02_at_5.14.35_PM_21-SoniaTesimonial.jpg",
    objectPosition: "50% 50%",
  },
  {
    id: 3,
    name: "Arif K",
    text: "Her work is so versatile, her paintings are statement pieces and have acted as conversation starters at my place.",
    image:
      "/images/Home/IMG_8840-ArifTestimonial.jpg",
    objectPosition: "50% 50%",
  },
];

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "About the Artist", href: "/pages/about-the-artist" },
  { title: "Artworks", href: "/collections/all" },
  {
    title: "Shop By Category",
    href: "#",
    submenu: [
      { title: "Abstract Landscapes", href: "/collections/all?category=abstract-landscapes" },
      { title: "Contemporary", href: "/collections/all?category=contemporary" },
      { title: "Texture Art", href: "/collections/all?category=texture-art" },
      { title: "Woman", href: "/collections/all?category=woman" },
      { title: "All Artworks", href: "/collections/all" },
    ],
  },
  { title: "Custom Art", href: "/pages/custom-artworks" },
];

export const footerLinks = {
  customerSupport: [
    { title: "Search", href: "/search" },
    { title: "Shipping and Delivery", href: "/policies/shipping-policy" },
    { title: "Returns and Refund", href: "/policies/refund-policy" },
  ],
  contactEmail: "swatiranka.art@gmail.com",
  social: {
    facebook: "https://www.facebook.com/swatiranka.art/",
    instagram: "https://www.instagram.com/swatiranka.art/",
  },
};

export const categories = [
  "All Artworks",
  "Abstract Landscapes",
  "Contemporary",
  "Texture Art",
  "Woman",
];

export function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
