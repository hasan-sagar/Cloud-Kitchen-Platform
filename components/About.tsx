import { Users, MapPin, ChefHat, Truck, Star, Award } from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: Users,
      value: "100K+",
      label: "Happy Customers",
      color: "bg-primary",
    },
    {
      icon: ChefHat,
      value: "50+",
      label: "Partner Kitchens",
      color: "bg-secondary",
    },
    {
      icon: Truck,
      value: "10K+",
      label: "Deliveries Monthly",
      color: "bg-accent",
    },
    { icon: MapPin, value: "25+", label: "Cities Served", color: "bg-info" },
  ];

  return (
    <>
      {/* Intro Section */}
      <section className="py-20 bg-[linear-gradient(180deg,hsl(0_0%_100%)_0%,hsl(43_96%_98%)_100%)] w-full">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="bg-primary/10 text-primary text-xs md:text-sm font-semibold px-3 py-1 rounded-full border-primary/40 border">
              About CloudEats
            </span>
            <h1 className="text-4xl md:text-4xl xl:text-5xl font-bold mb-6 mt-10">
              Revolutionizing{" "}
              <span className="text-primary">Food Delivery</span>
            </h1>
            <p className="text-base md:text-lg text-pretty font-semibold text-mutedColor mb-9 leading-relaxed max-w-3xl mx-auto">
              Founded in 2020, CloudEats has transformed how people experience
              food delivery. We connect premium cloud kitchens with hungry
              customers, ensuring fresh, high-quality meals delivered faster
              than ever before.
            </p>
            <button className="px-5 py-3 rounded-md font-semibold text-white bg-primary shadow-lg hover:scale-105 transition">
              Join Our Mission
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 w-full">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 xl:gap-12 text-center">
            {stats.map(({ icon: Icon, value, label, color }, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 xl:w-16 xl:h-16 flex items-center justify-center rounded-full ${color} mb-3`}
                >
                  <Icon size={24} className="text-white" />
                </div>
                <div className="text-3xl xl:text-4xl font-bold bg-gradient-primary text-slate-700 mb-2">
                  {value}
                </div>
                <p className="text-mutedColor font-medium text-sm md:text-base">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 xl:py-28">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 xl:gap-16 items-center">
            {/* Left side (story text) */}
            <div className="space-y-3 xl:space-y-5 max-w-2xl ">
              <h2 className="text-4xl xl:text-5xl font-bold">Our Story</h2>
              <p className="text-mutedColor font-medium leading-relaxed">
                CloudEats was born from a simple frustration: why did it take so
                long to get fresh, quality food delivered? Our founders, Sarah
                and Marco, spent countless nights sketching solutions on napkins
                in their favorite restaurant.
              </p>
              <p className="text-mutedColor font-medium leading-relaxed">
                The breakthrough came when they realized that cloud kitchens
                could revolutionize the industry. By partnering with premium
                chefs and optimizing every step of the delivery process, they
                created something special.
              </p>
              <p className="text-mutedColor font-medium leading-relaxed">
                Today, CloudEats serves over 100,000 happy customers across 25
                cities, with an average delivery time of just 15 minutes.
              </p>
            </div>

            {/* Right side (award card) */}
            <div className="bg-primary rounded-lg p-8 xl:p-12 text-white shadow-lg">
              <div className="flex items-center mb-6">
                <Award size={30} className="mr-3" />
                <h3 className="text-2xl xl:text-3xl font-bold">
                  Award Winning
                </h3>
              </div>
              <ul className="space-y-4 xl:space-y-6">
                <li className="flex items-center">
                  <Star size={20} className="mr-3 fill-white" />
                  <span>Best Food Delivery App 2023</span>
                </li>
                <li className="flex items-center">
                  <Star size={20} className="mr-3 fill-white" />
                  <span>Fastest Growing Startup 2022</span>
                </li>
                <li className="flex items-center">
                  <Star size={20} className="mr-3 fill-white" />
                  <span>Customer Choice Award 2021</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
