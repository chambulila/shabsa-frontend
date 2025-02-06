"use client";
import React, { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { clientService } from '@/services/clientService';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
        phone: ""
    });

    const handleChange = (event) => {
        setData((prev) => {
            return {
                ...prev, [event.target.name]: event.target.value
            }
        })
    }

    const isFormFilled = () => {
        if(data.name !== "" && data.email !== "" && data.message !== "" && data.phone !== "") {
            return true;
        } else {
            return false;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await clientService.submitContactForm(data);
            if(response?.status === 201) {
                setData({
                    name: "",
                    email: "",
                    company: "",
                    message: "",
                    phone: ""
                });
                setError(null);
            }
            return response;
        } catch (error) {
            setError(error?.response?.data?.errors);
        } finally {
            setIsSubmitting(false);
        }
    }
    return (
        <div>
            <h2 className="text-3xl md:text-4xl font-bold  my-8 text-center">Contact Us</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Information */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">Get In Touch</h2>
                    <p className="">
                        We value your feedback and are committed to providing excellent customer service. If you have any questions, comments, or concerns, 1  please don't hesitate to contact us. 2  We're here to help and will respond to your inquiry as soon as possible.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <MapPin className="h-6 w-6 text-blue-400" />
                            <div>
                                <p className="font-medium">Address</p>
                                <p className="">
                                    Dar es salaam, Tanzania. <br />
                                    (Ungindoni, Kigamboni)
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Phone className="h-6 w-6 text-blue-400" />
                            <div>
                                <p className="font-medium">Phone</p>
                                <p className="">+255 753 160 229</p>
                                <p className="">+255 714 119 105</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail className="h-6 w-6 text-blue-400" />
                            <div>
                                <p className="font-medium">Email</p>
                                <p className="">info@shabsa.co.tz</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-100 text-gray-800 p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="name">Full Name</Label>
                            <Input onChange={handleChange} value={data.name} type="text" name="name" id="name" className="w-full" />
                            {error?.name && <p className="text-red-800 text-xs">{ error?.name }</p>}
                        </div>
                        <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input onChange={handleChange} value={data.phone} type="number" name="phone" id="phone" className="w-full" />
                            {error?.phone && <p className="text-red-800 text-xs">{ error?.phone }</p>}
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input onChange={handleChange} value={data.email} type="email" name="email" id="email" className="w-full" />
                            {error?.email && <p className="text-red-800 text-xs">{ error?.email }</p>}
                        </div>
                        <div>
                            <Label htmlFor="company">Company (Optional)</Label>
                            <Input onChange={handleChange} value={data.company} type="text" name="company" id="company" className="w-full" />
                        </div>
                        <div>
                            <Label htmlFor="message">Type your Message</Label>
                            <Textarea onChange={handleChange} value={data.message} id="message" name="message" className="w-full h-32 resize-none" />
                            {error?.message && <p className="text-red-800 text-xs">{ error?.message }</p>}
                        </div>
                        <Button disabled={isSubmitting || !isFormFilled} type="submit" className=" bg-gray-800 hover:bg-blue-800 w-full text-white font-bold py-2 px-4 rounded">
                            {isSubmitting ? 'Submittng...' : 'Send'}
                        </Button>
                    </form>
                </div>
            </div>

            <div className="w-full flex justify-center mt-8">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d20370.066916080774!2d39.346037921687646!3d-6.867938366438645!3m2!1i1024!2i768!4f13.1!2m1!1sUngindoni!5e0!3m2!1sen!2stz!4v1737149084093!5m2!1sen!2stz"
                    width="90%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    )
}
