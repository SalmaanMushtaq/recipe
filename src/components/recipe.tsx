import type { SingleRecipe } from "@/types/apitypes";

export default function Recipe({ meal }: { meal: SingleRecipe }) {
  return (
    <div className="bg-white rounded-lg shadow-recipe overflow-hidden">
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
    </div>
  );
}
