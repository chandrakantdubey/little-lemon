import CallToAction from './CallToAction'
import Specials from './Specials'
import Testimonials from './Testimonials'
import About from './About'


export default function Homepage() {

  return (
    <main className='container-lg justify-content-center' id='home'>
      <CallToAction />
      <Specials />
      <Testimonials />
      <About />
    </main>
  )
}
