"use client"
import Services from "@/components/ui/user/Services";
// components/ServicesSection.jsx

import { useRouter } from "next/navigation";

const ServicesSection = () => {
  const router = useRouter();
    return (
      <div className="container-fluid  pb-0 flex flex-col items-center">
        {/* Section Title */}
        <Services />
      </div>
    );
  };
  

export default ServicesSection;