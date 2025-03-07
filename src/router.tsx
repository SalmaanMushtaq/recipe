import {
	Outlet,
	createRootRouteWithContext,
	createRoute,
} from "@tanstack/react-router";
import MainLayout from "./layouts/main-layout";
import TanStackQueryDemo from "./routes/demo.tanstack-query";
import type { RootRouteContext } from "./types";

const rootRoute = createRootRouteWithContext<RootRouteContext>()({
	component: Outlet,
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: MainLayout,
});

const demoRoute = createRoute({
	path: "/demo/tanstack-query",
	component: TanStackQueryDemo,
	getParentRoute: () => indexRoute,
});
export const routeTree = rootRoute.addChildren([indexRoute, demoRoute]);
