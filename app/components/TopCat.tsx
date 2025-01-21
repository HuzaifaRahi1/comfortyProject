import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl container mx-auto font-bold mb-6">Top Categories</h1>
      <div className="grid container mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        
        <div className="border rounded-lg overflow-hidden shadow-md">
          <Image
            src="/ImageTop1.png"
            alt="Wing Chair"
            width={424}
            height={424}
            className="object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">Wing Chair</h2>
            <p className="text-gray-500">3,584 Products</p>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden shadow-md">
          <Image
            src="/ImageTop2.png"
            alt="Wooden Chair"
            width={424}
            height={424}
            className="object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">Wooden Chair</h2>
            <p className="text-gray-500">157 Products</p>
          </div>
        </div>
        
        <div className="border rounded-lg overflow-hidden shadow-md">
          <Image
            src="/ImageTop3.png"
            alt="Desk Chair"
            width={424}
            height={424}
            className="object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">Desk Chair</h2>
            <p className="text-gray-500">154 Products</p>
          </div>
        </div>
      </div>
    </div>
  );
}
