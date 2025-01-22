'use client';
import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react';
import Image from 'next/image';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { brands, categories } from '@/utils/localDb';
import { redirect } from 'next/navigation';

const NewProduct = () => {
    const [product, setProduct] = useState({
        title: '',
        description: '',
        quantity: 0,
        price: 0,
        category: '',
        brand: '',
        images: [],
    });

    const handleInputChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setProduct({ ...product, images: [...product.images, ...files] });
    };

    const handleRemoveImage = (index) => {
        setProduct({ ...product, images: product.images.filter((_, i) => i !== index) });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (const key in product) {
            if (key === 'images') {
                product.images.forEach((image) => {
                    formData.append('images[]', image);
                });
            } else {
                formData.append(key, product[key]);
            }
        }

        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Product created successfully!');
                setProduct({
                    title: '',
                    description: '',
                    quantity: 0,
                    price: 0,
                    category: '',
                    brand: '',
                    images: [],
                })
            } else {
                console.error('Error creating product:', response.status);
            }
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create New Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Label htmlFor="title">Title</Label>
                    <Input type="text" id="title" name="title" value={product.title} onChange={handleInputChange} className="w-full" />
                </div>
                <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" name="description" value={product.description} onChange={handleInputChange} className="w-full" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="quantity">Quantity</Label>
                        <Input type="number" id="quantity" name="quantity" value={product.quantity} onChange={handleInputChange} className="w-full" />
                    </div>
                    <div>
                        <Label htmlFor="price">Price</Label>
                        <Input type="number" id="price" name="price" value={product.price} onChange={handleInputChange} className="w-full" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="category">Category</Label>
                        <Select onValueChange={(value) => setProduct({...product, category: value})}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a category" value={product.category}/>
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((category) => (
                                    <SelectItem key={category.id} value={category.name}>{category.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="brand">Brand</Label>
                        <Select onValueChange={(value) => setProduct({...product, brand: value})}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a brand" value={product.brand}/>
                            </SelectTrigger>
                            <SelectContent>
                                {brands.map((brand) => (
                                    <SelectItem key={brand.id} value={brand.name}>{brand.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div>
                    <Label htmlFor="images">Images</Label>
                    <Input type="file" id="images" name="images" multiple onChange={handleImageChange} className="w-full" />
                </div>

                {/* Image Preview */}
                <div className="flex flex-wrap gap-4 mt-4">
                    {product.images.map((image, index) => (
                        <div key={index} className="relative w-32 h-32 border rounded">
                            <Image src={URL.createObjectURL(image)} alt={`Preview ${index}`} fill style={{objectFit:"cover"}}/>
                            <button
                                type="button"
                                onClick={() => handleRemoveImage(index)}
                                className="absolute top-1 right-1 bg-gray-200 rounded-full p-1"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="flex justify-end gap-3">
                <Button className="bg-secondary text-black border-black border-2 hover:bg-blue-800 hover:text-white" onClick={() => redirect('/dashboard/products')} >Cancel</Button>
                <Button className="hover:bg-blue-800 hover:text-white" type="submit">Create</Button>
                </div>
            </form>
        </div>
    );
};

export default NewProduct;