export default function MenuCard(special) {
  return (
    <div className="menu-card card" style={{width: "260px"}}>
      <img src={special.imgUrl} className="card-img-top specials-img w-100" alt={special.title} />
      <div className="card-body">
        <h2 className="card-title d-flex justify-content-between">
          <span>{special.title}</span>
          <span className="price">{special.price}</span>
        </h2>
        <p className="para-text">{special.description}</p>
        <h4>Order a delivery 🛵</h4>
      </div>
    </div>
  )
}
