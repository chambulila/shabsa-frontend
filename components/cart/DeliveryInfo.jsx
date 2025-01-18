import React, {useState} from 'react'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '../ui/button';
function DeliveryInfo({setOpen}) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        description: "",
    });

    const handleInputChange = (event, key) => {
        setFormData({...formData, [key]: event.target.value });
    };
    async function create() {
     console.log(formData)
        // mutate data
        // revalidate cache
      }
    return (
        <form action={create}>
            <div className="w-full space-y-4">
                <Input id="name" placeholder="Your Fullname" value={formData.name} onChange={(event) => handleInputChange(event, "name")} name="name" className="" />
                <Input id="phone" placeholder="Your Phone" value={formData.phone} onChange={(event) => handleInputChange(event, "phone")} name="phone" className="" />
                <Input id="address" placeholder="Address" value={formData.address} onChange={(event) => handleInputChange(event, "address")} name="address" className="" />
                <Textarea id="name" placeholder="Description here.." value={formData.description} onChange={(event) => handleInputChange(event, "description")} name="description" className="" />
            </div>
            <div className="flex gap-3 items-center mt-4">
                <Button onClick={() => setOpen(false)} className="w-full  border-2 hover:text-white bg-gray-600 hover:bg-gray-800 ">Cancel</Button>
                <Button type="submit" className="w-full bg-green-800 hover:bg-green-900">Submit</Button>
            </div>
        </form>
    )
}

export default DeliveryInfo