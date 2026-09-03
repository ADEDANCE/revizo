import { SidebarComponent } from "@/components/SidebarComponent";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
const DashboardLayout = () => {
  return (
    <SidebarProvider>
      {" "}
      <SidebarComponent />
      <main className="min-h-screen flex-1 bg-deep-navy text-off-white">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
