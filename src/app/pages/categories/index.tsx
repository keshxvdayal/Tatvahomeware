import Image from "next/image";
import React from "react";
import logo from "@/app/assets/image.png"
import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { log } from "console";

// const categories = [
//   { name: "Furniture", image: logo },
//   { name: "Lighting", image: logo },
//   { name: "House Hold", image: logo },
//   { name: "Home Decor", image: logo },
//   { name: "Planters", image: logo },
//   { name: "Clocks", image:logo },
// ];

const Categories = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-sm font-semibold text-gray-600 uppercase">
                    Our Collections
                </h3>
                <h2 className="text-3xl font-bold mt-2">Hot Categories in This Week</h2>
            </div>
            <div className="grid grid-cols-1 md:p-24 md:grid-cols-4 gap-6">
                {/* Hero Section - Spans 2 columns */}
                
                    <Card className="bg-gray-900/60 backdrop-blur-sm  overflow-hidden relative">
                        <Image
                            src={logo}
                            alt="Hackathon Character"
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                        />
                        
                    </Card>

                    {/* Countdown Timer */}
                    <Card className="bg-gray-900/60 backdrop-blur-sm  p-2 flex flex-col justify-center text-center">
                    <Image
                            src={logo}
                            alt="Hackathon Character"
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                        />
                        
                    </Card>
                    <div className="col-span-2">
                    {/* Prize Pool */}
                    <Card className="bg-gray-900/6  backdrop-blur-sm flex flex-col justify-center text-center">
                    <Image
                            src={logo}
                            alt="Hackathon Character"
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                        />
                        
                    </Card>
                    </div>
                    <div className="col-span-2">
                    {/* Registrations */}
                    <Card className="bg-gray-900/60  backdrop-blur-sm p-6 flex flex-col justify-center text-center">
                    <Image
                            src={logo}
                            alt="Hackathon Character"
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                        />
                        
                    </Card>
                    </div>

                    {/* Location */}
                    <Card className="bg-gray-900/60 backdrop-blur-sm  p-6 flex flex-col justify-center text-center">
                    <Image
                            src={logo}
                            alt="Hackathon Character"
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                        />
                        
                    </Card>

                    {/* Organized By */}
                    <Card className="bg-gray-900/60 backdrop-blur-sm p-6   flex flex-col justify-center text-center">
                    <Image
                            src={logo}
                            alt="Hackathon Character"
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                        />
                        
                    </Card>
            </div>
        </div>
    );
};

export default Categories;
