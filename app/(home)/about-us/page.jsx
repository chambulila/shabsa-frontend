import About from "@/components/ui/user/About";

export const metadata = {
    title: "About Us - Shabsa Ceramics && General Supply Limited",
    description: "Learn about Shabsa Ceramics && General Supply Limited, your trusted supplier of construction materials.",
  
    openGraph: {
      title: "About Us - Shabsa Ceramics && General Supply Limited",
      description: "Learn about Shabsa Ceramics && General Supply Limited, your trusted supplier of construction materials.",
      url: "https://www.shabsa.co.tz/about-us",
      images: [{ url: "/logo1.png", width: 1200, height: 630, alt: "Shabsa Company Logo" }],
    },
  
    twitter: {
      card: "summary_large_image",
      title: "About Us - Shabsa Ceramics && General Supply Limited",
      description: "Discover our story and commitment to providing premium building materials in Tanzania.",
      images: ["/logo1.png"],
    },
  
    icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  };
  
const AboutUs = () => {
    return (
        <section className="relative ">
            <About />
        </section>
    );
};

export default AboutUs;
