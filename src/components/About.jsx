import restaurant from '../little-lemon-assets/images_assets/restaurant.jpg'
import restaurantChef from '../little-lemon-assets/images_assets/restaurant chef B.jpg'

export default function About() {
  return (
    <div id='about'>
      <div className="container page-width">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <h1>Little Lemon</h1>
            <h3 className='mb-5'>Chicago</h3>
            <p className='mb-4'>
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
          </div>
          <div className="col-12 col-md-6 ps-5 restaurant-img-container">
            <div className="restaurant">
              <img src={restaurant} alt="restaurant" className='w-100' />
            </div>
            <div className="restaurantChef">
              <img src={restaurantChef} alt="restaurant chef" className='w-100' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
