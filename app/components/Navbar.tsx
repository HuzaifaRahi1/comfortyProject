import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="bg-gray-200">
      <nav className="container bg-gray-200 w-auto mx-auto h-[84px]">
        <div className="">
          <div className="flex container justify-between pt-4">
            <div className="flex items-start md:hidden">
              <Sheet>
                <SheetTrigger><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-align-justify"><path d="M3 12h18" /><path d="M3 18h18" /><path d="M3 6h18" /></svg></SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className="flex flex-col space-y-2" >

                      <Link href="/" className="flex flex-row gap-2 space-y-2">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                        </span> Home</Link>
                      <Link href="/" className="flex flex-row gap-2 space-y-2">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-store"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" /></svg>
                        </span> Shop</Link>
                      <Link href="/" className="flex flex-row gap-2 space-y-2">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                        </span>Products</Link>
                      <Link href="/" className="flex flex-row gap-2 space-y-2">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search-x"><path d="m13.5 8.5-5 5" /><path d="m8.5 8.5 5 5" /><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </span> About</Link>
                      <Link href="/" className="flex flex-row gap-2 space-y-2">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-notebook-text"><path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" /><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9.5 8h5" /><path d="M9.5 12H16" /><path d="M9.5 16H14" /></svg>
                        </span> Pages</Link>
                    </SheetTitle>
                    <SheetDescription>

                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            <div className="flex sm:ml-4 md:ml-0 lg:ml-0 xs:ml-0 gap-3">
              <Image
                src="/LogoIcon.png"
                alt="Logo"
                width={800}
                height={800}
                className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-800">Comforty</span>
            </div>
            <Link href="../cart" className="bg-white flex items-center w-28 h-10 gap-3 p-1 border rounded-lg  hover:bg-gray-100 hover:shadow-lg "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </nav>
      <div className="bg-white">
        <div className=" container mx-auto pl-2 pt-4 pb-4 space-x-6">
          <a href="#" className="text-gray-600 hover:text-teal-500">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-teal-500">
            Shop
          </a>
          <a href="../products" className="text-gray-600 hover:text-teal-500">
            Product
          </a>
          <a href="#" className="text-gray-600 hover:text-teal-500">
            Pages
          </a>
          <a href="#" className="text-gray-600 hover:text-teal-500">
            About
          </a>
        </div>
      </div>
    </header>
  );
}
