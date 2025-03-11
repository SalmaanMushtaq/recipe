import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
export default function MainLayout() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="border-b flex h-16 shrink-0 items-center gap-2 pe-8 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 ">
            <div className="flex items-center gap-2 px-4 w-full">
              <SidebarTrigger />
              <h1 className="text-2xl">Salmaan Mushtaq</h1>
            </div>
          </header>
          <main className="h-100vh p-8 md-p-16">
            <Outlet />
          </main>
        </SidebarInset>
      </SidebarProvider>
      <TanStackRouterDevtools />
    </>
  );
}
