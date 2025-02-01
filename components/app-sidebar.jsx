"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  BrainCog,
  Home,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Shabsa",
    email: "info@shabsa.co.tz",
    avatar: "/logo.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/dashboard",
      icon: Home,
      isActive: true,
    },
    {
      title: "Orders",
      url: "/dashboard/orders",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Products",
      url: "/dashboard/products",
      icon: Bot,
    },
    {
      title: "Categories",
      url: "/dashboard/categories",
      icon: BookOpen,
    },
    {
      title: "Brands",
      url: "/dashboard/brands",
      icon: Settings2,
    },
    ,
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: BrainCog,
    // },
  ],
}

export function AppSidebar({ ...props }) {
  return (
    <Sidebar  collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
