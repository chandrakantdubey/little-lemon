export default function MenuCard(data) {
  return (
    <div className="menu-card card col-10 col-sm-6 col-md-4 mb-3 py-3">
        <div className="card-img-top">
            <img className="w-100 rounded-2" src={data.imgUrl} alt={data.title} />
        </div>
        <div className="card-body">
            <h5 className="card-title d-flex justify-content-between">
                {data.title}
                <span className="text-warning">{data.price}</span>
            </h5>
            <p className="card-text">{data.description}</p>
            <p className="card-text"></p>
        </div>
        <h5>🛵 Book your order!</h5>
    </div>
  )
}
