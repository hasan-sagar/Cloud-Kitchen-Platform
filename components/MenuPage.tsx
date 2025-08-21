"use client";

import { Search, Star, Plus, Clock, Flame, Vegan, Filter } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import dishImage from "@/public/taco.jpg";
import pizza from "@/public/pizza.jpg";

// Badge component
const Badge = ({
  icon: Icon,
  text,
  color,
}: {
  icon: any;
  text: string;
  color: string;
}) => (
  <span
    className={`px-2 py-1 text-sm flex items-center gap-1 rounded-full font-medium ${color}`}
  >
    <Icon className="h-3 w-3" />
    {text}
  </span>
);

export default function MenuPage() {
  const categories = [
    "All",
    "Italian",
    "Asian",
    "Mexican",
    "American",
    "Indian",
    "Healthy",
    "Desserts",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const dishes = [
    {
      id: 1,
      name: "Truffle Pasta Carbonara",
      description: "Creamy pasta with black truffle, parmesan, and pancetta.",
      price: 24.99,
      rating: 4.8,
      reviews: 245,
      cookTime: "12 min",
      category: "Italian",
      isSpicy: false,
      isVegetarian: true,
      image: dishImage,
    },
    {
      id: 2,
      name: "Szechuan Kung Pao Chicken",
      description: "Spicy stir-fried chicken with peanuts and vegetables",
      price: 19.99,
      rating: 4.9,
      reviews: 189,
      cookTime: "15 min",
      category: "Asian",
      isSpicy: true,
      isVegetarian: false,
      image: dishImage,
    },
    {
      id: 3,
      name: "Gourmet Fish Tacos",
      description: "Fresh catch with avocado salsa and lime crema",
      price: 16.99,
      rating: 4.7,
      reviews: 156,
      cookTime: "10 min",
      category: "Mexican",
      isSpicy: false,
      isVegetarian: false,
      image: dishImage,
    },
    {
      id: 4,
      name: "Buddha Bowl Deluxe",
      description: "Quinoa, roasted vegetables, tahini dressing",
      price: 14.99,
      rating: 4.6,
      reviews: 98,
      cookTime: "8 min",
      category: "Healthy",
      isSpicy: false,
      isVegetarian: true,
      image: pizza,
    },
    {
      id: 5,
      name: "Wagyu Beef Burger",
      description: "Premium wagyu patty with truffle aioli and aged cheddar",
      price: 28.99,
      rating: 4.9,
      reviews: 312,
      cookTime: "18 min",
      category: "American",
      isSpicy: false,
      isVegetarian: false,
      image: dishImage,
    },
    {
      id: 6,
      name: "Chocolate Lava Cake",
      description:
        "Warm chocolate cake with molten center and vanilla ice cream",
      price: 8.99,
      rating: 4.8,
      reviews: 278,
      cookTime: "5 min",
      category: "Desserts",
      isSpicy: false,
      isVegetarian: true,
      image: pizza,
    },
  ];

  return (
    <section className="w-full bg-[linear-gradient(180deg,hsl(0_0%_100%)_0%,hsl(43_96%_98%)_100%)]">
      {/* Header + search + categories */}
      <div className="max-w-screen-xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-extrabold tracking-tight">
            Full <span className="text-primary">Menu</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mt-5 font-medium text-gray-600 leading-relaxed">
            Explore our complete collection of dishes from premium cloud
            kitchens
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search dishes..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md
              focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md font-medium text-sm transition-all duration-200
                ${
                  isSelected
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Menu cards */}
      <section className="max-w-screen-xl mx-auto px-4 pb-20">
        <div className="max-w-screen-xl mx-auto px-4 mb-8">
          <div className="flex items-center justify-between mb-6">
            <p className="text-mutedColor text-base font-medium">
              Showing 10 dishes
              <span className="ml-2 text-gray-500">| 10 filter applied</span>
            </p>

            {/* Filters Button */}
            <button
              className="font-medium text-black flex justify-center 
            items-center px-3 py-2 rounded-md border text-sm"
            >
              <Filter size={15} className="mr-2" />
              Filters
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative h-56">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  className="object-cover w-full h-full"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {dish.isSpicy && (
                    <Badge
                      icon={Flame}
                      text="Spicy"
                      color="bg-red-50 text-red-600"
                    />
                  )}
                  {dish.isVegetarian && (
                    <Badge
                      icon={Vegan}
                      text="Vegetarian"
                      color="bg-green-50 text-green-600"
                    />
                  )}
                </div>

                {/* Cook time */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-white/90 rounded-full px-2 py-1 text-sm font-medium text-gray-600">
                    <Clock className="h-3 w-3" />
                    {dish.cookTime}
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold group-hover:text-orange-500 transition-colors">
                    {dish.name}
                  </h3>
                  <span className="text-lg font-bold text-orange-500">
                    ${dish.price}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-1">
                  {dish.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-black font-semibold">
                        {dish.rating}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">
                      ({dish.reviews})
                    </span>
                  </div>

                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-sm bg-orange-500 text-white hover:bg-orange-600 transition">
                    <Plus className="h-4 w-4" />
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
