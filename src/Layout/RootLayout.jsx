import { AppSidebar } from "@/components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex w-full">
        <div className="bg-black h-screen m-0 text-white px-2">
          <SidebarTrigger />
        </div>
        <div className="w-full p-5">
        <Outlet/>
        </div>
      </main>
    </SidebarProvider>
  );
}
