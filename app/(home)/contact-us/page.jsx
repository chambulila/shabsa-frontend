import Contact from "@/components/ui/user/Contact";

export const metadata = {
    title: "Contact Us - Shabsa Company Limited",
    description: "Get in touch with Shabsa Ceramics Company Limited for all your construction materials needs.",
  
    openGraph: {
      title: "Contact Us - Shabsa Company Limited",
      description: "Get in touch with Shabsa Ceramics && General Supply Limited for all your construction materials needs.",
      url: "https://www.shabsa.co.tz/contact-us",
      images: [{ url: "/logo1.png", width: 1200, height: 630, alt: "Shabsa Company Logo" }],
    },
  
    twitter: {
      card: "summary_large_image",
      title: "Contact Us - Shabsa Company Limited",
      description: "Reach out to Shabsa Company Limited for premium construction solutions.",
      images: ["/logo1.png"],
    },
  
    icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  };
  
const ContactUs = () => {
    return (
        <div className=" min-h-screen ">
            <Contact />
        </div>
    );
};

export default ContactUs;