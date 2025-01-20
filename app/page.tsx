import Hero from "./components/Hero";
import ItemCards from "./components/ItemCards";
import TopCategories from "./components/TopCat";
export default function RootLayout({ children }: { children: React.ReactNode }) {
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
