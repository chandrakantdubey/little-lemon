import Button from './Button';
import MenuCard from "./MenuCard"
import lemmonDessert from '../little-lemon-assets/images_assets/lemon dessert.jpg'
import bruchetta from '../little-lemon-assets/images_assets/bruchetta.svg'
import greekSalad from '../little-lemon-assets/images_assets/greek salad.jpg'

function Specials() {

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
      imgUrl: lemmonDessert,
    },
  ]

  return (
    <div className="layout-width">
      <div className="row specials py-5">
      <div className="heading d-flex justify-content-between align-items-center">
        <h2 className="">This weeks specials!</h2>
        <Button btnText="Online Menu" />
      </div>
      <div className="d-flex flex-wrap align-items-center py-4 justify-content-between gx-2">
        {specials.map(special => <MenuCard key={special.id} {...special} />)}
      </div>
      </div>
    </div>
  )
}

export default Specials