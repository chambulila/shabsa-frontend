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
import { BrainCog, HomeIcon, PhoneCall } from "lucide-react"

export function NavMain({ items }) {
    const pathname = usePathname();

    return (
        <SidebarGroup>
            <div
                onClick={() => redirect('/home')}
                className="flex items-center gap-3 cursor-pointer "
            >
                <Avatar>
                    <Image width={50} height={50} src={'/logo1.png'} alt="" />
                </Avatar>
                <p className="font-bold ">Shabsa</p>
            </div>
            <hr className="my-3" />
            {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
            <SidebarMenu>
                {items.map((item, index) => {
                    const isActive = pathname?.startsWith(item?.url);
                    return (
                        <SidebarMenuItem key={index} className={isActive ? "bg-white text-black rounded-lg" : ""}>
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
                                        <HomeIcon />
                                        <span>About Us</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <Link href="/dashboard/settings/address">
                                    <SidebarMenuButton tooltip="Mission">
                                        <PhoneCall />
                                        <span>Our Address</span>
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
