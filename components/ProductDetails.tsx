"use client";
import dishImage from "@/public/taco.jpg";
import pizza from "@/public/pizza.jpg";
import {
  ChevronRight,
  Clock,
  Flame,
  Heart,
  Minus,
  Plus,
  Share2,
  ShieldCheck,
  ShoppingCartIcon,
  Star,
  Truck,
  UtensilsCrossed,
  Vegan,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function ProductDetails() {
  const [rating, setRating] = useState(0); // current selected rating
  const [hoverRating, setHoverRating] = useState(0); // optional hover effect

  const dishes = [
    {
      id: 1,
      name: "Truffle Pasta Carbonara",
      description:
        "Creamy pasta with black truffle, aged parmesan, crispy pancetta, and fresh herbs. This signature dish combines the earthy richness of black truffle with perfectly cooked al dente pasta, creating an unforgettable dining experience that transports you straight to the heart of Italy.",
      price: 24.99,
      rating: 4.8,
      reviews: 245,
      cookTime: "12 min",
      category: "Italian",
      isSpicy: false,
      isVegetarian: true,
      images: [dishImage, pizza],
      calories: 580,
      restaurant: "Marco Romano",
      deliveryTime: "25-35 min",
    },
  ];

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2 days ago",
      comment:
        "Absolutely incredible! The wagyu beef is so tender and flavorful. Best burger I've ever had!",
      avatar: "SJ",
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 5,
      date: "1 week ago",
      comment:
        "Worth every penny. The truffle aioli takes it to another level. Will definitely order again!",
      avatar: "MC",
    },
    {
      id: 3,
      name: "Emma Davis",
      rating: 4,
      date: "2 weeks ago",
      comment:
        "Really good quality ingredients. The brioche bun was perfect too. Just wished the portion was bigger.",
      avatar: "ED",
    },
  ];

  const dish = dishes[0];

  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {/* Breadcrumbs */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <button>Home</button>
            <ChevronRight className="h-4 w-4" />
            <button>Menu</button>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">{dish.name}</span>
          </div>
        </div>
      </section>

      {/* Product section */}
      <section className="py-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/*  Image Gallery */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg shadow">
                <div className="aspect-square relative">
                  <Image
                    src={dish.images[selectedImageIndex]}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 hover:cursor-zoom-in"
                  />

                  {/* Action buttons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className="p-2 bg-white/90 rounded-md shadow hover:bg-light transition"
                    >
                      <Heart size={20} />
                    </button>
                    <button className="p-2 bg-white/90 rounded-md shadow hover:bg-light transition">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2">
                {dish.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative aspect-square w-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${dish.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/*  Product Details */}
            <div className="space-y-8">
              {/* Info */}
              <div>
                <span className="inline-block px-3 py-1 text-sm rounded-full bg-gray-100 mb-3">
                  {dish.category}
                </span>
                <h1 className="text-4xl font-bold mb-3 leading-tight">
                  {dish.name}
                </h1>

                <div className="flex items-center gap-6 mb-4 text-sm text-mutedColor font-medium">
                  <span className="inline-flex items-center gap-1">
                    <Star size={15} className="fill-warning stroke-none" />
                    {dish.rating} ({dish.reviews} reviews)
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={15} />
                    {dish.cookTime}
                  </span>
                  {dish.restaurant && (
                    <span className="flex items-center gap-2 text-mutedColor">
                      <UtensilsCrossed size={15} />
                      {dish.restaurant}
                    </span>
                  )}
                </div>

                <div className="text-4xl font-bold text-primary mb-4">
                  ${dish.price}
                </div>
                <div className="flex items-center gap-2 mb-6 font-medium">
                  {dish.isSpicy && (
                    <span className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-red-50 text-red-600">
                      <Flame size={14} /> Spicy
                    </span>
                  )}
                  {dish.isVegetarian && (
                    <span className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-green-50 text-accent">
                      <Vegan size={14} /> Vegetarian
                    </span>
                  )}
                </div>

                <p className="text-mutedColor leading-relaxed text-lg mb-6 font-medium">
                  {dish.description}
                </p>

                <div className="flex items-center gap-6 text-sm text-mutedColor font-medium mb-6">
                  <span className="flex items-center gap-2">
                    <Truck size={16} className="text-gray-500" />
                    {dish.deliveryTime}
                  </span>
                  <span className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-gray-500" />
                    Quality Guaranteed
                  </span>
                </div>
              </div>

              {/* Order Section */}
              <div className="border rounded-lg p-8 shadow">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-black">
                      Quantity
                    </span>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                        className="h-10 w-10 flex items-center justify-center border rounded disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Minus size={15} />
                      </button>
                      <span className="font-bold text-xl min-w-8 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="h-10 w-10 flex items-center justify-center border rounded"
                      >
                        <Plus size={15} />
                      </button>
                    </div>
                  </div>

                  <hr />

                  <div className="flex items-center justify-between text-xl">
                    <span className="font-semibold text-black">Total</span>
                    <span className="text-3xl font-bold text-primary">
                      ${(dish.price * quantity).toFixed(2)}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      className="border py-2 rounded-lg hover:bg-gray-100
                     inline-flex items-center justify-center gap-2 transition-all duration-500 text-sm text-black font-semibold"
                    >
                      <ShoppingCartIcon size={15} /> Add to Cart
                    </button>
                    <button
                      className="border py-2 rounded-lg hover:bg-orange-600
                    transition-all duration-500 text-sm text-white font-semibold bg-primary"
                    >
                      Order Now
                    </button>
                  </div>

                  <div className="text-center text-sm text-mutedColor">
                    Free delivery on orders over $25
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="py-16 container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold mb-4 text-black text-center">
            Customer Reviews
          </h3>

          {/* Summary */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="text-5xl font-bold text-primary">{dish.rating}</div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < Math.round(dish.rating)
                        ? "fill-yellow-500 stroke-none"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <p className="text-sm text-mutedColor">{dish.reviews} Reviews</p>
            </div>
          </div>

          {/* Review list */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border-b pb-4 border p-10 rounded-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-black font-semibold">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-light">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="text-black text-base">{review.name}</p>
                      <p className="text-xs text-mutedColor">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-warning">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className={
                          i < review.rating
                            ? "fill-warning stroke-none"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
                <p className="text-base text-mutedColor leading-relaxed font-medium">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>

          {/* Add Review */}
          <div className="mt-6">
            <h4 className="font-semibold text-black mb-2">Write a Review</h4>
            <div className="flex items-center gap-2 mb-3">
              {[...Array(5)].map((_, i) => {
                const starValue = i + 1;
                return (
                  <Star
                    key={i}
                    size={20}
                    className={`cursor-pointer transition ${
                      starValue <= (hoverRating || rating)
                        ? "fill-yellow-500 stroke-none"
                        : "text-gray-300"
                    }`}
                    onClick={() => setRating(starValue)}
                    onMouseEnter={() => setHoverRating(starValue)}
                    onMouseLeave={() => setHoverRating(0)}
                  />
                );
              })}
            </div>
            <textarea
              rows={3}
              className="w-full border rounded-lg p-3 text-sm 
              focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Share your experience..."
            />
            <button className="mt-3 bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition">
              Submit Review
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
