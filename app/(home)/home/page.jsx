import React from 'react'

import Hero from "@/components/ui/user/hero";

export const metadata = {
  title: "Shabsa Ceramics && General Supply Limited - Home",
  description: "Welcome to Shabsa Ceramics && General Supply Limited. Your trusted partner in construction materials and solutions.",
  
  openGraph: {
    title: "Shabsa Ceramics && General Supply Limited - Home",
    description: "Welcome to Shabsa Ceramics && General Supply Limited. Your trusted partner in construction materials and solutions.",
    url: "https://www.shabsa.co.tz",
    images: [{ url: "/logo1.png", width: 1200, height: 630, alt: "Shabsa Company Logo" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shabsa Ceramics && General Supply Limited - Home",
    description: "Explore Shabsa Ceramics && General Supply Limited for premium construction materials and solutions.",
    images: ["/logo1.png"],
  },

  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

function page() {
  return <Hero />
}

export default page