"use client"

import {
    Collapsible,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { Avatar } from "./ui/avatar"
import { redirect } from "next/navigation"
import Link from "next/link"

export function NavMain({ items }) {
    return (
        <SidebarGroup >
            <div onClick={() => redirect('/home')} className="flex items-center gap-3 cursor-pointer hover:bg-gray-200">
                <Avatar>
                    <Image width={50} height={50} src={'/logo.jpeg'} alt="" />
                </Avatar>
                <p className="font-bold">Shabsa</p>
            </div>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item, index) => (
                        <SidebarMenuItem key={index}>
                            <Link href={item.url}>
                                <SidebarMenuButton tooltip={item.title}>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                    {/* <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" /> */}
                                </SidebarMenuButton>
                                </Link>
                        </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}
