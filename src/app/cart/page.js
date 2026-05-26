"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/mockData";
import { Minus, Plus, X, ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <section className="py-8 lg:py-12 bg-[#f5f5f5] min-h-screen">
      <div className="page-width">
        {/* Breadcrumb */}
        <nav className="mb-6 text-[1.3rem] font-body text-[rgba(0,0,0,0.5)] tracking-wide">
          <Link href="/" className="hover:text-[#121212] transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#121212]">Cart</span>
        </nav>

        <h1 className="font-heading text-[3rem] lg:text-[3.6rem] font-light text-[#121212] mb-8 tracking-wide">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-heading text-xl font-light text-[#121212] mb-6">
              Your cart is empty
            </p>
            <Link href="/collections/all" className="button button--secondary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="hidden md:grid grid-cols-[3fr_1fr_1fr_1fr] gap-4 pb-4 border-b border-[rgba(0,0,0,0.1)] text-[1.2rem] font-body font-bold text-[#121212] uppercase tracking-wider">
                <span>Product</span>
                <span className="text-center">Quantity</span>
                <span className="text-right">Total</span>
                <span></span>
              </div>

              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr_1fr] gap-4 py-6 border-b border-[rgba(0,0,0,0.1)] items-center"
                >
                  {/* Product Info */}
                  <div className="flex gap-4">
                    <Link
                      href={`/products/${item.handle}`}
                      className="flex-shrink-0 w-20 h-24 bg-[#f3f3f3] overflow-hidden"
                    >
                      <Image
                        src={item.images[0]}
                        alt={item.title}
                        width={80}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div>
                      <Link href={`/products/${item.handle}`}>
                        <h3 className="font-heading text-[1.5rem] font-light text-[#121212] hover:text-[#9bae9b] transition-colors tracking-wide">
                          {item.title}
                        </h3>
                      </Link>
                      <p className="text-[1.3rem] font-body text-[rgba(0,0,0,0.5)] mt-1 tracking-wide">
                        Size: {item.size}
                      </p>
                      <p className="text-[1.4rem] font-body text-[#121212] mt-1">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center md:justify-center gap-3">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.size,
                          item.quantity - 1
                        )
                      }
                      className="w-9 h-9 flex items-center justify-center border border-[rgba(0,0,0,0.2)] hover:bg-[#121212] hover:text-white transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-[1.4rem] font-body w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.size,
                          item.quantity + 1
                        )
                      }
                      className="w-9 h-9 flex items-center justify-center border border-[rgba(0,0,0,0.2)] hover:bg-[#121212] hover:text-white transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* Total */}
                  <div className="text-right">
                    <span className="text-[1.4rem] font-body font-bold text-[#121212]">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>

                  {/* Remove */}
                  <div className="hidden md:flex justify-end">
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="p-2 text-[rgba(0,0,0,0.3)] hover:text-[#121212] transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>
              ))}

              <div className="mt-6">
                <Link
                  href="/collections/all"
                  className="inline-flex items-center gap-2 text-[1.3rem] font-body text-[#9bae9b] hover:text-[#121212] transition-colors tracking-wide"
                >
                  <ArrowLeft size={16} />
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-[#f3f3f3] p-6 lg:p-8 h-fit">
              <h2 className="font-heading text-[2rem] font-light text-[#121212] mb-6 tracking-wide">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-[1.4rem] font-body text-[rgba(0,0,0,0.75)]">
                  <span>Subtotal</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-[1.4rem] font-body text-[rgba(0,0,0,0.75)]">
                  <span>Shipping</span>
                  <span className="text-[#9bae9b]">Free</span>
                </div>
              </div>

              <div className="border-t border-[rgba(0,0,0,0.1)] pt-4 mb-6">
                <div className="flex justify-between text-[1.6rem] font-body font-bold text-[#121212]">
                  <span>Total</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
              </div>

              <button className="button button--primary w-full mb-3">
                Check Out
              </button>
              <p className="text-[1.2rem] font-body text-[rgba(0,0,0,0.5)] text-center tracking-wide">
                Taxes and shipping calculated at checkout
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
