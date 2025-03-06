import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"; // Correct import for Collapsible components

import {
  Calendar,
  ChevronDown,
  Inbox,
  LayoutDashboard,
  Search,
  Settings,
  ShoppingBasket
} from "lucide-react";
import { Link } from "react-router-dom";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: '/',
    icon: LayoutDashboard,
    
  },
  {
    title: "Management",
    icon: Inbox,
    subItem: [
        {
          title: "Product",
          url: "/product",
          icon: ShoppingBasket
        },
        {
          title: "Category",
          url: "/category",
          icon: ShoppingBasket
        },
        {
          title: "Sub-Category",
          url: "/subcategory",
          icon: ShoppingBasket
        },
        {
          title: "Banner",
          url: "/Banner",
          icon: ShoppingBasket
        },
        {
          title: "Flash Sale",
          url: "/flashsale",
          icon: ShoppingBasket
        },
        {
          title: "Best Selling",
          url: "/bestselling",
          icon: ShoppingBasket
        },
      ],
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="w-64 h-screen bg-black text-white">
      <SidebarContent className='bg-black'>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 py-2 text-gray-400">
            EXCLUSIVE
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) =>
                item.subItem ? (
                  <Collapsible key={item.title} className="group/collapsible">
                    <SidebarGroup className='px-2 py-0'>
                      <SidebarGroupLabel asChild>
                        <CollapsibleTrigger className="flex items-center rounded-md gap-x-2">
                          <item.icon className="mr-3 w-5 text-white" />
                          <span className="text-gray-400 font-popins text-[14px]">{item.title}</span>
                          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180 text-white" />
                        </CollapsibleTrigger>
                      </SidebarGroupLabel>
                      <CollapsibleContent>
                        {item.subItem.map((sub) => (
                          <Link
                          to={sub.url}
                          className="flex items-center text-gray-300 px-4 rounded-md font-popins"
                        >
                          <sub.icon className="mr-3 w-5 text-gray-400" />
                          <span>{sub.title}</span>
                        </Link>
                        ))}
                      </CollapsibleContent>
                    </SidebarGroup>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.url}
                        className="flex items-center text-gray-300 px-4 py-2 rounded-md font-popins"
                      >
                        <item.icon className="mr-3 h-5 w-5 text-gray-400" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
