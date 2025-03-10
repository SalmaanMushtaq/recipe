import RecipeList from "@/components/recipe-list";
import { getBreakfast } from "@/lib/query-options";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function Breakfast() {
  const { data, isLoading } = useSuspenseQuery(getBreakfast());
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
        </div>
      ) : (
        <RecipeList meals={data.meals} />
      )}
    </>
  );
}
