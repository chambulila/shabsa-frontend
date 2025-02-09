"use client"
import LandingPageComponent from '@/components/landing-page/LandingPageComponent'
import React, { useEffect, useState } from 'react'

export default function page() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    return null;
  }
  
  return (
    <div>
        <LandingPageComponent />
    </div>
  )
}
