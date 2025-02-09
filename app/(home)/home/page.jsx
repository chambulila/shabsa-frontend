import React from 'react'

import Hero from "@/components/ui/user/hero";
import Head from 'next/head';

function page() {
  return (
    <div>
      <Head>
        <title>About Us - Shabsa Ceramics</title>
        <meta name="description" content="Learn about Shabsa Ceramics & General Supply Ltd, your trusted source for building materials." />
        <meta name="keywords" content="ceramics, building materials, tiles, marbles, Shabsa Ceramics" />
        <meta name="author" content="Shabsa Ceramics" />
        <meta property="og:title" content="About Us - Shabsa Ceramics" />
        <meta property="og:description" content="Learn about Shabsa Ceramics & General Supply Ltd, your trusted source for building materials." />
        <meta property="og:image" content="/logo1.png" />
        <meta property="og:url" content="https://www.shabsa.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Shabsa Ceramics" />
        <meta name="twitter:description" content="Learn about Shabsa Ceramics & General Supply Ltd, your trusted source for building materials." />
        {/* <meta name="twitter:image" content="/path/to/your/image.jpg" /> */}
      </Head>
      <Hero />
    </div>


  )
}

export default page