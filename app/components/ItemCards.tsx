"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

export default function ItemCards() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
        *[_type == "product"] {
          _id,
          name,
          price,
          condition,
          image {
            asset -> {
              url
            }
          }
        }
      `;
      try {
        const result = await client.fetch(query);
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center mt-6">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center mt-6 text-red-500">Failed to load products. Please try again later.</p>;
  }

  return (
    <div className="bg-white mt-3">
      <main className="px-6 py-8">
        <h2 className="container mx-auto text-2xl font-bold text-gray-800 mb-6">
          All Products
        </h2>
        <div className="grid grid-cols-1 container mx-auto md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              <div className="relative">
                {/* Display condition badge */}
                {product.condition === "New" ? (
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    New
                  </div>
                ) : (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Used
                  </div>
                )}

                {/* Link to dynamic product page */}
                <Link href={`/${product._id}`}>
                  <Image
                    src={product.image?.asset?.url || "/placeholder.png"}
                    alt={product.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover cursor-pointer"
                  />
                </Link>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-700">{product.name}</h3>
                <div className="text-gray-900 font-bold">${product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
