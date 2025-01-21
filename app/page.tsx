import Hero from "./components/Hero";
import ItemCards from "./components/ItemCards";
import TopCategories from "./components/TopCat";
export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <ItemCards />
        <TopCategories />
      </div>
    </main>
  )
}
