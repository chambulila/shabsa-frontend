import { Clock, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import { Avatar } from '../avatar'

export default function TopBar() {
  return (
    <div className="bg-gray-900 text-navy-900  text-white py-2">
      {/* bg-[#ad8320] */}
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div className="text-2xl flex items-center gap-3 font-bold mb-2 md:mb-0">
          <span>
            {/* <Avatar> */}
            <Image src={'/logo1.png'} alt=''  width={85} height={50} className="" objectFit='rounded' />
            {/* </Avatar> */}
          </span>
          {/* <span>Shabsa</span> */}
        </div>
        <div className="w-full md:w-auto flex flex-wrap justify-center md:justify-end gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <div>
              <div className="text-sm font-medium">Opening Hour</div>
              <div className="text-sm">Mon - Fri, 8:30 AM - 5:30 PM</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <div>
              <div className="text-sm font-medium">Call Us</div>
              <div className="text-sm">+255 753 160 229</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <div>
              <div className="text-sm font-medium">Email Us</div>
              <div className="text-sm">info@shabsa.co.tz</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}