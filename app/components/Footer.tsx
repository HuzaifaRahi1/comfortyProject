// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
         
          <div>
            <div className="flex items-center space-x-2">
              <div className="bg-teal-500 p-2 rounded-full">
                
                <span className="text-white text-2xl font-bold"></span>
              </div>
              <h2 className="text-xl font-bold">Comforty</h2>
            </div>
            <p className="text-gray-600 mt-4">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
            </p>
            
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-teal-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-500">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-500">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Category</h3>
            <ul className="mt-4 space-y-2">
              {['Sofa', 'Armchair', 'Wing Chair', 'Desk Chair', 'Wooden Chair', 'Park Bench'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-teal-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
        
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Support</h3>
            <ul className="mt-4 space-y-2">
              {['Help & Support', 'Terms & Conditions', 'Privacy Policy', 'Help'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-teal-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
        
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Newsletter</h3>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-teal-500"
              />
              <button className="bg-teal-500 text-white px-4 py-2 rounded-r-md hover:bg-teal-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    );
  }
  