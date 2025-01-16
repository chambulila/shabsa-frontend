'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '../button2'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../dropdown-menu'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const navigation = [
    { name: 'HOME', href: '/', isActive: pathname === '/home' },
    { name: 'ABOUT', href: '/about-us', isActive: pathname === '/about-us' },
    { name: 'SERVICE', href: '/services', isActive: pathname.startsWith('/services') },
    { name: 'TEAM', href: '/team', isActive: pathname === '/team' },
    { name: 'PROJECTS', href: '/projects', isActive: pathname === '/projects' },
    { name: 'PAGES', href: '/pages', isActive: pathname === '/pages' },
    { name: 'CONTACT', href: '/contact', isActive: pathname === '/contact' },
  ]
  return (
    <header className="bg-[#030f27] text-white sticky top-0 z-50">
      <nav className="container mx-auto px-4" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:flex gap-8">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                    link.isActive ? "text-[#FDB813]" : "hover:text-[#FDB813]"
                  }`}              >
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
          {pathname !== '/login' && <Button className="bg-[#FDB813] text-[#030f27] hover:bg-[#FDB813]/90">
            <Link href={'/login'}>Login</Link>
          </Button>}
        </div>
      </nav>
    </header>
  )
}

