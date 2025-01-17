"use client"
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react'; // Import shopping cart icon
import { Button } from '@/components/ui/button';
import { products } from '@/utils/localDb';

import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
const ProductCard = ({ product }) => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        description: "",
    });

    const handleInputChange = (event, key) => {
        setFormData({...formData, [key]: event.target.value });
    };
    async function create() {
     console.log(formData)
        // mutate data
        // revalidate cache
      }
    return (
        <div className="border rounded-lg shadow-sm hover:scale-105 hover:shadow-md transition duration-300" >
            <Dialog open={open}>
                <DialogContent className="w-full sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Delivery Details</DialogTitle>
                        <DialogDescription>
                            Please fill in your information below to complete your order.
                        </DialogDescription>
                    </DialogHeader>
                    <form action={create}>
                    <div className="w-full space-y-4">
                        <Input id="name" placeholder="Your Fullname" value={formData.name} onChange={(event) => handleInputChange(event, "name")} name="name" className="" />
                        <Input id="phone" placeholder="Your Phone" value={formData.phone} onChange={(event) => handleInputChange(event, "phone")} name="phone" className="" />
                        <Input id="address" placeholder="Address" value={formData.address} onChange={(event) => handleInputChange(event, "address")} name="address" className="" />
                        <Textarea id="name" placeholder="Description here.." value={formData.description} onChange={(event) => handleInputChange(event, "description")} name="description" className="" />
                    </div>
                    <div className="flex gap-3 items-center mt-4">
                      <Button onClick={() => setOpen(false)} className="w-full bg-secondary text-black border-2 hover:text-white hover:bg-gray-600 border-black">Cancel</Button>
                      <Button type="submit" className="w-full hover:bg-blue-800">Submit</Button>
                    </div>
                    </form>
                </DialogContent>
            </Dialog>

            <div className="relative cursor-pointer">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={400} // Adjust as needed
                    height={300}
                    className="object-cover rounded-t-lg"
                />
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold truncate cursor-pointer ">{product.name}</h3>
                <p className="text-sm text-gray-500">{`Tsh. ${product.price}`}</p>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex w-full justify-between gap-3">
                        <Button className=" outline hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                            <ShoppingCart className="h-4 w-4 inline-block mr-1" />
                            Add To Cart
                        </Button>
                        <Button onClick={() => setOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <ShoppingCart className="h-4 w-4 inline-block mr-1" />
                            Order Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProductsPage = () => {
    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl md:text-4xl font-bold  lg:mb-8 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products?.map((product) => (
                    <ProductCard key={product.name} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;