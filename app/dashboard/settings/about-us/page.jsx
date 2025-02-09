"use client"
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit2Icon, LightbulbIcon, RocketIcon } from "lucide-react";
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import SuneditorTextField from '@/components/ui/SuneditorTextField';
import { redirect } from 'next/navigation';
import { companySettingService } from '@/services/companySettingService';
export default function page() {
    const [createModal, setCreateModal] = useState(false);
    const [creating, setCreating] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedAboutUs, setFetchedAboutUs] = useState(null);
    const [data, setData] = useState({
        title: fetchedAboutUs?.title || 'mimi',
        description: fetchedAboutUs?.description || '',
        image: fetchedAboutUs?.image ||'',
        mission: fetchedAboutUs?.mission ||'',
        vision: fetchedAboutUs?.vision ||'',
        id: fetchedAboutUs?.uuid || 0
    });

    const handleCloseCreate = () => setCreateModal(false);

    const handleTextChange = (field, value) => {
        setData((prev) => {
            return {
                ...prev, [field]: value
            }
        });
    }
    
    useEffect(() => {
        if(fetchedAboutUs) {
        setData((prev) => {
            return {
                ...prev,
                title: fetchedAboutUs?.title,
                description: fetchedAboutUs?.description,
                image: fetchedAboutUs?.image,
                mission: fetchedAboutUs?.mission,
                vision: fetchedAboutUs?.vision,
                id: fetchedAboutUs?.uuid,
            }
        })
    }
    }, [fetchedAboutUs])

    const handleImageChange = (e) => {
        const files = e.target.files[0];
        setData({ ...data, image: files });
    };

    const fetchAboutUs = async () => {
        try {
            const response = await companySettingService.getAboutUs();
            setFetchedAboutUs(response?.data?.about);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchAboutUs();
    }, []);

    const handleSubmitAbout = async (event) => {
        event.preventDefault();
        setCreating(true);
        try {
            const formData = new FormData();
            formData.append("title", data.title);
            formData.append("description", data.description);
            formData.append("image", data.image);
            formData.append("mission", data.mission);
            formData.append("vision", data.vision);
            formData.append("id", data.id);
            const response = await companySettingService.storeAboutUs(formData);
            if(response?.status === 201){
                fetchAboutUs();
              }
            console.log(response);
        } catch (error) {
            setError(error);
            setCreating(false);
        } finally {
            setCreating(false);
            handleCloseCreate();
        }
    }

    if (isLoading) {
        return <p>Loading data!!</p>
    }

    return (
        <div>
            <Dialog open={createModal} className="w-[100%]" >
                <DialogContent className="w-full max-w-[70%]">
                    <DialogHeader>
                        <DialogTitle>Edit About Us Details</DialogTitle>
                    </DialogHeader>
                    {/* Change DialogDescription to a div to avoid the invalid nesting */}
                    <form onSubmit={handleSubmitAbout}>
                    <div className="text-sm text-muted-foreground space-y-8">
                        <Input name="title" value={data.title} placeholder="Write title here..." onChange={(event) => handleTextChange("title", event.target.value)} />
                        <Input name="vision" value={data.vision} placeholder="Write vision here..." onChange={(event) => handleTextChange("vision", event.target.value)} />
                        <Input name="mission" value={data.mission} placeholder="Write mission here..." onChange={(event) => handleTextChange("mission", event.target.value)} />
                        <SuneditorTextField value={data.description} placeholder="Description here..." setValue={(event) => handleTextChange("description", event)} />
                        <Input type="file"  required={!data?.image} id="image" name="image"  className="w-full" onChange={handleImageChange} />
                    </div>
                <div className="flex justify-end gap-3">
                    <Button type="button" className="bg-secondary text-black border-black border-2 hover:bg-blue-800 hover:text-white" onClick={handleCloseCreate} >Cancel</Button>
                    <Button disabled={creating} className="hover:bg-blue-800 hover:text-white" type="submit">{creating ? 'Submitting' : 'Submit'}</Button>
                </div>
                    </form>
                </DialogContent>
            </Dialog>

            <div className="  flex justify-center items-center my-8 text-gray-700 text-5xl font-extrabold gap-4">
                <p>About Us</p>
                <Button onClick={() => setCreateModal(true)}>
                    <Edit2Icon className="inline-block w-6 h-6 text-yellow-500" />
                    Edit About Us
                </Button>
            </div>

            <div className="relative ">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12 px-6">
                    {/* Left Image */}
                    <div className={`relative flex-shrink-0 w-full md:w-1/2 h-64 md:h-auto ${!fetchedAboutUs?.image ? 'bg-black' : ''}`}>
                        <Image
                            src={fetchedAboutUs?.image?.replace(/\\/g, '')?.replace(/([^:]\/)\/+/g, "$1")} // Replace with the actual image path
                            alt="Image"
                            width={1000}
                            height={1000}
                            objectFit="cover"
                            className="rounded-lg shadow-md"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col items-start md:w-1/2 text-center md:text-left">
                        <h2 className="text-sm text-yellow-800 font-medium uppercase">
                            Welcome to Shabsa ceramic & general supply limited
                        </h2>
                        <h1 className="text-4xl text-gray-600 text-start md:text-5xl font-bold mt-2 leading-tight">
                            {fetchedAboutUs?.title}
                        </h1>
                        <div className="text-gray-500 mt-4 font-semibold ">
                            <div dangerouslySetInnerHTML={{ __html: fetchedAboutUs?.description }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-center shadow-none">
                {/* Cards Container */}
                <div className="flex flex-col md:flex-row gap-5 md:gap-8 my-5 px-4 md:px-16 text-gray-500">
                    {/* Mission Card */}
                    <Card className="w-full hover:scale-105 transition duration-500 hover:shadow-md md:w-1/2">
                        <CardHeader>
                            <div className="flex flex-col items-center text-gray-500">
                                <RocketIcon className="text-yellow-500" size={90} />
                                <CardTitle className="text-3xl md:text-4xl uppercase">Mission</CardTitle>
                                <div className="w-[80%] border-t border-gray-500 mt-2"></div>
                            </div>
                        </CardHeader>
                        <CardContent className="flex text-center">
                            <CardDescription className="font-bold text-sm md:text-base">
                                {fetchedAboutUs?.mission}
                            </CardDescription>
                        </CardContent>
                    </Card>

                    {/* Vision Card */}
                    <Card className="w-full hover:scale-105 transition duration-500 hover:shadow-md md:w-1/2">
                        <CardHeader>
                            <div className="flex flex-col items-center text-gray-500">
                                <LightbulbIcon className="text-yellow-500" size={90} />
                                <CardTitle className="text-3xl md:text-4xl uppercase">Vision</CardTitle>
                                <div className="w-[80%] border-t border-gray-500 mt-2"></div>
                            </div>
                        </CardHeader>
                        <CardContent className="flex text-center">
                            <CardDescription className="font-bold text-sm md:text-base">
                                {fetchedAboutUs?.vision}
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
