import React, { useState } from 'react'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '../ui/button';
import { clientService } from '@/services/clientService';
import { toast } from 'react-toastify';
function DeliveryInfo({ cartItems, closeCartModal = null, clearCart, setOpen }) {
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        country: "",
        city: "",
    });
    console.log(cartItems)
    const handleInputChange = (event, key) => {
        setFormData({ ...formData, [key]: event.target.value });
    };
    async function create() {
        console.log(formData)
        const data = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            address: formData.address,
            country: formData.country,
            city: formData.city,
            items: cartItems,
        }
        setSubmitting(true);
        try {
            const response = await clientService.submitOrder(data);
            if (response?.status === 201) {
                toast.success('Your order have been successfully sent!')
                setOpen(false);
                setFormData();
                clearCart();
                closeCartModal();
            }
            return response;
        } catch (e) {
            setError('An error occured while submitting order. please contact the administrator via phone number')
        } finally {
            setSubmitting(false);
        }
    }
    
    if (error) {
        toast.error(error);
        setError(null);
    }

    return (
        <form action={create}>
            <div className="w-full space-y-4">
                <Input id="name" required placeholder="Your Fullname" value={formData?.name} onChange={(event) => handleInputChange(event, "name")} name="name" className="" />
                <Input id="phone" required type="number" placeholder="Your Phone" value={formData?.phone} onChange={(event) => handleInputChange(event, "phone")} name="phone" className="" />
                <Input id="email" required type="email" placeholder="Your Email" value={formData?.email} onChange={(event) => handleInputChange(event, "email")} name="email" className="" />
                <Input id="address" required placeholder="Address" value={formData?.address} onChange={(event) => handleInputChange(event, "address")} name="address" className="" />
                <Input id="country" required placeholder="Country" value={formData?.country} onChange={(event) => handleInputChange(event, "country")} name="country" className="" />
                <Input id="city" required placeholder="City" value={formData?.city} onChange={(event) => handleInputChange(event, "city")} name="city" className="" />
            </div>
            <div className="flex gap-3 items-center mt-4">
                <Button type="button" onClick={() => setOpen(false)} className="w-full  border-2 hover:text-white bg-gray-600 hover:bg-gray-800 ">Cancel</Button>
                <Button disabled={submitting} type="submit" className="w-full bg-green-800 hover:bg-green-900">Submit</Button>
            </div>
        </form>
    )
}

export default DeliveryInfo