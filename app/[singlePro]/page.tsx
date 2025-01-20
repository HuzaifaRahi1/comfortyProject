"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";

export default function SingleProduct() {
  const [product, setProduct] = useState<any>(null); // State to hold product data
  const router = useRouter(); // Next.js router for route access

  useEffect(() => {
    // Fetch product ID from the current route
    const productId = window.location.pathname.split("/")[1]; // Extract product ID from the URL

    if (!productId) return; // Ensure product ID exists

    // Inline fetch logic for Sanity data
    const query = `
      *[_type == "product" && _id == $id][0] {
        name,
        description,
        image {
          asset -> {
            url
          }
        }
      }
    `;

    client
      .fetch(query, { id: productId }) // Fetch product from Sanity
      .then((result) => setProduct(result)) // Update state with fetched data
      .catch((error) => console.error("Failed to fetch product:", error));
  }, []); // Run only once when the component mounts

  if (!product) {
    // Loading state
    return <p>Loading...</p>;
  }

  const { name, description, image } = product;

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        {/* Product Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={image?.asset?.url}
            alt={name}
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
          <p className="mt-4 text-gray-600">{description}</p>
        </div>
      </div>
    </section>
  );
}
