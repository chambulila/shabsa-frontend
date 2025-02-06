"use client"
import CategoryListSkeleton from '@/components/category/CategoryListSkeletonLoading';
import CreateCategory from '@/components/category/CreateCategory';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { brandAndCategoryService } from '@/services/brandAndCategoryService';
import { clientService } from '@/services/clientService';
import { Trash2Icon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
export default function page() {
    const [createCategory, setCreateCategory] = useState(false);
    const [feedback, setFeedback] = useState([]);
    const [categoryToEdit, setCategoryToEdit] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getFeedbacks = async () => {
        try {
            const response = await clientService.feedback();
            setFeedback(response?.data)
            return response.data;
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getFeedbacks();
    }, []);

    const handleDelete = async (id) => {
        const response = await clientService.deleteFeedback(id);
        if (response?.status == 204) {
            getFeedbacks();
        } else {
            console.log("Failed to delete brand:", response);
        }
    }

    if (isLoading) {
        return <CategoryListSkeleton />
    }
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>S/N</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Message</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {feedback.map((brand, index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{brand?.username}</TableCell>
                            <TableCell>{brand?.phone_number}</TableCell>
                            <TableCell>{brand?.email}</TableCell>
                            <TableCell>{brand?.company}</TableCell>
                            <TableCell>{brand?.comment}</TableCell>
                            <TableCell className="flex gap-3">
                                <button className="text-red-700" onClick={() => handleDelete(brand?.id)}> <Trash2Icon /> </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </div>
    );
}
