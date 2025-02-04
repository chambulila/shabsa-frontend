"use client"
import CategoryListSkeleton from '@/components/category/CategoryListSkeletonLoading';
import CreateCategory from '@/components/category/CreateCategory';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { brandAndCategoryService } from '@/services/brandAndCategoryService';
import { Edit2Icon, Trash2Icon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
export default function page() {
    const [creatingCategory, setCreatingCategory] = useState(false);
    const [createCategory, setCreateCategory] = useState(false);
    const [categories, setCategories] = useState([]);
    const [categoryToEdit, setCategoryToEdit] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getCategories = async () => {
        try {
            const response = await brandAndCategoryService.getCategories();
            setCategories(response?.data?.categories)
            return response.data;
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    const handleEditModal = (brand) => {
        setCategoryToEdit(brand);
        setCreateCategory(true);
    }

    const handleCloseModal = () => {
        setCategoryToEdit(null);
        setCreateCategory(false);
    }

    const handleDelete = async (brand) => {
        const response = await brandAndCategoryService.deleteCategory(brand.uuid);
        if (response?.status == 204) {
            getCategories();
        } else {
            console.log("Failed to delete brand:", response);
        }
    }

    if (isLoading) {
        return <CategoryListSkeleton />
    }
    return (
        <div>
            <Dialog open={createCategory}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Category</DialogTitle>
                    </DialogHeader>
                    <CreateCategory handleClose={handleCloseModal} categoryToEdit={categoryToEdit} getCategories={getCategories} />
                </DialogContent>
            </Dialog>
            <div className="flex justify-end ">
                <Button onClick={() => setCreateCategory(true)}>+ New Category</Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>S/N</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {categories.map((brand, index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{brand.name}</TableCell>
                            <TableCell>{brand.description}</TableCell>
                            <TableCell className="flex gap-3">
                                <button onClick={() => handleEditModal(brand)}> <Edit2Icon /> </button>
                                <button className="text-red-700" onClick={() => handleDelete(brand)}> <Trash2Icon /> </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </div>
    );
}
