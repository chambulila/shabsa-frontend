import { Skeleton } from "@/components/ui/skeleton"; // Assuming you have a Skeleton component in your ui folder
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { RocketIcon, LightbulbIcon } from "lucide-react";
import Image from "next/image";

export default function AboutLoading() {
    return (
        <div>
            <div className="flex justify-center items-center my-5 text-yellow-500 bg-gray-900 py-6 text-5xl font-extrabold">
                <Skeleton className="h-10 w-40" />
            </div>

            <div className="relative">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12 px-6">
                    {/* Left Image */}
                    <div className="relative flex-shrink-0 w-full md:w-1/2 h-64 md:h-auto">
                        <Skeleton className="rounded-lg w-full h-full" />
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col items-start md:w-1/2 text-center md:text-left">
                        <Skeleton className="h-6 w-48 mb-2" />
                        <Skeleton className="h-10 w-72 mb-4" />
                        <Skeleton className="h-8 w-full mb-4" />
                        <Skeleton className="h-8 w-64" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-center shadow-none">
                {/* Header */}
                <div className="h-16 md:h-24 text-gray-600 flex justify-center items-center text-3xl md:text-5xl font-extrabold">
                    <Skeleton className="h-8 w-48" />
                </div>

                {/* Cards Container */}
                <div className="flex flex-col md:flex-row gap-5 md:gap-8 my-5 px-4 md:px-16 text-gray-500">
                    {/* Mission Card */}
                    <Card className="w-full hover:scale-105 transition duration-500 hover:shadow-md md:w-1/2">
                        <CardHeader>
                            <div className="flex flex-col items-center text-gray-500">
                                <Skeleton className="h-24 w-24 rounded-full mb-4" />
                                <Skeleton className="h-6 w-20 mb-2" />
                                <div className="w-[80%] border-t border-gray-500 mt-2"></div>
                            </div>
                        </CardHeader>
                        <CardContent className="flex text-center">
                            <Skeleton className="h-6 w-72" />
                        </CardContent>
                    </Card>

                    {/* Vision Card */}
                    <Card className="w-full hover:scale-105 transition duration-500 hover:shadow-md md:w-1/2">
                        <CardHeader>
                            <div className="flex flex-col items-center text-gray-500">
                                <Skeleton className="h-24 w-24 rounded-full mb-4" />
                                <Skeleton className="h-6 w-20 mb-2" />
                                <div className="w-[80%] border-t border-gray-500 mt-2"></div>
                            </div>
                        </CardHeader>
                        <CardContent className="flex text-center">
                            <Skeleton className="h-6 w-72" />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
