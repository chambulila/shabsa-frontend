import ProductsSection from "@/components/products/ProductsSection"

export const metadata = {
    title: "Our Products - Shabsa Ceramics && General Supply Limited",
    description: "Explore our wide range of construction materials and solutions at Shabsa Ceramics && General Supply Limited.",

    openGraph: {
        title: "Our Products - Shabsa Ceramics && General Supply Limited",
        description: "Explore our wide range of construction materials and solutions at Shabsa Ceramics && General Supply Limited.",
        url: "https://www.shabsa.co.tz/products",
        images: [{ url: "/logo1.png", width: 1200, height: 630, alt: "Shabsa Company Logo" }],
    },

    twitter: {
        card: "summary_large_image",
        title: "Our Products - Shabsa Ceramics && General Supply Limited",
        description: "Discover premium construction materials at Shabsa Ceramics && General Supply Limited.",
        images: ["/logo1.png"],
    },

    icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
}

export default function page(){
    return <ProductsSection />
}