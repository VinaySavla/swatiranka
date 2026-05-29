export const metadata = {
  title: "Shipping Policy - Swati Ranka",
  description:
    "Shipping policy for Swati Ranka artworks, including domestic and international delivery timelines.",
};

export default function ShippingPolicyPage() {
  return (
    <section className="bg-white">
      <div className="page-width py-12 lg:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-[3rem] lg:text-[3.8rem] font-light text-[#121212] tracking-wide mb-6">
            Shipping policy
          </h1>
          <div className="text-[1.5rem] lg:text-[1.6rem] text-[rgba(0,0,0,0.6)] font-body leading-[2] tracking-[0.04em]">
            <p className="mb-6">
              Domestic orders within India: Your artwork will be delivered to your
              doorstep within 1-2 weeks from your order confirmation.
            </p>
            <p>
              International Orders: Your artwork will be delivered to your doorstep
              within 3-4 weeks from your order confirmation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
