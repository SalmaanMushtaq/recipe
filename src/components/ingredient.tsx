import { fetchIngredient } from "@/lib/query-options";
import type { SingleRecipe } from "@/types/apitypes";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";

export default function Ingredient() {
  const { id } = useParams({ from: "/$id" });
  const { data } = useSuspenseQuery(fetchIngredient(id));

  // Handle potential API response issues
  if (!data?.meals || data.meals.length === 0) {
    return <p className="text-center text-red-500">Recipe not found</p>;
  }

  const rec: SingleRecipe = data.meals[0];

  // Extract valid ingredients and measurements
  const ingredients: string[] = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = rec[`strIngredient${i}` as keyof SingleRecipe] as string;
    const measure = rec[`strMeasure${i}` as keyof SingleRecipe] as string;
    if (ingredient?.trim()) {
      ingredients.push(`${measure} ${ingredient}`.trim());
    }
  }

  return (
    <section className="min-h-screen bg-white shadow-lg rounded-lg p-6 flex justify-center">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section - Image */}
        <div className="flex-1 max-w-sm">
          <img
            src={rec.strMealThumb}
            alt={rec.strMeal}
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
          {/* Source */}
          {rec.strSource && (
            <p className="mt-4 text-blue-500">
              <a
                href={rec.strSource}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 px-4 py-2
            inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium outline-none 
            border bg-background shadow-xs border-green-500 text-blue-600 cursor-pointer hover:bg-green-500 hover:text-white"
              >
                View Source
              </a>
            </p>
          )}
        </div>

        {/* Middle Section - Instructions */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">{rec.strMeal}</h1>
          <p className="text-gray-500 text-lg">
            {rec.strCategory} - {rec.strArea}
          </p>

          <h2 className="text-2xl font-semibold mt-4 text-gray-700">
            Instructions
          </h2>
          <p className="text-gray-600 leading-relaxed">{rec.strInstructions}</p>

          {/* YouTube Video */}
          {rec.strYoutube && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-700 pb-6">
                Video Recipe
              </h2>
              <iframe
                title="YouTube Video"
                className="w-full aspect-video rounded-md shadow-md"
                src={rec.strYoutube.replace("watch?v=", "embed/")}
                allowFullScreen
              />
            </div>
          )}
        </div>

        {/* Right Section - Ingredients */}
        <div className="flex-1 bg-gray-50 p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700">Ingredients</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            {ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
