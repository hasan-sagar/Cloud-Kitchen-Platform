"use client";
import {
  ArrowLeft,
  Clock,
  CreditCard,
  Minus,
  Plus,
  Tag,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import pizza from "@/public/pizza.jpg";
import Link from "next/link";
import { useState } from "react";
import NoCartImage from "@/public/no-cart.gif";

export default function Cart() {
  const [cart, setCart] = useState<number>(1);
  return (
    <>
      {cart === 0 ? (
        <section className="py-20 w-full">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Image
                src={NoCartImage}
                height={150}
                width={150}
                alt=""
                className="text-primary flex justify-center items-center mx-auto"
              />
              <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-10 mt-10">
                Your Cart Is Empty
              </h1>
              <Link
                href={"/menu"}
                className="px-10 py-2 rounded-md font-semibold text-white bg-primary shadow-lg hover:scale-105 transition inline-flex gap-2 items-center"
              >
                <ArrowLeft size={15} /> Browse Menu
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <div>
          <section className="py-10 bg-[linear-gradient(180deg,hsl(0_0%_100%)_0%,hsl(43_96%_98%)_100%)] w-full">
            {/* heading */}
            <div className="container max-w-screen-xl mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-4xl xl:text-5xl font-bold mb-6 mt-10">
                  Your <span className="text-primary">Cart</span>
                </h1>
                <p className="text-base md:text-lg text-pretty font-semibold text-mutedColor mb-9 leading-relaxed max-w-3xl mx-auto">
                  1 item ready for checkout
                </p>
              </div>
            </div>
          </section>

          {/* heading */}

          {/* cart contents */}
          <section className="py-12">
            <div className="container mx-auto max-w-screen-xl px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl text-dark font-semibold">
                      Cart Items
                    </h2>
                    <button className="flex items-center text-red-500 font-semibold text-sm hover:bg-danger hover:text-white px-2 py-2 rounded-md transition-all duration-300">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Clear Cart
                    </button>
                  </div>
                  {/*  cart items here */}
                  <div className="border rounded-md shadow-sm p-8 flex gap-4 items-start">
                    {/* Image */}
                    <div className="md:flex items-center justify-center hidden">
                      <Image
                        src={pizza}
                        width={150}
                        height={150}
                        alt="Wagyu Beef Burger"
                        className="object-cover rounded-md mt-2"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="text-lg font-semibold text-black">
                            Wagyu Beef Burger
                          </h5>
                          <span className="inline-flex items-center px-2 py-1 text-xs rounded-full font-medium bg-gray-100 text-dark mt-2">
                            American
                          </span>
                        </div>
                        <button className="text-red-500 hover:text-red-600">
                          <Trash2 size={18} />
                        </button>
                      </div>

                      {/* Description */}
                      <p className="text-mutedColor text-sm mt-3 leading-relaxed line-clamp-2 font-semibold">
                        Premium wagyu patty with truffle aioli, aged cheddar,
                        arugula on brioche bun. Made from authentic Japanese
                        Wagyu beef, this burger represents the pinnacle of
                        burger craftsmanship. Premium wagyu patty with truffle
                        aioli, aged cheddar, arugula on brioche bun. Made from
                        authentic Japanese Wagyu beef, this burger represents
                        the pinnacle of burger craftsmanship.
                      </p>

                      {/* Bottom: quantity + price */}
                      <div className="flex justify-between items-center mt-3">
                        {/* Quantity */}
                        <div className="flex items-center gap-5">
                          {/* minus button */}
                          <button className="border rounded-md p-2 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                            <Minus size={15} />
                          </button>
                          {/* quantity */}
                          <span className="text-base font-medium">1</span>
                          {/* plus button */}
                          <button className="border rounded-md p-2 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                            <Plus size={15} />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-primary font-bold text-xl">
                            $28.99
                          </p>
                          <p className="text-sm text-gray-500">$28.99 each</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1 border rounded-md shadow-sm p-4">
                  <h2 className="text-lg font-semibold mb-4 text-black">
                    Order Summary
                  </h2>
                  {/* promo code */}
                  <div className="flex gap-2 mb-4">
                    <input
                      type="search"
                      placeholder="Enter promo code"
                      className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <button className="px-3 bg-primary hover:bg-orange-600 text-white rounded-md flex items-center justify-center transition-colors">
                      <Tag size={18} />
                    </button>
                  </div>
                  {/* promo code */}
                  <hr />
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between text-black font-medium">
                      <span>Subtotal</span>
                      <span>$120</span>
                    </div>
                    <div className="flex justify-between text-black font-medium">
                      <span>Delivery fee</span>
                      <span>$10</span>
                    </div>
                    <div className="flex justify-between text-accent font-semibold">
                      <span>Discount</span>
                      <span> - $10</span>
                    </div>
                    <hr />
                    <div className="flex justify-between text-lg font-bold leading-relaxed">
                      <span>Total</span>
                      <span>$130</span>
                    </div>
                    <span className="text-sm text-mutedColor font-medium flex items-center gap-2 mb-10">
                      <Clock size={15} /> Estimated delivery time 15-20 minutes
                    </span>
                    <button className="w-full bg-primary hover:bg-orange-600 text-white py-3 rounded-md transition-colors font-semibold flex items-center justify-center gap-2 text-sm">
                      <CreditCard size={18} /> Proceed to checkout
                    </button>
                    <Link
                      href={"/menu"}
                      className="w-full bg-transparent hover:bg-warning text-black py-3 rounded-md transition-colors font-semibold flex items-center justify-center gap-2 text-sm"
                    >
                      <ArrowLeft size={18} /> Continue Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
