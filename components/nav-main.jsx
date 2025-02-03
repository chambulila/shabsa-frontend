"use client"

import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
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
import { redirect, usePathname } from "next/navigation"
import Link from "next/link"
import { BrainCog } from "lucide-react"

export function NavMain({ items }) {
    const pathname = usePathname();

    return (
        <SidebarGroup>
            <div
                onClick={() => redirect('/home')}
                className="flex items-center gap-3 cursor-pointer hover:bg-gray-200"
            >
                <Avatar>
                    <Image width={50} height={50} src={'/logo.jpeg'} alt="" />
                </Avatar>
                <p className="font-bold">Shabsa</p>
            </div>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item, index) => {
                    const isActive = pathname?.startsWith(item?.url);
                    return (
                        <SidebarMenuItem key={index} className={isActive ? "bg-gray-400 rounded-lg" : ""}>
                        <Link href={item.url}>
                            <SidebarMenuButton tooltip={item.title}>
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                            </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                    )
                })}

                {/* Fixing the nested <button> issue */}
                <Collapsible>
                    <CollapsibleTrigger asChild>
                        <div className="w-full">
                            <SidebarMenuButton tooltip={'Company Settings'}>
                                <BrainCog />
                                <span>{"Settings 2"}</span>
                            </SidebarMenuButton>
                        </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <Link href="/dashboard/settings/about-us">
                                    <SidebarMenuButton tooltip="About Us">
                                        <span>About Us</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <Link href="/dashboard/settings/mission">
                                    <SidebarMenuButton tooltip="Mission">
                                        <span>Mission</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <Link href="/dashboard/settings/vision">
                                    <SidebarMenuButton tooltip="Vision">
                                        <span>Vision</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </CollapsibleContent>
                </Collapsible>
            </SidebarMenu>
        </SidebarGroup>
    )
}
