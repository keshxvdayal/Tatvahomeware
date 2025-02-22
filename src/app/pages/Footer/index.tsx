import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Twitter, Instagram } from "lucide-react"
import image from "@/app/assets/image.png"

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Shop Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Shop</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                About Us
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Terms & Conditions
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Products Return
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Wholesale Policy
              </Link>
            </div>
          </div>

          {/* Information Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Information</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Pagination
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Home page
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Contact
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Accessories
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Term of use
              </Link>
            </div>
          </div>

          {/* About Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">About</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Help Center
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Address Store
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Receivers & Amplifiers
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                GalletStore
              </Link>
            </div>
          </div>

          {/* Follow Us Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <span className="mr-2">📞</span> 0123 456 789
              </p>
              <p className="flex items-center text-gray-600">
                <span className="mr-2">📱</span> 0123 456 789
              </p>
              <p className="flex items-center text-gray-600">
                <span className="mr-2">✉️</span> help@engotheme.com
              </p>
              <p className="flex items-center text-gray-600">
                <span className="mr-2">📍</span> 1201 Broadway Suite 600
              </p>
              <div className="flex space-x-3 mt-4">
                <Link href="#" className="p-2 rounded-full border hover:bg-gray-100">
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link href="#" className="p-2 rounded-full border hover:bg-gray-100">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.066 7.08c-.398.343-.922.57-1.466.637.527-.316.931-.817 1.122-1.414-.494.293-1.041.505-1.622.62-.465-.497-1.128-.807-1.862-.807-1.41 0-2.553 1.143-2.553 2.553 0 .2.022.394.065.581-2.122-.107-4.005-1.123-5.264-2.67-.22.378-.346.818-.346 1.287 0 .885.45 1.666 1.134 2.124-.418-.013-.812-.128-1.156-.319v.032c0 1.236.88 2.268 2.045 2.502-.214.058-.439.089-.67.089-.164 0-.323-.016-.478-.046.324 1.014 1.265 1.752 2.38 1.773-.872.684-1.97 1.091-3.164 1.091-.205 0-.408-.012-.608-.035 1.127.722 2.468 1.144 3.907 1.144 4.688 0 7.25-3.883 7.25-7.25 0-.11-.003-.221-.008-.33.498-.36.93-.81 1.272-1.321z" />
                  </svg>
                </Link>
                <Link href="#" className="p-2 rounded-full border hover:bg-gray-100">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018 0-3.878 3.132-7.018 7-7.018s7 3.14 7 7.018c0 3.878-3.132 7.018-7 7.018zm.141-11.018c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  </svg>
                </Link>
                <Link href="#" className="p-2 rounded-full border hover:bg-gray-100">
                  <Instagram className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Newsletters</h3>
            <p className="text-gray-600">Be the first who learns about our great promotions!</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Your email address..." className="flex-1" />
              <Button variant="default" className="bg-black text-white hover:bg-gray-800">
                SUBSCRIBE
              </Button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Image
                src={image}
                alt="Gallet Logo"
                width={100}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <div className="flex items-center gap-2">
              <Image src="/placeholder.svg" alt="Visa" width={40} height={25} />
              <Image src="/placeholder.svg" alt="PayPal" width={40} height={25} />
              <Image src="/placeholder.svg" alt="Mastercard" width={40} height={25} />
              <Image src="/placeholder.svg" alt="Discover" width={40} height={25} />
            </div>
            <div className="text-sm text-gray-600">
              © Copyright 2022 | Tatva Home Ware.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

