import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="">
      <div className="  border-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              src="/LogoIcon.png"
              alt="Logo"
              width={800}
              height={800}
              className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold text-gray-800">Comforty</span>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="../cart" className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-teal-500 hover:shadow-md transition">

              <span >Cart</span>
            </Link>
          </div> 
        </div>
      </div>
      <div>
        <div className="bg-white pl-8 pt-4 pb-4 space-x-6">
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
    </nav>
  );
}
