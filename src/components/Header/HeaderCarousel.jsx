import header_slide_1 from '../../assets/images/header_slide_1.jpg'
import header_slide_2 from '../../assets/images/header_slide_2.jpg'
import header_slide_3 from '../../assets/images/header_slide_3.jpg'

function Carousel() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={header_slide_1} className="d-block w-100" alt="..."></img>
        </div>
        <div className="carousel-item">
          <img src={header_slide_2} className="d-block w-100" alt="..."></img>
        </div>
        <div className="carousel-item">
          <img src={header_slide_3} className="d-block w-100" alt="..."></img>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel
