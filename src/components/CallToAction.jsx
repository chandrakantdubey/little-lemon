import Button from './Button'
import callToActionImg from '../little-lemon-assets/images_assets/restauranfood.jpg'

export default function CallToAction() {
  return (
    <div className="callToAction green-bg white-text">
      <section className='row callToAction py-3 align-items-center layout-width'>
        <div className='col-sm-12 col-md-6 callToAction_content'>
            <h1 className='my-0 title yellow-text'>Little Lemon</h1>
            <h2 className='subtitle my-0'>Chicago</h2>
            <p className='lead-text'>
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <Button btnText="Reserve a Table" />
        </div>
        <div className='col-sm-12 col-md-6 callToAction_img-container'>
            <img
              src={callToActionImg}
              alt='restaurant food callToAction'
              className='img-fluid callToAction_img'
            />
        </div>
      </section>
    </div>
  )
}
