import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LightbulbIcon, RocketIcon } from "lucide-react";
import Image from "next/image";

const AboutUs = () => {
    return (
        <section className="relative ">
            {/* Yellow bar */}
            <div className="  flex justify-center items-center my-4 text-gray-700 text-5xl font-extrabold">About Us</div>

            {/* Main content */}
            <div className="relative ">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12 px-6">
                    {/* Left Image */}
                    <div className="relative flex-shrink-0 w-full md:w-1/2 h-64 md:h-auto">
                        <Image
                            src="/logo.jpeg" // Replace with the actual image path
                            alt="Crane"
                            // layout="fill"yellow-500
                            width={1000}
                            height={1000}
                            objectFit="cover"
                            className="rounded-lg shadow-md"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col items-start md:w-1/2 text-center md:text-left">
                        <h2 className="text-sm text-yellow-800 font-medium uppercase">
                            Welcome to Shabsa
                        </h2>
                        <h1 className="text-4xl text-gray-600 text-start md:text-5xl font-bold mt-2 leading-tight">
                            More Than 10 Years Of Experience
                        </h1>
                        <p className="text-gray-500 mt-4 font-semibold ">
                            We have a liability to improve on how to serve customers in a good and high-quality building material products from different corners of the world to the full satisfaction, confident, and compatibility of our customers.
                            <br /> <br />
                            The company products range covers tiles of both designs, ceramics, and marbles with the different sizes.

                            Something more to protect our clients' interests, we have staff and good team of experts and highly trained specialists like elevators and hardware products with experience in and outside the country to accomplish the targets and to acquire customers' satisfaction at an economical price.

                            For the sake of building materials with high-end quality at economical price, <b>Shabsa Ceramics & General Supply Limited</b> is the place to check with.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-center shadow-none">
                {/* Header */}
                <div className="h-16 md:h-24 text-gray-600 flex justify-center items-center text-3xl md:text-5xl font-extrabold">
                    MISSION & VISION
                </div>

                {/* Cards Container */}
                <div className="flex flex-col md:flex-row gap-5 md:gap-8 my-5 px-4 md:px-16 text-gray-500">
                    {/* Mission Card */}
                    <Card className="w-full hover:scale-105 transition duration-500 hover:shadow-md md:w-1/2">
                        <CardHeader>
                            <div className="flex flex-col items-center text-gray-500">
                                <RocketIcon className="text-yellow-500" size={90} />
                                <CardTitle className="text-xl md:text-3xl uppercase">Mission</CardTitle>
                                <div className="w-[80%] border-t border-gray-500 mt-2"></div>
                            </div>
                        </CardHeader>
                        <CardContent className="flex text-center">
                            <CardDescription className="font-bold text-sm md:text-base">
                                To bring satisfaction, confidence, and comfort to everyone by ensuring value for the expenditures made on our products.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    {/* Vision Card */}
                    <Card className="w-full hover:scale-105 transition duration-500 hover:shadow-md md:w-1/2">
                        <CardHeader>
                            <div className="flex flex-col items-center text-gray-500">
                                <LightbulbIcon className="text-yellow-500" size={90} />
                                <CardTitle className="text-xl md:text-3xl uppercase">Vision</CardTitle>
                                <div className="w-[80%] border-t border-gray-500 mt-2"></div>
                            </div>
                        </CardHeader>
                        <CardContent className="flex text-center">
                            <CardDescription className="font-bold text-sm md:text-base">
                                To become a center of excellence in providing products and services of the highest quality and value to our customers.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>

        </section>
    );
};

export default AboutUs;
