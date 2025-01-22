"use client"
import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button';
import { Edit2Icon, Trash2Icon } from 'lucide-react';
import { Dialog, DialogDescription, DialogHeader } from '@/components/ui/dialog';
import { DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { toFormData } from 'axios';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { brandAndCategoryService } from '@/services/brandAndCategoryService';
export default function page() {
    const [creatingBrand, setCreatingBrand] = useState(false);
    const [createBrand, setCreateBrand] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        setCreatingBrand(true);
        try {
            const response = await brandAndCategoryService.createBrand(formData);
            return response;
        } catch (error) {
            throw error;
        } finally {
            setCreatingBrand(false);
            setFormData({ title: '', description: '' });
        }
    }
    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center">
                <h4 className="text-2xl font-bold mb-4">Brands</h4>
                <Button onClick={() => setCreateBrand(true)} >+ New Brand</Button>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>S/N</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead >Description</TableHead>
                            <TableHead >Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow key={1}>
                            <TableCell>{1}</TableCell>
                            <TableCell>{"formData.name"}</TableCell>
                            <TableCell>{"formData.price"}</TableCell>
                            <TableCell className="flex gap-2">
                                <Edit2Icon className='cursor-pointer' />
                                <Trash2Icon className='cursor-pointer text-red-800' />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            <Dialog className="text-center" open={createBrand}>
            <DialogContent className="w-full sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create New Brand</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4">
                        <div>
                            <Label htmlFor="title">Title</Label>
                            <Input type="text" id="title" name="title" value={formData.title} onChange={(event)=>handleInputChange("title", event.target.value)} className="w-full" />
                        </div>
                        <div>
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" name="description" value={formData.description} onChange={(event)=>handleInputChange("description", event.target.value)} className="w-full" />
                        </div>
                        <div className="flex gap-3">
                            <Button onClick={() => setCreateBrand(false)} className="bg-secondary text-black border-2 border-black hover:text-black hover:bg-blue-gray-800">Cancel</Button>
                            <Button onClick={handleSubmit} >Submit</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
