import {
    Layout,
    Droplets,
    SlidersHorizontal,
    Building2,
} from "lucide-react";

export const services = [
    {
        title: "Tiles",
        description: "We offer a wide selection of tiles to suit any project, from residential to commercial. Our range includes durable fully body tiles of all sizes, elegant porcelain tiles known for their strength and water resistance, classic ceramic tiles offering a balance of affordability and style, and luxurious marble tiles that add a touch of sophistication. We provide tiles suitable for various applications, including interior and exterior floors, wall coverings, and high-traffic parking areas. Our expert team can assist you in selecting the perfect tiles to meet your specific needs and aesthetic preferences.", 
        icon: Layout,
        subServices: [
            { name: "Fully Body Tiles", description: "Durable and suitable for high-traffic areas." },
            { name: "Porcelain Tiles", description: "Strong, water-resistant, and aesthetically pleasing." },
            { name: "Ceramic Tiles", description: "Affordable and versatile for various applications." },
            { name: "Marble Tiles", description: "Luxurious natural stone for a sophisticated look." },
            { name: "Floor and Wall Tiles", description: "Tiles for all interior and exterior surfaces." },
            { name: "Parking Tiles", description: "Durable tiles designed for outdoor parking areas." },
        ],
    },
    {
        title: "Sanitary Ware",
        description: "We provide high-quality sanitary ware for creating modern and functional bathrooms and restrooms. Our product range includes traditional squatting pans, comfortable and contemporary sitting/European toilets with various flushing mechanisms, efficient and hygienic urinals for commercial and residential spaces, a variety of stylish washing basins to complement any bathroom design, and practical bathroom cabinets for storage and organization. We focus on providing durable, water-efficient, and aesthetically pleasing sanitary ware solutions.",
        icon: Droplets,
        subServices: [
            { name: "Squatting Pan", description: "Traditional and practical sanitary solution." },
            { name: "Sitting/European Toilet", description: "Modern and comfortable toilet designs." },
            { name: "Urinary", description: "Hygienic and efficient urinals for commercial use." },
            { name: "Washing Basin", description: "Variety of basins to suit any bathroom style." },
            { name: "Cabinets", description: "Storage solutions for organized bathrooms." },
        ],
    },
    {
        title: "Chrome Plated Fittings",
        description: "Enhance your bathroom and kitchen with our range of durable and stylish chrome-plated fittings. Our selection includes hygienic and convenient shattafs (hand showers) for personal hygiene, a variety of showerheads and shower systems for a refreshing shower experience, high-quality mixers for precise control of water flow and temperature in both kitchens and basins, and practical and aesthetically pleasing holders for bathroom accessories such as towel rails, soap dishes, and toilet paper holders. We prioritize quality and durability in our fittings to ensure long-lasting performance and a polished look.",
        icon: SlidersHorizontal,
        subServices: [
            { name: "Shattaf", description: "Convenient hand showers for personal hygiene." },
            { name: "Shower", description: "Range of showerheads and systems for a refreshing experience." },
            { name: "Mixers", description: "Precise control of water flow and temperature." },
            { name: "Holders", description: "Practical accessories for bathroom organization." },
        ],
    },
    {
        title: "Elevators",
        description: "We supply and install reliable Jadec elevators for a variety of applications, ensuring smooth, safe, and efficient vertical transportation. Our services cater to diverse needs, including hospitals requiring efficient patient transport, multi-story homes seeking added convenience and accessibility, hotels aiming to provide comfortable and stylish vertical transportation for their guests, and car parking facilities needing specialized car elevators for efficient parking solutions. We offer a comprehensive range of elevator services, including installation, maintenance, and modernization, and we can also provide custom elevator solutions to meet specific project requirements.",
        icon: Building2,
        subServices: [
            { name: "Hospitals", description: "Elevators designed for safe and efficient patient transport." },
            { name: "Homes", description: "Enhance accessibility and convenience in residential buildings." },
            { name: "Hotels", description: "Stylish and comfortable elevators for guest transportation." },
            { name: "Cars", description: "Specialized car elevators for parking solutions." },
        ],
    },
];
