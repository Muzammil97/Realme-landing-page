const Carousel = () => (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://image01.realme.net/general/20241212/17339677184375522816ea05448759b75ff71ccb7f35a.jpg" className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="https://image01.realme.net/general/20241125/1732502822846997d10f6e07b4df484c81b3f21b49b0e.jpg" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="https://image01.realme.net/general/20241016/1729049579915e7f3d499d6754dd89a30480e54ed937d.jpg" className="d-block w-100" alt="Slide 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
  
  export default Carousel;