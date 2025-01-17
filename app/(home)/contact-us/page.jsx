'use client';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const ContactUs = () => {
    return (
        <div className="bg-gray-800 text-white min-h-screen py-16 px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold  lg:mb-8 text-center">Contact Us</h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Information */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">Get In Touch</h2>
                    <p className="text-gray-300">
                        We value your feedback and are committed to providing excellent customer service. If you have any questions, comments, or concerns, 1  please don't hesitate to contact us. 2  We're here to help and will respond to your inquiry as soon as possible.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <MapPin className="h-6 w-6 text-blue-400" />
                            <div>
                                <p className="font-medium">Address</p>
                                <p className="text-gray-300">
                                    Dar es salaam, Tanzania. <br />
                                    (Ungindoni, Kigamboni)
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Phone className="h-6 w-6 text-blue-400" />
                            <div>
                                <p className="font-medium">Phone</p>
                                <p className="text-gray-300">+255 753 160 229</p>
                                <p className="text-gray-300">+255 714 119 105</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail className="h-6 w-6 text-blue-400" />
                            <div>
                                <p className="font-medium">Email</p>
                                <p className="text-gray-300">info@shabsa.co.tz</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-100 text-gray-800 p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
                    <form className="space-y-4">
                        <div>
                            <Label htmlFor="name">Full Name</Label>
                            <Input type="text" id="name" className="w-full" />
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" className="w-full" />
                        </div>
                        <div>
                            <Label htmlFor="company">Company (Optional)</Label>
                            <Input type="company" id="company" className="w-full" />
                        </div>
                        <div>
                            <Label htmlFor="message">Type your Message</Label>
                            <Textarea id="message" className="w-full h-32 resize-none" />
                        </div>
                        <Button type="submit" className=" bg-gray-800 hover:bg-blue-800 w-full text-white font-bold py-2 px-4 rounded">
                            Send
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
    );
};

export default ContactUs;