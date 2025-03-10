import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  BookOpenText,
  MapPinned,
  StickyNote,
  User,
  Utensils,
  X,
} from "lucide-react";
import { SideBar } from "./sidebar";

const data = {
  navMain: [
    {
      title: "Meals",
      url: "/",
      icon: Utensils,
      isActive: true,
    },
    {
      title: "Categories",
      url: "#",
      icon: BookOpenText,
      items: [
        {
          title: "Beef",
          url: "/beef",
        },
        {
          title: "BreakFast",
          url: "/breakfast",
        },
        {
          title: "Chicken",
          url: "/chicken",
        },
        {
          title: "Goat",
          url: "/goat",
        },
        {
          title: "Lamb",
          url: "/lamb",
        },
      ],
    },
    {
      title: "Areas",
      url: "/areas",
      icon: MapPinned,
    },
    {
      title: "About",
      url: "/about",
      icon: StickyNote,
    },
    {
      title: "Contact",
      url: "/contact",
      icon: User,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { toggleSidebar } = useSidebar();
  const isMobile = useIsMobile();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="ms-auto">
        {isMobile && (
          <X
            onClick={toggleSidebar}
            className="cursor-pointer text-red-600 hover:text-red-500"
          />
        )}
      </SidebarHeader>
      <SidebarContent>
        <SideBar items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
