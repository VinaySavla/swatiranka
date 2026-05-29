"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "@/lib/productsData";
import { useCart } from "@/context/CartContext";

const formatPriceWithCode = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    currencyDisplay: "code",
  }).format(price);

export default function ProductDetailPage() {
  const params = useParams();
  const handle = Array.isArray(params?.handle)
    ? params.handle[0]
    : params?.handle || "";

  const product = products.find((item) => item.handle === handle);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="page-width py-16 text-center">
        <h1 className="font-heading text-[2.4rem] font-light text-[#121212] mb-4">
          Product not found
        </h1>
        <Link href="/collections/all" className="button button--secondary">
          Back to collection
        </Link>
      </div>
    );
  }

  const primarySize = product.sizes?.[0] || "Standard";
  const sizeLabel = product.sizes?.length
    ? product.sizes.join(", ")
    : primarySize;

  const handleAddToCart = () => {
    addToCart(product, primarySize);
  };

  return (
    <section className="bg-[#f6f6f4] py-10 lg:py-16">
      <div className="page-width">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16 items-start">
          <div>
            <div
              className={`grid gap-4 lg:gap-6 ${
                product.images.length > 1
                  ? "grid-cols-1 lg:grid-cols-[72px_1fr]"
                  : "grid-cols-1"
              }`}
            >
              {product.images.length > 1 && (
                <div className="flex gap-3 lg:flex-col order-2 lg:order-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={img}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-16 h-16 lg:w-[72px] lg:h-[72px] overflow-hidden border transition-colors ${
                        selectedImage === idx
                          ? "border-[#9bae9b]"
                          : "border-[rgba(0,0,0,0.12)] hover:border-[#9bae9b]"
                      }`}
                      aria-label={`View ${product.title} ${idx + 1}`}
                    >
                      <Image
                        src={img}
                        alt={`${product.title} ${idx + 1}`}
                        width={72}
                        height={72}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
              <div className="order-1 lg:order-2">
                <div className="relative aspect-[4/3] overflow-hidden bg-white border border-[rgba(0,0,0,0.08)]">
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.title}
                    fill
                    sizes="(min-width: 990px) 55vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 lg:pt-6">
            <h1 className="font-heading text-[3.2rem] lg:text-[4.4rem] font-light text-[#121212] mb-3 tracking-wide">
              {product.title}
            </h1>

            <div className="flex flex-wrap items-baseline gap-4">
              <span className="text-[1.6rem] font-body text-[#121212] tracking-[0.2em] uppercase">
                {formatPriceWithCode(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="text-[1.3rem] text-[rgba(0,0,0,0.4)] line-through tracking-[0.16em] uppercase">
                  {formatPriceWithCode(product.compareAtPrice)}
                </span>
              )}
            </div>

            <p className="text-[1.3rem] text-[rgba(0,0,0,0.55)] mt-2">
              Tax included.{" "}
              <Link
                href="/policies/shipping-policy"
                className="underline underline-offset-4"
              >
                Shipping
              </Link>{" "}
              calculated at checkout.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={handleAddToCart}
                className="w-full border border-[#9bae9b] text-[#9bae9b] bg-transparent py-4 text-[1.2rem] tracking-[0.22em] font-body normal-case"
              >
                Add to cart
              </button>
              <button className="w-full bg-[#9bae9b] text-white py-4 text-[1.2rem] tracking-[0.22em] font-body normal-case">
                Buy it now
              </button>
            </div>

            <div className="mt-8 text-[1.45rem] text-[rgba(0,0,0,0.65)] font-body leading-[2]">
              <p className="mb-6">{product.description}</p>
              {sizeLabel && <p className="mb-2">Size : {sizeLabel}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
