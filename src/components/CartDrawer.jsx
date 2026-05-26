"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { X, Plus, Minus } from "lucide-react";
import { formatPrice } from "@/lib/mockData";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[420px] bg-[#f5f5f5] z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(0,0,0,0.1)] bg-[#9bae9b]">
              <h2 className="font-heading text-lg font-light text-[#121212] tracking-wide">
                Cart ({cartCount})
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-[#121212] hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <p className="font-heading text-xl font-light text-[#121212] mb-4">
                    Your cart is empty
                  </p>
                  <Link
                    href="/collections/all"
                    className="button button--secondary"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={`${item.id}-${item.size}`}
                      className="flex gap-4 pb-6 border-b border-[rgba(0,0,0,0.1)]"
                    >
                      <div className="w-20 h-24 flex-shrink-0 bg-gray-200 overflow-hidden">
                        <img
                          src={item.images[0]}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading text-[1.5rem] font-light text-[#121212] mb-1 truncate">
                          {item.title}
                        </h3>
                        <p className="text-[1.3rem] text-[rgba(0,0,0,0.6)] mb-2">
                          Size: {item.size}
                        </p>
                        <p className="text-[1.4rem] font-body font-bold text-[#121212] mb-3">
                          {formatPrice(item.price)}
                        </p>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.size,
                                item.quantity - 1
                              )
                            }
                            className="w-7 h-7 flex items-center justify-center border border-[rgba(0,0,0,0.2)] hover:bg-[#121212] hover:text-white transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-[1.4rem] font-body w-6 text-center">
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
                            className="w-7 h-7 flex items-center justify-center border border-[rgba(0,0,0,0.2)] hover:bg-[#121212] hover:text-white transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="self-start p-1 text-[rgba(0,0,0,0.4)] hover:text-[#121212] transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-[rgba(0,0,0,0.1)] px-6 py-4 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-lg font-light text-[#121212]">
                    Total
                  </span>
                  <span className="font-body text-lg font-bold text-[#121212]">
                    {formatPrice(cartTotal)}
                  </span>
                </div>
                <div className="space-y-3">
                  <Link
                    href="/cart"
                    className="button button--secondary w-full"
                    onClick={() => setIsCartOpen(false)}
                  >
                    View Cart
                  </Link>
                  <button className="button button--primary w-full">
                    Check Out
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
