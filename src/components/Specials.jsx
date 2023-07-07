import Button from './Button';
import lemonDessert from '../little-lemon-assets/images_assets/lemon dessert.jpg'
import bruchetta from '../little-lemon-assets/images_assets/bruchetta.svg'
import greekSalad from '../little-lemon-assets/images_assets/greek salad.jpg'
import MenuCard from './MenuCard';

const specials = [
    {
      id: 1,
      title: "Greek Salad",
      price: "$12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      imgUrl: greekSalad,
    },
    {
      id: 2,
      title: "Bruchetta",
      price: "$5.99",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      imgUrl: bruchetta,
    },
    {
      id: 3,
      title: "Lemon Dessert",
      price: "$5.00",
      description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      imgUrl: lemonDessert,
    },
]

export default function Specials() {

  return (
    <div id='specials'>
      <div className="container page-width py-4 px-4">
        <div className="row mb-5 justify-content-center">
          <div className="col-12 col-sm-6">
            <h1>Specials</h1>
          </div>
          <div className="col-12 col-sm-6 d-flex justify-content-end align-items-center">
            <Button btnTxt='Book your delight' to='reservations' className='book-btn' />
          </div>
        </div>
        <div className="row justify-content-center">
          {
            specials.map(data => <MenuCard key={data.id} {...data} />)
          }
        </div>
      </div>
    </div>
  )
}
