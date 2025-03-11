import type { Recipes } from "@/types/apitypes";
import Recipe from "./recipe";
export default function RecipeList({ meals }: Recipes) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {meals.map((meal) => (
        <Recipe key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}
