import Services from "@/components/ui/user/Services";
// components/ServicesSection.jsx

export const metadata = {
  title: "Our Services - Shabsa Ceramics && General Supply Limited",
  description: "Learn more about the premium construction services we offer at Shabsa Ceramics && General Supply Limited.",

  openGraph: {
    title: "Our Services - Shabsa Ceramics && General Supply Limited",
    description: "Learn more about the premium construction services we offer at Shabsa Ceramics && General Supply Limited.",
    url: "https://www.shabsa.co.tz/services",
    images: [{ url: "/logo1.png", width: 1200, height: 630, alt: "Shabsa Company Logo" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Services - Shabsa Ceramics && General Supply Limited",
    description: "Explore the range of construction services we provide at Shabsa Ceramics && General Supply Limited.",
    images: ["/logo1.png"],
  },

  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

const ServicesSection = () => {
    return (
      <div className="container-fluid  pb-0 flex flex-col items-center">
        {/* Section Title */}
        <Services />
      </div>
    );
  };
  

export default ServicesSection;