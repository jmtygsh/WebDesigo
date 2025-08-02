import { Header } from "@/components/Header";
import { Homepage } from "@/(pages)/Homepage"
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Homepage />
      <Footer />
    </div>
  )
}
