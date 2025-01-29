import React, { useState } from 'react'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '../ui/button';
import { brandAndCategoryService } from '@/services/brandAndCategoryService';
export default function CreateCategory({ brandToEdit = null, setCreateBrand, handleClose, getCategories }) {
    const [creatingBrand, setCreatingBrand] = useState(false);
    const [formData, setFormData] = useState({
        title: brandToEdit?.name || '',
        description: brandToEdit?.description || '',
    });

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setCreatingBrand(true);
        try {
            let response;
            if (brandToEdit) {
                response = await brandAndCategoryService.updateCategory(brandToEdit.uuid, formData);
            } else {
                response = await brandAndCategoryService.createCategory(formData);
            }
            console.log(response)
            if (response?.status == 201) {
                getCategories();
                setFormData({ title: '', description: '' });
                handleClose(); // Close modal or reset the state for creating a brand
            }
            else {
                console.log("Failed to create brand:", response);
            }
            setCreateBrand(false); // Close modal or reset the state for creating a brand
        } catch (error) {
            console.log("Error creating brand:", error);
        } finally {
            setCreatingBrand(false); // Ensure loading state is reset
            handleClose(); // Close modal or reset the state for creating a brand
        }
    };
    return (
        <form className="space-y-4">
            <div>
                <Label htmlFor="title">Title</Label>
                <Input type="text" id="title" name="title" value={formData.title} onChange={(event) => handleInputChange("title", event.target.value)} className="w-full" />
            </div>
            <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" value={formData.description} onChange={(event) => handleInputChange("description", event.target.value)} className="w-full" />
            </div>
            <div className="flex gap-3">
                <Button onClick={handleClose} className="bg-secondary text-black border-2 border-black hover:text-black hover:bg-blue-gray-800">Cancel</Button>
                <Button disabled={creatingBrand} type="submit" onClick={handleSubmit} >{creatingBrand ? 'Submitting...' : 'Submit'}</Button>
            </div>
        </form>
    )
}
