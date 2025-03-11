export function getRecipes() {
	return {
		queryKey: ["recipes"],
		queryFn: () =>
			fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=").then(
				(res) => res.json(),
			),
	};
}
export function getBeef() {
	return {
		queryKey: ["beef"],
		queryFn: () =>
			fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=beef").then(
				(res) => res.json(),
			),
	};
}
export function getBreakfast() {
	return {
		queryKey: ["breakfast"],
		queryFn: () =>
			fetch(
				"https://www.themealdb.com/api/json/v1/1/filter.php?c=breakfast",
			).then((res) => res.json()),
	};
}
export function fetchIngredient(id: string) {
	return {
		queryKey: ["ingredient", id],
		queryFn: () =>
			fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(
				(res) => res.json(),
			),
	};
}
