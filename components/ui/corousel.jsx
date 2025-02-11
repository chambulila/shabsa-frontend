"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import PropTypes from "prop-types";

Carousel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.any,
  interval: PropTypes.number,
  autoplay: PropTypes.bool
}

export function Carousel({
  children,
  className,
  autoplay = true,
  interval = 5000,
}) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(autoplay)

  const next = React.useCallback(() => {
    setCurrentIndex((currentIndex) =>
      currentIndex === children?.length - 1 ? 0 : currentIndex + 1
    )
  }, [children?.length])

  const previous = React.useCallback(() => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? children?.length - 1 : currentIndex - 1
    )
  }, [children?.length])

  React.useEffect(() => {
    if (!isAutoPlaying) return

    const intervalId = setInterval(next, interval)
    return () => clearInterval(intervalId)
  }, [next, interval, isAutoPlaying])

  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden",
        className
      )}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {children?.map((child, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0"
            aria-hidden={index !== currentIndex}
          >
            {child}
          </div>
        ))}
      </div>
      <button
        onClick={previous}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {children?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              index === currentIndex
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}