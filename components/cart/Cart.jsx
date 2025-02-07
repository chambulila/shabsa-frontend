'use client';
import Image from 'next/image';
import { useState } from 'react';
import { X, Heart } from 'lucide-react';
import { Button } from '../ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { CardDescription } from '../ui/card';
import DeliveryInfo from './DeliveryInfo';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { useCart } from '@/contexts/cartContext';

// const cartItems = [
//     {
//         id: 1,
//         name: "Common Projects Bball High",
//         color: "White",
//         price: 549,
//         quantity: 2,
//         image: "/common-projects.jpg", // Replace with your image path
//     },
//     {
//         id: 2,
//         name: "Maison Margiela Future Sneakers",
//         color: "White",
//         price: 870,
//         quantity: 1,
//         image: "/maison-margiela.jpg", // Replace with your image path
//     },
//     {
//         id: 3,
//         name: "Our Legacy Brushed Scarf",
//         color: "Brown",
//         price: 349,
//         quantity: 1,
//         image: "/our-legacy.jpg", // Replace with your image path
//     },
// ];

const Cart = ({ closeCartModal }) => {
    const { cartItems, removeFromCart, clearCart } = useCart();
    const [cart, setCart] = useState(cartItems);
    const [isDeliveryFormOpen, setIsDeliveryFormOpen] = useState(false);

    const handleRemove = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const handleQuantityChange = (id, change) => {
        setCart(cart.map(item => {
            if (item.id === id) {
                const newQuantity = Math.max(0, item.quantity + change); // Prevent negative quantity
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <div className="container w-full mx-auto p-4">
            <div className="overflow-x-auto">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead> </TableHead>
                            <TableHead>#</TableHead>
                            <TableHead>Image</TableHead>
                            <TableHead>Product Name</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Price</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {cart.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="border-0 text-sm whitespace-nowrap"><X onClick={() => removeFromCart(item.id)} /></TableCell>
                                <TableCell className="border-0 text-sm whitespace-nowrap"> {index += 1} </TableCell>
                                <TableCell className="border-0 text-sm whitespace-nowrap"> <div className="relative w-16 h-16">
                                    <Image
                                        src={item?.images[0] ?? '/logo.jpeg'}
                                        alt={item.name}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="rounded-md"
                                    />
                                </div> </TableCell>
                                <TableCell className="border-0 text-sm whitespace-nowrap"> {item.name} </TableCell>
                                <TableCell className="border-0 text-sm whitespace-nowrap">
                                    <div className="flex items-center space-x-2">
                                        <button onClick={() => handleQuantityChange(item.id, 1)} className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center">+</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => handleQuantityChange(item.id, -1)} className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center">-</button>
                                    </div>
                                </TableCell>
                                <TableCell className="border-0 text-sm whitespace-nowrap"> {item.price} </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </div>
            <div className="mt-4 text-right font-bold">
                Total: ${calculateTotal()}
            </div>
            
            {cart.length === 0 && <div className="p-4 text-center">Your cart is empty.</div>}

            <div className="flex justify-between items-center">
                <Button onClick={() => closeCartModal()}>Continue Shoping</Button>
               {cart.length > 0 && <Button onClick={() => setIsDeliveryFormOpen(true)} className="bg-blue-800">Order Now</Button>}
            </div>

            {/* PLACE ORDER MODAL */}
            <Dialog open={isDeliveryFormOpen} >
            <DialogContent className="w-full sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Delivery Details</DialogTitle>
                        <DialogDescription>
                            Please fill in your information below to complete your order.
                        </DialogDescription>
                    </DialogHeader>
                    <DeliveryInfo cartItems={cartItems} clearCart={clearCart} closeCartModal={closeCartModal} setOpen={setIsDeliveryFormOpen} />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Cart;