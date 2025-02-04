'use client';
import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from 'next/image';
import { X, Heart, Edit2Icon, Trash2Icon } from 'lucide-react';
import { localProducts } from '@/utils/localDb';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';
import { productService } from '@/services/productService';
import { Pagination } from '@mui/material';
import { Input } from '@/components/ui/input';
import debounce from 'debounce'; // Import debounce
import Link from 'next/link';
import ProductListSkeleton from '@/components/products/ProductsListSkeletonLoading';

const ProductTable = () => {
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
    const debouncedHandleFiltersChange = debounce((key, value) => {
        setFilters((prev) => {
            return { ...prev, [key]: value };
        });
    }, 500); // 300ms delay

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
        return <ProductListSkeleton />
    }

    if (products?.length === 0) {
        return <div>No products found.</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h4 className="text-2xl font-bold mb-4 text-nowrap">Products List</h4>
            <div className="flex justify-between items-center gap-5">
                <Input
                // value={filters.name}
                    className="w-[50%] border-black border-2"
                    placeholder="Search product by name"
                    onChange={handleSearchChange} // Use the debounced handler
                />
                <Button onClick={() => redirect('/dashboard/products/create')}>+ New Product</Button>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader className="uppercase">
                        <TableRow>
                            <TableHead className="w-[100px] font-extrabold">Image</TableHead>
                            <TableHead className="font-extrabold">Name</TableHead>
                            <TableHead className="font-extrabold">Description</TableHead>
                            <TableHead className="font-extrabold">Brand</TableHead>
                            <TableHead className="font-extrabold">Category</TableHead>
                            <TableHead className="font-extrabold">Price</TableHead>
                            <TableHead className="font-extrabold">Quantity</TableHead>
                            <TableHead className="font-extrabold">Status</TableHead>
                            <TableHead className="w-[80px] font-extrabold">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products?.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    {product?.images[0] ? (
                                        <Image
                                            src={product.images[0].replace(/\\/g, '')}
                                            alt="No Image"
                                            width={100}
                                            height={100}
                                            className="rounded"
                                        />
                                    ) : null}
                                </TableCell>
                                <TableCell>
                                    <Link href={`#`}> {product.name} </Link>
                                </TableCell>
                                <TableCell>
                                    <div dangerouslySetInnerHTML={{ __html: product.description }} />
                                </TableCell>
                                <TableCell>{product.brand}</TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.quantity}</TableCell>
                                <TableCell>{product.is_published == 1 ? 'Published' : 'Not Published'}</TableCell>
                                <TableCell className="flex gap-3">
                                <Link href={`/dashboard/products/${product.id}/edit`}> <Edit2Icon /> </Link>
                                    <button><Trash2Icon className="text-red-800" /></button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="flex justify-center gap-3">
                    <Pagination
                        color="primary"
                        page={pagination?.current_page}
                        count={pagination?.last_page}
                        onChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductTable;