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
import { X, Heart, Edit2Icon, Trash2Icon } from 'lucide-react';
import { localProducts } from '@/utils/localDb';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';
import { productService } from '@/services/productService';

const ProductTable = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await productService.getProducts();
            setProducts(response?.data?.products);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading products...</div>;
    }

    console.log("pr", products)
    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }

    if (products?.length === 0) {
        return <div>No products found.</div>
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center">
                <h4 className="text-2xl font-bold mb-4">Products List</h4>
                <Button onClick={() => redirect('/dashboard/products/create')} >+ New Product</Button>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader className="uppercase ">
                        <TableRow>
                            <TableHead className="w-[100px] font-extrabold">Image</TableHead>
                            <TableHead className="font-extrabold">Name</TableHead>
                            <TableHead className="font-extrabold">Description</TableHead>
                            <TableHead className="font-extrabold">Brand</TableHead>
                            <TableHead className="font-extrabold">Category</TableHead>
                            <TableHead className="font-extrabold">Price</TableHead>
                            <TableHead className="font-extrabold" >Quantity</TableHead>
                            <TableHead className="font-extrabold">status</TableHead>
                            <TableHead className="w-[80px] font-extrabold">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products?.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    {product?.image && <div className="w-16 h-16 relative">
                                        <Image src={product.image} alt={product.name} fill style={{objectFit:"cover"}}/>
                                    </div>}
                                </TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell>{product.brand}</TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell >{product.quantity}</TableCell>
                                <TableCell >{product.is_published == 1 ? 'Published' : 'Not Published'}</TableCell>
                                <TableCell className="flex gap-3">
                                <button > <Edit2Icon /> </button>
                                <button > <Trash2Icon className='text-red-800' /> </button>
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