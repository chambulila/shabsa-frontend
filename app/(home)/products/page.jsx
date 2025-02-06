"use client";
import Image from "next/image";
import { ShoppingBasket, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { products } from "@/utils/localDb";
import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import DeliveryInfo from "@/components/cart/DeliveryInfo";
import { productService } from "@/services/productService";
import { useCart } from "@/contexts/cartContext";

const ProductCard = ({ product }) => {
    const [open, setOpen] = useState(false);
    const { addToCart } = useCart();

    return (
        <div className="border rounded-lg shadow-sm hover:scale-105 hover:shadow-md transition duration-500">
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="w-full sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Delivery Details</DialogTitle>
                        <DialogDescription>
                            Please fill in your information below to complete your order.
                        </DialogDescription>
                    </DialogHeader>
                    <DeliveryInfo setOpen={setOpen} />
                </DialogContent>
            </Dialog>

            <div className="relative cursor-pointer">
                <Image
                    src={product?.images[0] ?? '/logo.jpeg'}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="object-cover rounded-t-lg"
                />
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold truncate cursor-pointer">{product.name}</h3>
                <p className="text-sm text-gray-500">{`Tsh. ${product.price}`}</p>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex w-full justify-between gap-3">
                        <Button
                            onClick={() => addToCart(product)}
                            className="outline hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                        >
                            <ShoppingCart className="h-4 w-4 inline-block mr-1" />
                            Add To Cart
                        </Button>
                        <Button
                            onClick={() => setOpen(true)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            <ShoppingBasket className="h-4 w-4 inline-block mr-1" />
                            Order Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pagination, setPagination] = useState(null);
    const [filters, setFilters] = useState({
        name: '',
        page: 1,
    });

    // Fetch products
    const fetchProducts = async () => {
        setLoading(true);
        const queryString =
            Object.keys(filters ? filters : [])
                .filter((key) => filters[key] !== "")
                .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(filters[key])}`)
                .join("&") || null;
        try {
            const response = await productService.getProducts(queryString);
            setProducts(response?.data?.products);
            setPagination(response?.data?.pagination);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    // Fetch products when filters change
    useEffect(() => {
        fetchProducts();
    }, [filters]);

    // Debounced handleFiltersChange for search input
    const debouncedHandleFiltersChange = ((key, value) => {
        setFilters((prev) => {
            return { ...prev, [key]: value };
        });
    }); // 300ms delay

    // Handle search input change
    const handleSearchChange = (event) => {
        const value = event.target.value;
        debouncedHandleFiltersChange("name", value); // Use debounced function
    };

    // Handle page change
    const handlePageChange = (event, newPage) => {
        setPagination((prev) => {
            return { ...prev, current_page: newPage };
        });
        setFilters((prev) => {
            return { ...prev, page: newPage };
        });
    };

    if (loading) {
        // return <ProductListSkeletonForUser />
    }
    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Featured Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products?.map((product) => (
                    <ProductCard key={product.name} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
