export default function Products() {
  return (
    <div className="bg-white mt-3">


      <main className="px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">All Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="relative">
              <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">New</div>
              <img
                src="/Image1.png"
                alt="Library Stool Chair"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-700">Library Stool Chair</h3>
              <div className="text-gray-900 font-bold">$20</div>
              <button className="mt-2 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
                Add to Cart
              </button>
            </div>
          </div>


          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="relative">
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Sales</div>
              <img
                src="/Image2.png"
                alt="Library Stool Chair"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-700">Library Stool Chair</h3>
              <div className="text-gray-900 font-bold flex items-center">
                $20
              </div>
              <button className="mt-2 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
                Add to Cart
              </button>
            </div>
          </div>


          <div className="border rounded-lg overflow-hidden shadow-sm">
            <img
              src="/Image3.png"
              alt="Library Stool Chair"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium text-gray-700">Library Stool Chair</h3>
              <div className="text-gray-900 font-bold">$20</div>
              <button className="mt-2 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
                Add to Cart
              </button>
            </div>
          </div>


          <div className="border rounded-lg overflow-hidden shadow-sm">
            <img
              src="/Image4.png"
              alt="Library Stool Chair"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium text-gray-700">Library Stool Chair</h3>
              <div className="text-gray-900 font-bold">$20</div>
              <button className="mt-2 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="relative">
              <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">New</div>
              <img
                src="/ImageTop3.png"
                alt="Library Stool Chair"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-700">Library Stool Chair</h3>
              <div className="text-gray-900 font-bold">$20</div>
              <button className="mt-2 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
                Add to Cart
              </button>
            </div>
          </div>


          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="relative">
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Sales</div>
              <img
                src="/ImageTop2.png"
                alt="Library Stool Chair"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-700">Library Stool Chair</h3>
              <div className="text-gray-900 font-bold flex items-center">
                $20
              </div>
              <button className="mt-2 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
                Add to Cart
              </button>
            </div>
          </div>


          <div className="border rounded-lg overflow-hidden shadow-sm">
            <img
              src="/ImageTop1.png"
              alt="Library Stool Chair"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium text-gray-700">Library Stool Chair</h3>
              <div className="text-gray-900 font-bold">$20</div>
              <button className="mt-2 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
                Add to Cart
              </button>
            </div>
          </div>


          <div className="border rounded-lg overflow-hidden shadow-sm">
            <img
              src="/Image4.png"
              alt="Library Stool Chair"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium text-gray-700">Library Stool Chair</h3>
              <div className="text-gray-900 font-bold">$20</div>
              <button className="mt-2 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}