"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown, ShoppingCart, User, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import logo from "@/app/assets/logo.png"
import Image from "next/image"

const furniture = [
    { title: "Bamboo Chair", href: "#" },
    { title: "Dinning Table", href: "#" },
    { title: "Fancy Table", href: "#" },
    { title: "Single Sofa", href: "#" },
    { title: "Teak Tea Table", href: "#" },
]

const nightLamps = [
    { title: "Decor LED Light", href: "#" },
    { title: "Trendy Light", href: "#" },
    { title: "Metal Wall Light", href: "#" },
    { title: "Steel Wall Light", href: "#" },
    { title: "Hanging Light", href: "#" },
]

const flowerVase = [
    { title: "Ceramic Vase", href: "#" },
    { title: "Flower Pot", href: "#" },
    { title: "Metal Flower Vase", href: "#" },
    { title: "Glass Flower Vase", href: "#" },
    { title: "Terracotta Flower Vase", href: "#" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-lg">
            <div className="container mx-auto flex h-20 items-center justify-between px-6">
                <div>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="mr-6 px-0 lg:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] pr-0">
                            <MobileNav />
                        </SheetContent>
                    </Sheet>
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <Image src={logo} alt="Tatvahomeware" width={40} height={40} />
                        <span className="text-xl font-bold">Tatvahomeware</span>
                    </Link>
                </div>
                <div className="flex justify-center w-full">
                    <NavigationMenu className="hidden lg:flex">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid w-[800px] grid-cols-3 gap-3 p-4">
                                        <div className="space-y-3">
                                            <h4 className="font-medium leading-none">FURNITURE</h4>
                                            <ul className="space-y-2">
                                                {furniture.map((item) => (
                                                    <li key={item.title}>
                                                        <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="font-medium leading-none">NIGHT LAMPS</h4>
                                            <ul className="space-y-2">
                                                {nightLamps.map((item) => (
                                                    <li key={item.title}>
                                                        <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="font-medium leading-none">FLOWER VASE</h4>
                                            <ul className="space-y-2">
                                                {flowerVase.map((item) => (
                                                    <li key={item.title}>
                                                        <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/blog" legacyBehavior passHref>
                                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                        Blog
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-3 p-4">
                                        <li>
                                            <Link
                                                href="#"
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                            >
                                                Contact
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                            >
                                                FAQ
                                            </Link>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="ml-auto flex items-center space-x-4">
                    <Button variant="ghost" className="flex items-center gap-1">
                        INR <ChevronDown className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <User className="h-5 w-5" />
                        <span className="sr-only">Account</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="sr-only">Shopping cart</span>
                    </Button>
                </div>
            </div>
        </header>
    )
}

function MobileNav() {
    return (
        <div className="grid gap-4 py-4">
            <Link href="/" className="text-sm font-medium">
                Home
            </Link>
            <div className="grid gap-2">
                <div className="font-medium">Shop</div>
                <div className="pl-4 text-sm text-muted-foreground">
                    <div className="mb-4">
                        <div className="mb-2 font-medium text-foreground">FURNITURE</div>
                        {furniture.map((item) => (
                            <Link key={item.title} href={item.href} className="block py-2">
                                {item.title}
                            </Link>
                        ))}
                    </div>
                    <div className="mb-4">
                        <div className="mb-2 font-medium text-foreground">NIGHT LAMPS</div>
                        {nightLamps.map((item) => (
                            <Link key={item.title} href={item.href} className="block py-2">
                                {item.title}
                            </Link>
                        ))}
                    </div>
                    <div className="mb-4">
                        <div className="mb-2 font-medium text-foreground">FLOWER VASE</div>
                        {flowerVase.map((item) => (
                            <Link key={item.title} href={item.href} className="block py-2">
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Link href="/blog" className="text-sm font-medium">
                Blog
            </Link>
            <div className="grid gap-2">
                <div className="font-medium">Pages</div>
                <div className="pl-4 text-sm text-muted-foreground">
                    <Link href="#" className="block py-2">
                        About Us
                    </Link>
                    <Link href="#" className="block py-2">
                        Contact
                    </Link>
                    <Link href="#" className="block py-2">
                        FAQ
                    </Link>
                </div>
            </div>
        </div>
    )
}

