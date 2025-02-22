import Image from "next/image"
import { Heart, MoreHorizontal, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import image from "@/app/assets/image.png"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  images: string[] // Ensure it's an array of strings
  thumbnails: string[]
}

const products: Product[] = [
  {
    id: 1,
    name: "Cocktail Picks",
    price: 30.0,
    images: [image.src], // Use image.src instead of directly assigning image
    thumbnails: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 2,
    name: "Round Cork Tray",
    price: 70.0,
    originalPrice: 100.0,
    images: [image.src],
    thumbnails: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 3,
    name: "Junto Salt Shaker",
    price: 100.0,
    images: [image.src],
    thumbnails: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 4,
    name: "Resting Spoon Set",
    price: 45.0,
    originalPrice: 80.0,
    images: [image.src],
    thumbnails: ["/placeholder.svg", "/placeholder.svg"],
  },
]

export default function ProductListing() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-medium text-center mb-8">Our Best Seller</h1>

      <div className="flex justify-center gap-4 mb-12">
        <Button variant="secondary" className="bg-[#B19B84] text-white hover:bg-[#9a856f]">
          NEW ARRIVALS
        </Button>
        <Button variant="outline" className="border-[#B19B84] text-[#B19B84] hover:bg-[#B19B84] hover:text-white">
          BEST SELLERS
        </Button>
        <Button variant="outline" className="border-[#B19B84] text-[#B19B84] hover:bg-[#B19B84] hover:text-white">
          TOP RATES
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="relative aspect-square bg-[#F5F5F5] mb-4">
              <Image
                src={product.images[0] || "/placeholder.svg"} // Access the first image correctly
                alt={product.name}
                fill
                className="object-contain p-8"
              />

              {/* Action buttons */}
              <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="icon" variant="secondary" className="rounded-full bg-white hover:bg-white/90">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full bg-white hover:bg-white/90">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full bg-white hover:bg-white/90">
                  <Search className="h-4 w-4" />
                </Button>
              </div>

              {/* Sale badge */}
              {product.originalPrice && (
                <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-4 py-1 rotate-[-45deg] translate-x-[-30%] translate-y-[40%]">
                  SALE
                </div>
              )}
            </div>

            <h3 className="font-medium mb-2">{product.name}</h3>
            <div className="flex gap-2 items-center">
              <span className={cn("font-medium", product.originalPrice ? "text-red-500" : "text-[#B19B84]")}>
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-2">
              {product.thumbnails.map((thumb, idx) => (
                <button key={idx} className="w-12 h-12 border border-gray-200 p-1 rounded hover:border-[#B19B84]">
                  <Image
                    src={thumb || "/placeholder.svg"}
                    alt={`${product.name} variant ${idx + 1}`}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
