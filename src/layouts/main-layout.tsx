import Header from "@/components/Header";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
export default function MainLayout() {
	return (
		<>
			<Header />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	);
}
