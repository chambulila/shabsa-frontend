import React from 'react'
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { services } from "@/utils/localDb";
import Link from "next/link";
import { truncateText } from "@/utils/constantsAndFuntions";
export default function Services() {
  return (
    <div>
        <h2 className="text-3xl md:text-4xl font-bold my-5 text-yellow-500 bg-gray-900 py-6 text-center">Our Services</h2>
        
        {/* Cards Container */}
        <div className="w-full flex flex-wrap justify-center mb-8 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="hover:scale-105 w-full sm:w-[90%] md:w-[45%] lg:w-[45%] gap-5 transition-transform mx-auto"
            >
              {/* Card Header */}
              <CardHeader className="flex flex-col items-center text-center">
              <service.icon className="h-10 w-10 mb-2 text-muted-foreground" />
                <h3 className="text-lg md:text-xl font-semibold">{service.title}</h3>
              </CardHeader>
              
              {/* Card Content */}
              <CardContent className="text-sm text-muted-foreground text-center">
                {truncateText(service.description, 250)}
              </CardContent>
              
              {/* Card Footer */}
              <CardFooter className="justify-center">
            <Link href={`/services/${encodeURIComponent(service.title)}`} legacyBehavior passHref>
                <Button asChild>
                    <a className="flex items-center"> {/* Use a simple <a> tag */}
                        <service.icon className="h-4 w-4 mr-2" /> {/* Icon */}
                        <span>More</span> {/* Text wrapped in a <span> */}
                         {/*<ArrowRight className="ml-2 h-4 w-4" /> */}
                    </a>
                </Button>
            </Link>
        </CardFooter>
            </Card>
          ))}
        </div>
    </div>
  )
}
