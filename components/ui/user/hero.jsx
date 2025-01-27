import { Button } from '@/components/ui/button'
import { Carousel } from '@/components/ui/corousel'

const slides = [
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
                LEARN MORE ABOUT US
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}