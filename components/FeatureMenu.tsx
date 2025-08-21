import { Star, Plus, Clock, Flame, Vegan } from "lucide-react";
import Link from "next/link";
import dishImage from "@/public/taco.jpg";
import pizza from "@/public/pizza.jpg";
import Image from "next/image";

//badge component
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

const dishes = [
  {
    id: 1,
    name: "Truffle Pasta Carbonara",
    description:
      "Creamy pasta with black truffle, parmesan, and pancetta.Creamy pasta with black truffle, parmesan, and pancetta",
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
    description: "Warm chocolate cake with molten center and vanilla ice cream",
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

const MenuSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto px-4 max-w-screen-xl">
        {/* Header */}
        <div className="text-center px-4 pb-16">
          <h2 className="text-5xl font-extrabold tracking-tight">
            Featured {""}
            <span className="text-primary">Menu</span>
          </h2>

          <div className="mt-6 text-lg text-mutedColor leading-relaxed font-medium">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Discover carefully crafted dishes from our premium cloud kitchens,
              made with the freshest ingredients and bold flavors.
            </p>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <div className="bg-gray-50 flex items-center justify-center text-6xl">
                  <Image
                    src={dish?.image}
                    alt={dish.name}
                    className="object-cover bg-no-repeat w-full h-full"
                  />
                </div>
                {/* Badges */}

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
                      color="bg-green-50 text-accent"
                    />
                  )}
                </div>

                {/* Cook Time */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-white/90 rounded-full px-2 py-1 text-sm font-medium text-gray-600">
                    <Clock className="h-3 w-3" />
                    {dish.cookTime}
                  </div>
                </div>
              </div>

              {/* Card Content */}
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
                    <span className="text-xs text-mutedColor font-medium">
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

        {/* View All Button */}
        <div className="text-center">
          <Link href="/menu">
            <button className="px-10 py-3 border rounded-md font-medium transition hover:bg-orange-500 hover:text-white text-sm text-black">
              View Full Menu
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
