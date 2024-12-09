// import Image from "next/image";

import Hero from "./Hero";
import ItemCard from "./components/ItemCard";
import TopCategories from "./components/TopCat";
export default function Home() {
  return (
    <main>
      <Hero/>
      <ItemCard/>
      <TopCategories/>
    </main>
  )
}
