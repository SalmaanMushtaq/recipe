import {
  createRootRouteWithContext,
  createRoute,
} from "@tanstack/react-router";
import Ingredient from "./components/ingredient";
import MainLayout from "./layouts/main-layout";
import {
  fetchIngredient,
  getBeef,
  getBreakfast,
  getRecipes,
} from "./lib/query-options";
import About from "./pages/about";
import Area from "./pages/area";
import Beef from "./pages/beef";
import Breakfast from "./pages/breakfast";
import Chicken from "./pages/chicken";
import Contact from "./pages/contact";
import Goat from "./pages/goat";
import Home from "./pages/home";
import Lamb from "./pages/lamb";
import type { RootRouteContext } from "./types";

const rootRoute = createRootRouteWithContext<RootRouteContext>()({
  component: MainLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
  loader: ({ context }) => context.queryClient.ensureQueryData(getRecipes()),
});

const beef = createRoute({
  path: "/beef",
  component: Beef,
  getParentRoute: () => rootRoute,
  loader: ({ context }) => context.queryClient.ensureQueryData(getBeef()),
});

const breakfast = createRoute({
  path: "/breakfast",
  component: Breakfast,
  getParentRoute: () => rootRoute,
  loader: ({ context }) => context.queryClient.ensureQueryData(getBreakfast()),
});

const chicken = createRoute({
  path: "/chicken",
  component: Chicken,
  getParentRoute: () => rootRoute,
});

const goat = createRoute({
  path: "/goat",
  component: Goat,
  getParentRoute: () => rootRoute,
});

const lamb = createRoute({
  path: "/lamb",
  component: Lamb,
  getParentRoute: () => rootRoute,
});

const area = createRoute({
  path: "/areas",
  component: Area,
  getParentRoute: () => rootRoute,
});

const about = createRoute({
  path: "/about",
  component: About,
  getParentRoute: () => rootRoute,
});

const contact = createRoute({
  path: "/contact",
  component: Contact,
  getParentRoute: () => rootRoute,
});
export const ingredient = createRoute({
  path: "$id",
  getParentRoute: () => rootRoute,
  component: Ingredient,
  loader: ({ context, params }) =>
    context.queryClient.ensureQueryData(fetchIngredient(params.id)),
});
export const routeTree = rootRoute.addChildren([
  indexRoute,
  beef,
  breakfast,
  chicken,
  goat,
  lamb,
  area,
  about,
  contact,
  ingredient,
]);
