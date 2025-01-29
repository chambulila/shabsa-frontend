"use client"
import CreateBrand from '@/components/brands/CreateBrand';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { brandAndCategoryService } from '@/services/brandAndCategoryService';
import { Edit2Icon, Trash2Icon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
export default function page() {
    const [creatingBrand, setCreatingBrand] = useState(false);
    const [createBrand, setCreateBrand] = useState(false);
    const [brands, setBrands] = useState([]);
    const [brandToEdit, setBrandToEdit] = useState(null);

    const getBrands = async () => {
        const response = await brandAndCategoryService.getBrands();
        setBrands(response?.data?.brands)
        return response.data;
    }
    console.log(brands)
    useEffect(() => {
        getBrands();
    }, []);

    const handleEditModal = (brand) => {
        setBrandToEdit(brand);
        setCreateBrand(true);
    }

    const handleCloseModal = () => {
        setBrandToEdit(null);
        setCreateBrand(false);
    }

    const handleDelete = async (brand) => {
        const response = await brandAndCategoryService.deleteBrand(brand.uuid);
        if (response?.status == 204) {
            getBrands();
        } else {
            console.log("Failed to delete brand:", response);
        }
    }
    return (
        <div>
            <Dialog open={createBrand}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Brand</DialogTitle>
                    </DialogHeader>
                    <CreateBrand handleClose={handleCloseModal} brandToEdit={brandToEdit} getBrands={getBrands} />
                </DialogContent>
            </Dialog>
            <div className="flex justify-end ">
                <Button onClick={() => setCreateBrand(true)}>+ New Brand</Button>
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
                    {brands.map((brand, index) => (
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
