import CTA from "./CTA";
import Testimonials from "./Testimonials";
import Specials from "./Specials";
import About from "./About";

export default function Home() {
  return (
    <main>
      <CTA />
      <Specials />
      <Testimonials />
      <About />
    </main>
  )
}
