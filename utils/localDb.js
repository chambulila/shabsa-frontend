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

export const products = [
    {
      name: "Ella - Multipurpose Shopify Theme OS 2.0",
      author: "halothemes",
      category: "Fashion",
      price: "90, 000",
      image: "/products/white1.png", // Replace with your image paths
      bestSeller: true,
    },
    {
      name: "Kalles - Clean, Versatile, Responsive Shop...",
      author: "The4",
      category: "Fashion",
      price: "34, 000",
      image: "/products/white3.png",
      bestSeller: false,
    },
    {
      name: "Glozin - Multipurpose Shopify Theme OS 2.0",
      author: "Next Sky",
      category: "Fashion",
      price: "45, 000",
      image: "/products/white4.png",
      bestSeller: false,
    },
    {
      name: "Fastor - Multipurpose Shopify Theme",
      author: "roartheme",
      category: "Electronics",
      price: "50, 000",
      image: "/products/white6.png",
      bestSeller: true,
    },
    {
      name: "Wokiee - Ecommerce Shopify Theme",
      author: "p-themes",
      category: "Lifestyle",
      price: "75, 000",
      image: "/products/white5.png",
      bestSeller: true,
    },
    {
      name: "Minimog - Shopify OS 2.0 Theme",
      author: "FoxKit",
      category: "Beauty",
      price: "40, 000",
      image: "/products/white2.png",
      bestSeller: false,
    },
  ];
  
  export const categories = [
    { "id": 1, "name": "Electronics" },
    { "id": 2, "name": "Clothing" },
    { "id": 3, "name": "Books" }
  ];

  export const brands = [
    { "id": 1, "name": "Apple" },
    { "id": 2, "name": "Nike" },
    { "id": 3, "name": "Samsung" }
  ];

  export const localProducts = [
    {
      "id": 1,
      "name": "Common Projects Bball High",
      "color": "White",
      "price": 549,
      "quantity": 2,
      "image": "/common-projects.jpg" // Replace with your actual image path
    },
    {
      "id": 2,
      "name": "Maison Margiela Future Sneakers",
      "color": "White",
      "price": 870,
      "quantity": 1,
      "image": "/maison-margiela.jpg" // Replace with your actual image path
    },
    {
      "id": 3,
      "name": "Our Legacy Brushed Scarf",
      "color": "Brown",
      "price": 349,
      "quantity": 1,
      "image": "/our-legacy.jpg" // Replace with your actual image path
    },
    {
      "id": 4,
      "name": "Another Product Name",
      "color": "Black",
      "price": 199,
      "quantity": 3,
      "image": "/another-product.jpg" // Replace with your actual image path
    },
      {
      "id": 5,
      "name": "Sample Product Name",
      "color": "Blue",
      "price": 299,
      "quantity": 1,
      "image": "/sample-product.jpg" // Replace with your actual image path
    },
      {
      "id": 6,
      "name": "Example Product Name",
      "color": "Red",
      "price": 399,
      "quantity": 2,
      "image": "/example-product.jpg" // Replace with your actual image path
    },
  ];

  export const orders = {
    "orders": [
      {
        "orderId": "ORD1001",
        "customer": {
          "customerId": "CUST101",
          "name": "John Doe",
          "email": "john.doe@example.com",
          "phone": "+1234567890",
          "address": {
            "street": "123 Main St",
            "city": "New York",
            "state": "NY",
            "postalCode": "10001",
            "country": "USA"
          }
        },
        "products": [
          {
            "productId": "PROD001",
            "name": "Wireless Mouse",
            "quantity": 2,
            "price": 25.99
          }
        ],
        "totalAmount": 51.98,
        "orderDate": "2023-10-01T14:30:00Z",
        "status": "Shipped",
        "shippingMethod": "Standard",
        "trackingNumber": "TRK1001",
        "expectedDeliveryDate": "2023-10-07"
      },
      {
        "orderId": "ORD1002",
        "customer": {
          "customerId": "CUST102",
          "name": "Jane Smith",
          "email": "jane.smith@example.com",
          "phone": "+0987654321",
          "address": {
            "street": "456 Elm St",
            "city": "Los Angeles",
            "state": "CA",
            "postalCode": "90001",
            "country": "USA"
          }
        },
        "products": [
          {
            "productId": "PROD002",
            "name": "Mechanical Keyboard",
            "quantity": 1,
            "price": 89.99
          }
        ],
        "totalAmount": 89.99,
        "orderDate": "2023-10-02T10:15:00Z",
        "status": "Processing",
        "shippingMethod": "Express",
        "trackingNumber": null,
        "expectedDeliveryDate": "2023-10-05"
      },
      {
        "orderId": "ORD1003",
        "customer": {
          "customerId": "CUST103",
          "name": "Alice Johnson",
          "email": "alice.johnson@example.com",
          "phone": "+1122334455",
          "address": {
            "street": "789 Oak St",
            "city": "Chicago",
            "state": "IL",
            "postalCode": "60601",
            "country": "USA"
          }
        },
        "products": [
          {
            "productId": "PROD003",
            "name": "Bluetooth Headphones",
            "quantity": 1,
            "price": 59.99
          }
        ],
        "totalAmount": 59.99,
        "orderDate": "2023-10-03T16:45:00Z",
        "status": "Delivered",
        "shippingMethod": "Standard",
        "trackingNumber": "TRK1003",
        "expectedDeliveryDate": "2023-10-09"
      },
      {
        "orderId": "ORD1004",
        "customer": {
          "customerId": "CUST104",
          "name": "Bob Brown",
          "email": "bob.brown@example.com",
          "phone": "+3344556677",
          "address": {
            "street": "321 Pine St",
            "city": "Houston",
            "state": "TX",
            "postalCode": "77001",
            "country": "USA"
          }
        },
        "products": [
          {
            "productId": "PROD004",
            "name": "Smart Watch",
            "quantity": 1,
            "price": 199.99
          }
        ],
        "totalAmount": 199.99,
        "orderDate": "2023-10-04T09:00:00Z",
        "status": "Shipped",
        "shippingMethod": "Express",
        "trackingNumber": "TRK1004",
        "expectedDeliveryDate": "2023-10-08"
      },
      {
        "orderId": "ORD1005",
        "customer": {
          "customerId": "CUST105",
          "name": "Charlie Davis",
          "email": "charlie.davis@example.com",
          "phone": "+5566778899",
          "address": {
            "street": "654 Birch St",
            "city": "Phoenix",
            "state": "AZ",
            "postalCode": "85001",
            "country": "USA"
          }
        },
        "products": [
          {
            "productId": "PROD005",
            "name": "Wireless Earbuds",
            "quantity": 1,
            "price": 79.99
          }
        ],
        "totalAmount": 79.99,
        "orderDate": "2023-10-05T12:30:00Z",
        "status": "Processing",
        "shippingMethod": "Standard",
        "trackingNumber": null,
        "expectedDeliveryDate": "2023-10-10"
      },
      {
        "orderId": "ORD1006",
        "customer": {
          "customerId": "CUST106",
          "name": "Eva Green",
          "email": "eva.green@example.com",
          "phone": "+9988776655",
          "address": {
            "street": "987 Cedar St",
            "city": "Philadelphia",
            "state": "PA",
            "postalCode": "19019",
            "country": "USA"
          }
        },
        "products": [
          {
            "productId": "PROD006",
            "name": "Laptop Stand",
            "quantity": 1,
            "price": 39.99
          }
        ],
        "totalAmount": 39.99,
        "orderDate": "2023-10-06T15:20:00Z",
        "status": "Delivered",
        "shippingMethod": "Standard",
        "trackingNumber": "TRK1006",
        "expectedDeliveryDate": "2023-10-11"
      },
      {
        "orderId": "ORD1007",
        "customer": {
          "customerId": "CUST107",
          "name": "Frank White",
          "email": "frank.white@example.com",
          "phone": "+1122334455",
          "address": {
            "street": "753 Maple St",
            "city": "San Antonio",
            "state": "TX",
            "postalCode": "78201",
            "country": "USA"
          }
        },
        "products": [
          {
            "productId": "PROD007",
            "name": "External Hard Drive",
            "quantity": 1,
            "price": 129.99
          }
        ],
        "totalAmount": 129.99,
        "orderDate": "2023-10-07T11:10:00Z",
        "status": "Shipped",
        "shippingMethod": "Express",
        "trackingNumber": "TRK1007",
        "expectedDeliveryDate": "2023-10-12"
      },
      {
        "orderId": "ORD1008",
        "customer": {
          "customerId": "CUST108",
          "name": "Grace Lee",
          "email": "grace.lee@example.com",
          "phone": "+6677889900",
          "address": {
            "street": "852 Walnut St",
            "city": "San Diego",
            "state": "CA",
            "postalCode": "92101",
            "country": "USA"
          }
        },
        "products": [
          {
            "productId": "PROD008",
            "name": "USB-C Hub",
            "quantity": 1,
            "price": 49.99
          }
        ],
        "totalAmount": 49.99,
        "orderDate": "2023-10-08T13:40:00Z",
        "status": "Processing",
        "shippingMethod": "Standard",
        "trackingNumber": null,
        "expectedDeliveryDate": "2023-10-13"
      },
      {
        "orderId": "ORD1009",
        "customer": {
          "customerId": "CUST109",
          "name": "Henry Clark",
          "email": "henry.clark@example.com",
          "phone": "+4455667788",
          "address": {
            "street": "963 Cherry St",
            "city": "Dallas",
            "state": "TX",
            "postalCode": "75201",
            "country": "USA"
          }
        },
        "products": [
          {
            "productId": "PROD009",
            "name": "Monitor Stand",
            "quantity": 1,
            "price": 69.99
          }
        ],
        "totalAmount": 69.99,
        "orderDate": "2023-10-09T17:50:00Z",
        "status": "Delivered",
        "shippingMethod": "Standard",
        "trackingNumber": "TRK1009",
        "expectedDeliveryDate": "2023-10-14"
      },
      {
        "orderId": "ORD1010",
        "customer": {
          "customerId": "CUST110",
          "name": "Ivy Taylor",
          "email": "ivy.taylor@example.com",
          "phone": "+7788990011",
          "address": {
            "street": "147 Spruce St",
            "city": "San Jose",
            "state": "CA",
            "postalCode": "95101",
            "country": "USA"
          }
        },
        "products": [
          {
            "productId": "PROD010",
            "name": "Desk Lamp",
            "quantity": 1,
            "price": 29.99
          }
        ],
        "totalAmount": 29.99,
        "orderDate": "2023-10-10T10:00:00Z",
        "status": "Shipped",
        "shippingMethod": "Express",
        "trackingNumber": "TRK1010",
        "expectedDeliveryDate": "2023-10-15"
      }
    ]
  };