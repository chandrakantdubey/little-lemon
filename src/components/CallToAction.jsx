import Button from './Button'
import callToActionImg from '../little-lemon-assets/images_assets/restauranfood.jpg'

export default function CallToAction() {
  return (
    <section className='callToAction'>
        <div className='callToAction--content'>
            <h1 className='callToAction--content_title'>Little Lemon</h1>
            <h4 className='callToAction--content_location'>Chicago</h4>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dolore quis similique voluptates soluta quibusdam, expedita, qui, aut architecto eum totam neque exercitationem sed sit!
            </p>
            <Button btnText="Reserve a Table" />
        </div>
        <div className='callToAction--img'>
            <img src={callToActionImg} alt='restaurant food callToAction' width="500px"/>
        </div>
    </section>
  )
}
