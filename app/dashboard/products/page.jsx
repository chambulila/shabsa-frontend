'use client';
import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from 'next/image';
import { X, Heart } from 'lucide-react';
import { localProducts } from '@/utils/localDb';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

const ProductTable = () => {
    const [products, setProducts] = useState(localProducts);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/data.json'); // Fetch from local file
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading products...</div>;
    }

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }

    if (products.length === 0) {
        return <div>No products found.</div>
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center">
                <h4 className="text-2xl font-bold mb-4">Products</h4>
                <Button onClick={() => redirect('/dashboard/products/create')} >+ New Product</Button>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Image</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Color</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className="text-right">Quantity</TableHead>
                            <TableHead className="text-right">Total</TableHead>
                            <TableHead className="w-[80px]">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <div className="w-16 h-16 relative">
                                        <Image src={product.image} alt={product.name} fill style={{objectFit:"cover"}}/>
                                    </div>
                                </TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.color}</TableCell>
                                <TableCell>${product.price}</TableCell>
                                <TableCell className="text-right">{product.quantity}</TableCell>
                                <TableCell className="text-right">${product.price * product.quantity}</TableCell>
                                <TableCell className="text-right flex gap-2">
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default ProductTable;