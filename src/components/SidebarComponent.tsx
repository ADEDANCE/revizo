import { NavLink, useLocation } from "react-router";
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

import { LayoutDashboard, History, Settings } from "lucide-react";

export const SidebarComponent = () => {
  const navigation = [
    {
      title: "New Chat",
      url: "/dashboard",
      icon: LayoutDashboard,
    },

    {
      title: "History",
      url: "/history",
      icon: History,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
  ];

  const location = useLocation();

  return (
    <Sidebar className=" bg-slate text-off-white">
      {" "}
      <SidebarContent className=" bg-slate text-off-white">
        {" "}
        <SidebarGroup>
          {" "}
          <SidebarGroupLabel>Revizo</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => {
                const isActive = location.pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={isActive}
                      className={
                        isActive
                          ? "bg-indigo text-off-white hover:bg-indigo"
                          : "text-slate-400 hover:bg-slate-800 hover:text-off-white"
                      }
                      render={<NavLink to={item.url} />}
                    >
                      <item.icon /> <span>{item.title}</span>{" "}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
