
export default function Home() {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Top Categories</h1>
        <div className="flex  flex-row gap-4 justify-center">
         
          <div className="border rounded-lg overflow-hidden shadow-md">
            <img
              src="/ImageTop1.png"
              alt="Wing Chair"
              width={800}
              height={800}
              className="w={424} h={424} object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Wing Chair</h2>
              <p className="text-gray-500">3,584 Products</p>
            </div>
          </div>
        
          <div className="border rounded-lg overflow-hidden shadow-md">
            <img
              src="/ImageTop2.png"
              alt="Wooden Chair"
              width={800}
              height={800}
              className="w={424} h={424} object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Wooden Chair</h2>
              <p className="text-gray-500">157 Products</p>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden shadow-md">
            <img
              src="/ImageTop3.png"
              alt="Desk Chair"
              width={800}
              height={800}
              className="w={424} h={424} object-cover"
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
  