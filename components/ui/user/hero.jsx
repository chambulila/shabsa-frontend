"use client"
import { Button } from '@/components/ui/button'
import { Carousel } from '@/components/ui/corousel'
import { useRouter } from 'next/navigation'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import LandingPageComponent from '@/components/landing-page/LandingPageComponent'

export default function Hero() {
  const router = useRouter();
  
  return (
    <div className="h-full">
      <LandingPageComponent />

      <About />
      <Services />
      <Contact />
    </div>
  )
}