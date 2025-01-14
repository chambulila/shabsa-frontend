'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '../button2'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../dropdown-menu'

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'SERVICE', href: '/service' },
  { name: 'TEAM', href: '/team' },
  { name: 'PROJECTS', href: '/project' },
  { name: 'PAGES', href: '/pages' },
  { name: 'CONTACT', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="bg-[#030f27] text-white sticky top-0 z-50">
      <nav className="container mx-auto px-4" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:flex gap-8">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-[#FDB813] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {navigation.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link href={link.href}>{link.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Button className="bg-[#FDB813] text-[#030f27] hover:bg-[#FDB813]/90">
            Get A Quote
          </Button>
        </div>
      </nav>
    </header>
  )
}

