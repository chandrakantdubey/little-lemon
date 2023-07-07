export default function ReviewCard(data) {
  return (
    <div className="col-7 col-sm-3 mb-3 mx-1 review-card card text-center">
        <div className="card-header">
            {data.rating}
        </div>
        <div className="card-body d-flex align-items-center">
            <div className="review-img-container">
                <img src={data.imgUrl} alt={data.user} className="w-100" />
            </div>
            <h5 className="card-title w-50">{data.user}</h5>
        </div>
        <p className="card-text mb-3">{data.review}</p>
    </div>
  )
}
