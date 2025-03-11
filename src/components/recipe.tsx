import type { SingleRecipe } from "@/types/apitypes";
import { Link } from "@tanstack/react-router";
import { Eye, Heart } from "lucide-react";
import { Button } from "./ui/button";

export default function Recipe({ meal }: { meal: SingleRecipe }) {
  return (
    <div className="bg-white rounded-md shadow-recipe overflow-hidden hover:scale-3d hover:shadow-none">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="h-48 mx-auto object-cover rounded-full"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{meal.strMeal}</h2>
        <p className="text-gray-600 mb-4">{meal.strCategory}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{meal.strArea}</span>
        </div>
      </div>
      <div className="flex justify-end p-4 space-x-4 bg-gray-100/50">
        <div className="flex justify-end p-4 space-x-4 bg-gray-100/50">
          <Link
            to="/$id"
            params={{ id: meal.idMeal }}
            className="h-9 px-4 py-2
            inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium outline-none 
            border bg-background shadow-xs border-green-500 text-blue-600 cursor-pointer hover:bg-green-500 hover:text-white"
          >
            <Eye className="group-hover:text-[#155dfc]" /> Recipe
          </Link>
          <Button
            className="rounded border-orange-500 text-yellow-600 cursor-pointer hover:bg-orange-500 hover:text-white"
            variant={"outline"}
          >
            <Heart className="group-hover:text-orange-500" /> Favorite
          </Button>
        </div>
      </div>
    </div>
  );
}
