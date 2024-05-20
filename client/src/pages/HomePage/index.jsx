

const HomePage = () => {
  return (
    <>
    <div className="container">
      <div className="carousel">
      <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{height:"600px"}} src="https://themewagon.github.io/aranoz/img/banner_img.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:"600px"}} src="https://divanlar.com/wp-content/uploads/2022/09/54.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      deihwi
      <img style={{height:"600px"}} src="https://divanlar.com/wp-content/uploads/2022/09/55.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
    </div>
    </>
  )
}

export default HomePage