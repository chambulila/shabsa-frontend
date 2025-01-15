import { Button } from '@/components/ui/button'
import { Carousel } from '@/components/ui/corousel'

const slides = [
  {
    title: "We Are Professional",
    subtitle: "For Your Dream Project",
    image: "https://sjc.microlink.io/tHzXHVMUv8fVug0Bi8AAtn0t8kRp1mwJkpFQ1VpWmJ3-8MHMzQe2Eaw8wQrXETSW30G_1w-E7eK-g0tNclxMeA.jpeg"
  },
  {
    title: "Professional Builders",
    subtitle: "We Build Your Home",
    image: "/placeholder.svg?height=600&width=1200"
  },
  {
    title: "Expert Construction",
    subtitle: "30 Years of Experience",
    image: "/placeholder.svg?height=600&width=1200"
  }
]

export default function Hero() {
  return (
    <div className="h-[600px]">
      <Carousel>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[600px] flex items-center">
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="container mx-auto px-4 relative z-10 text-white">
              <h2 className="text-2xl md:text-3xl font-medium mb-4">
                {slide.title}
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-8">
                {slide.subtitle}
              </h1>
              <Button
                size="lg" 
                className="bg-[#FDB813] text-[#030f27] hover:bg-[#FDB813]/90"
              >
                GET A QUOTE
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}