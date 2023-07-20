import Button from "./Button";
import ctaImg from '../little-lemon-assets/images_assets/restauranfood.jpg'

export default function CTA() {
  return (
    <div id="home">
        <div className="container-fluid page-width">
          <div className="row">
            <div className="col col-sm-6 col-md-8 py-5">
              <div className="row">
                <h1 className="col-12  title-text">Little Lemon</h1>
              </div>
              <div className="row mb-3">
                <h2 className="col subtitle-text">Nashik</h2>
              </div>
              <div className="row mb-5">
                <p className="col description-text">
                  We are a family owned Mediterranean
                  <br />
                  restaurant, focused on traditional
                  <br />
                  recipes served with a modern twist
                </p>
              </div>
              <Button className="book-btn" btnTxt='Reserve a table' to="/reservations" />
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center pt-4">
              <img src={ctaImg} className="cta-img rounded-5 w-100" alt="restaurant food" />
            </div>
          </div>
        </div>
    </div>
  )
}
