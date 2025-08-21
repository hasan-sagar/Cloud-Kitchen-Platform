import {
  Smartphone,
  Clock,
  Star,
  ChefHat,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";

import Image from "next/image";

import Stripe from "@/public/stripe.svg";

type Feature = {
  icon?: LucideIcon;
  image?: any;
  title: string;
  description: string;
  color: string;
};

export default function FeatureSection() {
  const features: Feature[] = [
    {
      icon: Smartphone,
      title: "Real-Time Tracking",
      description:
        "Monitor your order from kitchen to doorstep with live tracking and updates.",
      color: "primary",
    },
    {
      icon: ChefHat,
      title: "Custom Orders",
      description:
        "Personalize every dish with ingredients, spice levels, and preferences.",
      color: "secondary",
    },
    {
      icon: Clock,
      title: "Lightning Fast",
      description:
        "Average 20-minute delivery from our network of premium cloud kitchens.",
      color: "accent",
    },
    {
      // icon: Stripe,
      image: Stripe,
      title: "Secure Payments",
      description:
        "Multiple payment options with bank-grade security and instant confirmations.",
      color: "primary",
    },
    {
      icon: Star,
      title: "Quality Assured",
      description:
        "Every dish rated by customers with transparent reviews and quality scores.",
      color: "secondary",
    },
    {
      icon: ShieldCheck,
      title: "Health Certified",
      description:
        "All kitchens certified with detailed nutritional information for every meal.",
      color: "accent",
    },
  ];

  return (
    <section className="pt-16 pb-12 max-w-[1400px] mx-auto">
      <div className="text-center px-4 pb-16">
        <h2 className="text-5xl font-extrabold tracking-tight">
          Why Choose {""}
          <span className="text-primary">CloudEats?</span>
        </h2>

        <div className="mt-6 text-lg text-mutedColor leading-relaxed font-medium">
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Experience the perfect blend of technology, quality, and speed that
            food delivery effortless and enjoyable.
          </p>
        </div>
      </div>

      {/* card section */}
      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-8 text-center bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
          >
            {/* Icon */}
            <div
              className={`bg-transparent mx-auto mb-6 flex items-center justify-center 
                  ${
                    feature.color === "primary" && "bg-orange-100 text-primary"
                  } 
                  ${
                    feature.color === "secondary" &&
                    "bg-purple-100 text-secondary"
                  } 
                  ${feature.color === "accent" && "bg-green-100 text-accent"}`}
            >
              {feature.icon && <feature.icon className="h-8 w-8" />}
              {feature.image && (
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={60}
                  height={60}
                />
              )}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <hr className="border-dotted" />

      {/* stats */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-primary mb-2">
            100K+
          </div>
          <p className="text-mutedColor">Happy Customers</p>
        </div>
        <div>
          <div className="text-4xl font-bold bg-gradient-secondary bg-clip-text text-accent mb-2">
            50+
          </div>
          <p className="text-mutedColor">Cloud Kitchens</p>
        </div>
        <div>
          <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-primary mb-2">
            500+
          </div>
          <p className="text-mutedColor">Menu Items</p>
        </div>
        <div>
          <div className="text-4xl font-bold bg-gradient-secondary bg-clip-text text-accent mb-2">
            15min
          </div>
          <p className="text-mutedColor">Avg Delivery</p>
        </div>
      </div>
    </section>
  );
}
