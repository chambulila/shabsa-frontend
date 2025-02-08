'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, ShoppingCart } from 'lucide-react'
import { Button } from '../button2'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../dropdown-menu'
import { usePathname } from 'next/navigation'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../dialog'
import Cart from '@/components/cart/Cart'
import Cookies from 'js-cookie'
import { useCart } from '@/contexts/cartContext'

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [productCart, setProductCart] = useState([]);
  const [token, setToken] = useState(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { cartItems } = useCart();

  const navigation = [
    { name: 'HOME', href: '/home', isActive: pathname === '/home' },
    { name: 'ABOUT', href: '/about-us', isActive: pathname === '/about-us' },
    { name: 'SERVICE', href: '/services', isActive: pathname.startsWith('/services') },
    { name: 'PRODUCTS', href: '/products', isActive: pathname === '/products' },
    { name: 'CONTACT US', href: '/contact-us', isActive: pathname === '/contact-us' },
  ];

  return (
    <header className=" bg-[#daa917] text-black sticky top-0 z-50">
      {/* bg-[#030f27] */}
      <nav className="container mx-auto px-4" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:flex gap-8">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold text-black transition-colors p-4 ${link.isActive ? "bg-[#030f27] text-white" : "hover:bg-[#030f27] hover:text-white"
                  }`} >
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

          {/* Cart Icon and Login Button */}
          <div className="flex items-center gap-4">
            {/* Shopping Cart with Notification Badge */}
            <div className="relative cursor-pointer" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                {cartItems?.length || 0}
              </span>
            </div>

            {/* Login Button */}
            {pathname !== '/login' && (
              <Link href={'/login'}>
                <button className="bg-[#FDB813] text-[#030f27] font-bold hover:bg-[#EAA30B] rounded-lg px-4 py-2 transition-all">
                  {token ? 'Dashboard' : 'Login'}
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* OPEN CART MODAL */}
      <Dialog open={isCartOpen}  >
        <DialogContent className="max-w-3xl p-6">
          <DialogHeader>
            <DialogTitle>Shopping Bag</DialogTitle>
          </DialogHeader>
          <Cart closeCartModal={() => setIsCartOpen(false)} />
        </DialogContent>
      </Dialog>
    </header>
  );
}
