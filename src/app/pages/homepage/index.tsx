"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import image from "@/app/assets/image.png"
import "./style.css"

const slides = [
  {
    image:
      image,
    title: "TAKE A FRESH LOOK AT BATH FIXTURES",
    subtitle: "Start Cookware At $99 Only",
    buttonText: "SHOP NOW",
  },
  {
    image: image,
    title: "DISCOVER MODERN LIVING",
    subtitle: "Premium Collections Starting at $149",
    buttonText: "EXPLORE NOW",
  },
  {
    image: image,
    title: "TRANSFORM YOUR SPACE",
    subtitle: "Designer Picks from $129",
    buttonText: "VIEW MORE",
  },
]

export default function HomePage() {
  return (
    <div className="relative w-full h-[600px] md:h-[800px]">
  <Swiper
    modules={[Navigation, Autoplay]}
    navigation={{
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    }}
    loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    className="w-full h-full"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="relative w-full h-full">
          <Image
            src={slide.image || "/placeholder.svg"}
            alt="Hero background"
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="bg-white bg-opacity-95 p-8 md:p-12 max-w-2xl text-center space-y-4 mx-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {slide.subtitle}
              </p>
              <Button size="lg" className="bg-[#B5A69C] hover:bg-[#a39589] text-white px-8 py-6 text-lg">
                {slide.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Swiper Navigation Buttons */}
  <button className="swiper-button-prev ">
  <ChevronLeft />
</button>

<button className="swiper-button-next">
  <ChevronRight/>
</button>

</div>

  )
}

