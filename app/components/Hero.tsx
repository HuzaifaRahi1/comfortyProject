"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

export default function Hero() {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `
          *[_type == "product"][0] {
            _id,
            name,
            description,
            image {
              asset -> {
                url
              }
            }
          }
        `;
        const result = await client.fetch(query);
        setProduct(result);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);

  if (!product) return <p className="text-center text-gray-500">Loading...</p>;

  const { _id, name, description, image } = product;

  return (
    <section className="bg-gray-200 container mx-auto">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12 py-16 space-y-8 md:space-y-0">

        {/* Text Section */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug">
            {name}
          </h1>
          <p className="text-gray-500 mt-4">{description}</p>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          {/* Use Link to navigate to the dynamic route */}
          <Link href={`/${_id}`}>
            <Image
              src={image?.asset?.url || "/placeholder.png"}  // Fallback to avoid errors
              alt={name}
              width={400}  // Ensure proper optimization
              height={400}
              className="w-full max-w-sm md:max-w-md object-contain cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
