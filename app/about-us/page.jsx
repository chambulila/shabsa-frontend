import Image from "next/image";

const AboutUs = () => {
    return (
        <section className="relative">
            {/* Yellow bar */}
            <div className="bg-yellow-500 h-16 md:h-24 flex justify-center items-center text-5xl font-extrabold">About Us</div>

            {/* Main content */}
            <div className="relative bg-white">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12 px-6 py-12">
                    {/* Left Image */}
                    <div className="relative flex-shrink-0 w-full md:w-1/2 h-64 md:h-auto">
                        <Image
                            src="/logo.jpeg" // Replace with the actual image path
                            alt="Crane"
                            // layout="fill"
                            width={1000}
                            height={1000}
                            objectFit="cover"
                            className="rounded-lg shadow-md"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col items-start md:w-1/2 text-center md:text-left">
                        <h2 className="text-sm text-yellow-500 font-medium uppercase">
                            Welcome to Shabsa
                        </h2>
                        <h1 className="text-4xl text-start md:text-5xl font-bold mt-2 leading-tight">
                            More Than 10 Years Of Experience
                        </h1>
                        <p className="text-gray-600 mt-4 font-semibold font-sans">
                            We have a liability to improve on how to serve customers in a good and high-quality building material products from different corners of the world to the full satisfaction, confident, and compatibility of our customers.
                        <br /> <br />
                            The company products range covers tiles of both designs, ceramics, and marbles with the different sizes.

                            Something more to protect our clients' interests, we have staff and good team of experts and highly trained specialists like elevators and hardware products with experience in and outside the country to accomplish the targets and to acquire customers' satisfaction at an economical price.

                            For the sake of building materials with high-end quality at economical price, <b>Shabsa Ceramics & General Supply Limited</b> is the place to check with.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
