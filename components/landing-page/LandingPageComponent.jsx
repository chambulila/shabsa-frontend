import React, { useEffect, useState } from 'react'
import { Carousel } from '../ui/corousel'
import { Button } from '../ui/button'
import { usePathname, useRouter } from 'next/navigation'
import CarouselSkeleton from './CorouselSkeletonLoading';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import CreateSlide from './CreateSlide';
import { toast } from 'react-toastify';
import { companySettingService } from '@/services/companySettingService';

export default function LandingPageComponent({fetchSlides, slides, loading}) {
    const router = useRouter();
    const pathname = usePathname();
    const [createSlide, setCreateSlide] = useState(false);
    const isAdmin = pathname === '/dashboard/settings/landing-page';
    const [selectedSlide, setSelectedSlide] = useState(null);

    const handleDeleteSlide = async (id) => {
        if (confirm('Are you sure you want to delete')) {
            const response = await companySettingService.deleteSlide(id);
            if (response.status === 204) {
                toast.success('Slide deleted successfully');
                fetchSlides();
            }
        }
    }

    const slidess = [
        {
            title: "We Are Professional",
            subtitle: "For Your Dream Project",
            image: "/home/tiles7.jpg"
        },
        {
            title: "Professional Builders",
            subtitle: "We Build Your Home",
            image: "/home/tiles2.jpg?height=600&width=1200"
        },
        {
            title: "Professional Builders",
            subtitle: "Let Us Make Your Home Beauty",
            image: "/home/tiles3.jpeg?height=600&width=1200"
        },
        {
            title: "Professional Builders",
            subtitle: "We Build Your Home",
            image: "/home/tiles4.jpg"
        },
        {
            title: "Expert Construction",
            subtitle: "30 Years of Experience",
            image: "/home/tiles1.webp?height=600&width=1200"
        },
        {
            title: "Expert Construction",
            subtitle: "30 Years of Experience",
            image: "/home/tiles5.webp?height=600&width=1200"
        }
    ]


    if (loading) {
        return <CarouselSkeleton />
    }
    return (
        <div>
            {isAdmin && <div className="flex justify-center my-3">
                <Button onClick={() => setCreateSlide(true)}>CREATE NEW SLIDE</Button>

                <Dialog open={createSlide || selectedSlide}>
                    <DialogContent className="max-w-none w-[80%]">
                        <DialogHeader>
                            <DialogTitle>Create New Category</DialogTitle>
                        </DialogHeader>

                        <CreateSlide selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide} refetchData={fetchSlides} handleClose={() => setCreateSlide(false)} />
                    </DialogContent>
                </Dialog>
            </div>}
            <Carousel>
                {slides?.map((slide, index) => (
                    <div key={index} className="relative h-[600px] flex items-center">
                        <div
                            className="absolute inset-0 z-0"
                            style={{
                                backgroundImage: `url('${slide.image}')`,
                                backgroundSize: 'contain', // Ensures full image is visible
                                backgroundRepeat: 'no-repeat', // Prevents repetition
                                backgroundPosition: 'center center', // Centers the image
                            }}
                        >
                            <div className="absolute inset-0 bg-black/50" />
                        </div>
                        <div className="container mx-auto px-4 relative z-10 text-white">
                            <h2 className="text-2xl md:text-3xl font-medium mb-4">
                                {slide?.title}
                            </h2>
                            <h1 className="text-4xl md:text-6xl font-bold mb-8">
                                {slide?.caption}
                            </h1>
                            <Button
                                onClick={() => router.push('/about-us')}
                                size="lg"
                                className="bg-[#FDB813] text-[#030f27] hover:bg-[#FDB813]/90"
                            >
                                LEARN MORE ABOUT US
                            </Button>

                            {isAdmin && <Button onClick={() => setSelectedSlide(slide)} className="bg-none border-2 text-white border-white mx-4">Edit This Slide</Button>}
                            {isAdmin && <Button onClick={() => handleDeleteSlide(slide?.id)} className="bg-none border-2 text-red-800 border-red-700 mx-4">Delete This Slide</Button>}
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
