import {
  Clock,
  Locate,
  MapPin,
  MapPinHouse,
  MessageCircle,
  Phone,
  Search,
  Star,
} from "lucide-react";
import React from "react";

export default function TrackOrder() {
  return (
    <>
      <section className="py-12 w-full bg-[linear-gradient(180deg,hsl(0_0%_100%)_0%,hsl(43_96%_98%)_100%)]">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-5 ">
              Track Your <span className="text-primary">Order</span>
            </h1>
            <p className="text-mutedColor font-semibold text-base md:text-lg text-pretty leading-relaxed">
              Enter your order number to get real-time updates on your delivery
            </p>
          </div>

          {/* search order */}
          <div className="flex gap-2 mb-4 max-w-md mx-auto mt-5">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="search"
                placeholder="Enter order code"
                className="w-full border rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button className="px-3 bg-primary hover:bg-orange-600 text-white rounded-md flex items-center justify-center transition-colors text-sm font-semibold">
              Track
            </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-screen-xl px-4 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/*  order tracking summary */}
          <div className="lg:col-span-2 border rounded-md shadow-md p-6 bg-white">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-2xl font-semibold text-gray-900 mb-2">
                Order #CE-2024-001234
              </h4>
              <button className="bg-yellow-500 px-3 py-1 rounded-full text-white text-xs font-semibold">
                Out For Delivery
              </button>
            </div>

            <p className="text-sm font-medium text-gray-500">
              from Bella Vista Kitchen
            </p>

            {/* order stats */}
            <div className="flex justify-around gap-6 flex-wrap mt-5">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Clock size={20} className="text-primary" />
                </div>
                <span className="text-base font-semibold text-black">
                  20 minutes
                </span>
                <p className="text-mutedColor text-sm font-medium">
                  Estimated Time
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <MapPin size={20} className="text-accent" />
                </div>
                <span className="text-base font-semibold text-black">
                  1 mile
                </span>
                <p className="text-mutedColor text-sm font-medium">Distance</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Star size={20} className="text-primary" />
                </div>
                <span className="text-base font-semibold text-black">
                  20 minutes
                </span>
                <p className="text-mutedColor text-sm font-medium">
                  Estimated Time
                </p>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1 space-y-4">
            {/* Driver summary */}
            <div className="border rounded-md shadow-sm p-6">
              <h3 className="text-xl font-semibold text-black">Your Driver</h3>
              <div className="flex items-center gap-3 mb-4 mt-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  MR
                </div>
                <p className="font-semibold">Khalid Hasan Sagar</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="flex-1 inline-flex items-center
                  justify-center rounded-md border 
                  px-3 py-1.5 text-sm font-medium 
                  shadow-sm hover:bg-light transition-colors"
                >
                  <Phone size={15} className="mr-2" />
                  Call
                </button>

                <button
                  type="button"
                  className="flex-1 inline-flex items-center 
                  justify-center
                  rounded-md border px-3 py-1.5 text-sm font-medium 
                  shadow-sm hover:bg-light transition-colors"
                >
                  <MessageCircle size={15} className="mr-2" />
                  Message
                </button>
              </div>
            </div>

            {/* Order Summary*/}
            <div className="border rounded-md shadow-sm p-4">
              <h4 className="font-semibold text-black text-xl">
                Order Summary
              </h4>
              <div className="flex justify-between items-center font-semibold text-black mt-5 text-sm">
                <p>1x Truffle Pasta Carbonara</p>
                <p>$24.99</p>
              </div>
            </div>

            {/* Delivery Address Summary*/}
            <div className="border rounded-md shadow-sm p-4">
              <h4 className="font-semibold text-black text-xl">
                Delivery Address
              </h4>
              <div className="flex items-center gap-2 text-sm font-medium mt-5">
                <MapPinHouse size={15} />
                742 Oak Street, Apt 2B, Food City, FC 12345
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
