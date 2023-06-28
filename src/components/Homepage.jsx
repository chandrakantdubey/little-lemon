import Header from './Header'
import CallToAction from './CallToAction'
import Specials from './Specials'
import Testimonials from './Testimonials'
import About from './About'
import Footer from './Footer'


export default function Homepage() {

  return (
    <>
        <Header />
        <main>
            <CallToAction />
            <Specials />
            <Testimonials />
            <About />
        </main>
        <Footer />
    </>
  )
}
