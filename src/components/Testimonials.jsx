import dave from '../little-lemon-assets/reviwers/dave.jpg'
import april from '../little-lemon-assets/reviwers/april.jpg'
import lyle from '../little-lemon-assets/reviwers/lyle.jpg'
import kyra from '../little-lemon-assets/reviwers/kyra.jpg'
import ReviewCard from './ReviewCard'

export default function Testimonials() {

  const data = [
    {
      id: 1,
      rating: "⭐⭐⭐⭐⭐",
      user: "Dave",
      imgUrl: dave,
      review: "I love the bruchetta at the restaurant and love to eat at the restaurant."
    },
    {
      id: 2,
      rating: "⭐⭐⭐⭐",
      user: "April",
      imgUrl: april,
      review: "I love the bruchetta at the restaurant and love to eat at the restaurant."
    },
    {
      id: 3,
      rating: "⭐⭐⭐⭐⭐",
      user: "Kyra",
      imgUrl: kyra,
      review: "I love the bruchetta at the restaurant and love to eat at the restaurant."
    },
    {
      id: 4,
      rating: "⭐⭐⭐⭐",
      user: "Lyle",
      imgUrl: lyle,
      review: "I love the bruchetta at the restaurant and love to eat at the restaurant."
    }
  ]

  return (
    <div id='testimonials' className='py-5'>
      <div className="container page-width">
      <h2 className='testimonial-text text-center text-white fw-bold'>Testimonials</h2>
      <div className="row py-5 justify-content-center">
        {
          data.map(data => <ReviewCard key={data.id} {...data} />)
        }
      </div>
      </div>
    </div>
  )
}
