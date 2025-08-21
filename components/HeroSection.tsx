import { ArrowRightIcon, Clock, MapPin, Star, StarIcon } from "lucide-react";
import heroImage from "@/public/hero-kitchen.jpg";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Professional kitchen preparing fresh dishes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center space-x-2">
            <StarIcon size={30} className="fill-yellow-400" />
            <span className="text-white/90 font-medium">
              Rated #1 Cloud Kitchen Platform
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Fresh Home Food
            <span className="block bg-gradient-primary bg-clip-text text-primary">
              Delivered Fast
            </span>
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Experience the future of food delivery with CloudEats. Order from
            premium cloud kitchens, customize every dish, and track your order
            in real-time. Fresh ingredients, fast delivery, unbeatable taste.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/menu">
              <button
                type="button"
                className="bg-gradient-to-r from-orange-500 to-orange-400 
             px-7 py-3 flex items-center text-white rounded-md 
             hover:shadow-lg hover:scale-105 transition-all duration-300 group font-medium"
              >
                Start Ordering
                <ArrowRightIcon
                  size={20}
                  className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </Link>
            <Link href="/menu">
              <button className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-7 py-3 flex items-center rounded-md transition-colors font-medium">
                View Menu
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-lg">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-2xl font-bold text-white">20 min</span>
              </div>
              <p className="text-white text-sm font-medium">Average Delivery</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-2xl font-bold text-white ">50+</span>
              </div>
              <p className="text-white text-sm font-medium">Cloud Kitchens</p>
            </div>

            <div className="text-center col-span-2 md:col-span-1">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-5 w-5 text-yellow-400 mr-2 fill-current" />
                <span className="text-2xl font-bold text-white">4.9</span>
              </div>
              <p className="text-white text-sm font-medium">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
