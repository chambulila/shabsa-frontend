import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '../button'
import { Input } from '../input'

export default function Footer() {
  return (
    <footer className="bg-[#030f27] text-white pt-16 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="">
                  <MapPin className="h-5 w-5 mt-1 text-[#FDB813]" />
                </div>
                <div>
                  <p>Dar es salaam, Tanzania </p>
                  <p>(Ungindoni, Kigamboni)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <Phone className="h-5 w-5 mt-1 text-[#FDB813]" />
                </div>
                <div>
                  <p>+255 753 160 229</p>
                  <p>+255 714 119 105</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 text-[#FDB813]" />
                <p>info@shabsa.co.tz</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button size="icon" variant="ghost" className="hover:text-[#FDB813]">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-[#FDB813]">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-[#FDB813]">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-[#FDB813]">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#FDB813]">Home</Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-[#FDB813]">About Us</Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-[#FDB813]">Our Services</Link>
              </li>
              <li>
                <Link href="/project" className="hover:text-[#FDB813]">Our Projects</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FDB813]">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and announcements.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-[#FDB813] text-[#030f27] hover:bg-[#FDB813]/90">
                Submit
              </Button>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <p>Monday - Friday:</p>
              <p className="text-[#FDB813]">09:00 AM - 05:00 PM</p>
              <p>Saturday:</p>
              <p className="text-[#FDB813]">09:00 AM - 12:00 PM</p>
              <p>Sunday:</p>
              <p className="text-[#FDB813]">Closed</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Shabsa. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

