"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  BrainCog,
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
      title: "Orders",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Products",
      url: "#",
      icon: Bot,
    },
    {
      title: "Categories",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Brands",
      url: "#",
      icon: Settings2,
    },
    ,
    {
      title: "Settings",
      url: "#",
      icon: BrainCog,
    },
  ],
}

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
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
