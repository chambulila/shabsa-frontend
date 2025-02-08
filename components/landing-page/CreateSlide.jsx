// "use client"
import React, { useState } from 'react'
import { Input } from '../ui/input';
import Image from 'next/image';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { X } from 'lucide-react';
import { toast } from 'react-toastify';
import { companySettingService } from '@/services/companySettingService';

export default function CreateSlide({ handleClose }) {
    const [creatingSlide, setCreatingSlide] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        caption: '',
        image: null,
    });

    const handleInputChange = (key, value) => {
        setFormData((prev) => {
            return { ...prev, [key]: value }
        })
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        handleInputChange('image', file)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append("title", formData.title);
        data.append("caption", formData.caption);
        data.append("image", formData.image);

        setCreatingSlide(true);
        try {
            const response = await companySettingService.storeLandingPageData(data);
            if (response?.status === 201) {
                toast.success('Slide created successfully');
                handleClose();
                setFormData({ title: '', caption: '', image: null });
            }
            return response;
        } catch (error) {
            toast.error('Error occured while creating slide');
        } finally {
            setCreatingSlide(false);
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Label htmlFor="title">Title</Label>
                    <Input type="text" id="title" name="title" value={formData.title} onChange={(event) => handleInputChange("title", event.target.value)} className="w-full" />
                </div>
                <div>
                    <Label htmlFor="description">Caption</Label>
                    <Input id="caption" name="caption" value={formData.caption} onChange={(event) => handleInputChange("caption", event.target.value)} className="w-full" />
                </div>

                <div>
                    <Label htmlFor="images">Image</Label>
                    <Input type="file" id="images" name="images" onChange={handleImageChange} className="w-full" />
                </div>

                {/* Image Preview */}
                <div className="flex flex-wrap gap-4 mt-4">
                    {formData?.image && <div className="relative w-32 h-32 border rounded">
                            <Image src={URL.createObjectURL(formData?.image)} alt={`Preview`} fill style={{objectFit:"cover"}}/>
                            <button
                                type="button"
                                onClick={() => handleInputChange('image', null)}
                                className="absolute top-1 right-1 bg-gray-200 rounded-full p-1"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
}
                </div>

                <div className="flex gap-3">
                    <Button onClick={handleClose} className="bg-secondary text-black border-2 border-black hover:text-black hover:bg-blue-gray-800">Cancel</Button>
                    <Button disabled={creatingSlide} type="submit" >{creatingSlide ? 'Submitting...' : 'Submit'}</Button>
                </div>

            </form>
        </div>
    )
}
