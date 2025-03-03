import {
  createRootRouteWithContext,
  createRoute,
  Outlet,
} from "@tanstack/react-router";
import { RootRouteContext } from "./types";
import MainLayout from "./layouts/main-layout";
import NotFound from "./components/not-found";

const rootRoute = createRootRouteWithContext<RootRouteContext>()({
  component: Outlet,
  notFoundComponent: NotFound,
});
const index = createRoute({
  path: "/",
  component: MainLayout,
  getParentRoute: () => rootRoute,
});
export const routeTree = rootRoute.addChildren([index]);
