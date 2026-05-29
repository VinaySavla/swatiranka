export const metadata = {
  title: "Refund Policy - Swati Ranka",
  description:
    "Refund policy for Swati Ranka artworks, including returns, exchanges, and transit damage guidance.",
};

export default function RefundPolicyPage() {
  return (
    <section className="bg-white">
      <div className="page-width py-12 lg:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-[3rem] lg:text-[3.8rem] font-light text-[#121212] tracking-wide mb-6">
            Refund policy
          </h1>
          <div className="text-[1.5rem] lg:text-[1.6rem] text-[rgba(0,0,0,0.6)] font-body leading-[2] tracking-[0.04em]">
            <p className="mb-6">
              Due to the handmade nature of our products, we do not accept returns
              or exchanges under any circumstances. Once an order is placed, it
              cannot be canceled, modified, or refunded as all sales are final.
            </p>
            <p className="mb-6">
              We are unable to provide refunds for unsatisfied customers due to the
              fact that every item is custom-made upon order and meticulously
              handcrafted.
            </p>
            <p className="mb-6">
              It is important to note that we are not responsible for any damage
              that may occur to items during transit. Each piece is carefully
              inspected and packaged to ensure it is shipped out in pristine
              condition. However, once the package leaves our hands and is in the
              possession of the shipping carrier, we cannot be held liable for any
              damage that occurs during transportation. As a result, we do not
              offer refunds for items damaged during transit.
            </p>
            <p className="mb-6">
              In the unfortunate event that your order is lost or arrives damaged,
              please reach out to us at rankaswati@gmail.com within 3 days of
              receiving order with photos and details of the damage. We will assess
              the situation and, if eligible, provide instructions for returning the
              damaged items for repair. Please note returning costs will be your
              responsibility and must arrive as originally packaged.
            </p>
            <p className="mb-6">
              We are committed to ensuring your satisfaction and will do our best
              to assist you in resolving any issues that arise.
            </p>
            <p>
              By placing an order, you acknowledge and accept the terms outlined
              in this return and refund policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
