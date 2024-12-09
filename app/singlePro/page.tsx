
export default function ProductCard() {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div>
            <img
              src="/Image1.png" 
              alt="Library Stool Chair"
              className="rounded-lg shadow-lg"
            />
          </div>
  
        
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-gray-800">Library Stool Chair</h1>
            <p className="text-lg text-teal-500 mt-2">$20.00 USD</p>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit
              amet, consectetur adipiscing.
            </p>
            
            <button className="mt-6 px-6 py-2 bg-teal-500 text-white font-semibold rounded-md shadow-md hover:bg-teal-600 focus:outline-none">
              <span className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h18l-1 9H4L3 3zm1 9h16a2 2 0 002-2H4a2 2 0 00-2 2h2zm3 4a1 1 0 011-1h10a1 1 0 011 1v3a1 1 0 01-1 1H7a1 1 0 01-1-1v-3zm5-1a1 1 0 110 2 1 1 0 010-2z"
                  />
                </svg>
                Add To Cart
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  