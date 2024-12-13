import Link from "next/link";
export default function Hero() {
  return (
    <section className="bg-gray-200 container w-{1321} mx-auto">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12 py-16 space-y-8 md:space-y-0">

        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug">
            Best Furniture Collection For Your Interior.
          </h1>
          <p className="text-gray-500 mt-4">
            Welcome to Chairy
          </p>
          <button className="mt-6 px-6 py-3 text-white bg-teal-500 rounded-lg shadow-md hover:bg-teal-600 transition">
            Shop Now
          </button>
        </div>


        <div className="flex-1 flex justify-center">
          <Link href="/singlePro">
            <img
              src="/modernChair.png"
              alt="Modern Chair"
              className="w-full max-w-sm md:max-w-md object-contain"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
