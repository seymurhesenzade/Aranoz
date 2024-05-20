import "../HomePage/index.scss";
const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="carousel">
          <div
            id="carouselExampleControlsNoTouching"
            class="carousel slide"
            data-bs-touch="false"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  style={{ height: "600px" }}
                  src="https://themewagon.github.io/aranoz/img/banner_img.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  style={{ height: "600px" }}
                  src="https://divanlar.com/wp-content/uploads/2022/09/54.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                deihwi
                <img
                  style={{ height: "600px" }}
                  src="https://divanlar.com/wp-content/uploads/2022/09/55.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <section id="category">
        <h1>Featured Category</h1>
        <div className="container">
          <div style={{ display: "inline-block" }} className="image-text1">
            <div className="text">
              <p>Premium Quality</p>
              <h5>Latest foam Sofa</h5>
            </div>
            <img
              src="https://themewagon.github.io/aranoz/img/feature/feature_1.png"
              alt=""
            />
          </div>
          <div className="image-text2">
            <div style={{ display: "inline-block" }} className="image-text2">
              <div className="text">
                <p>Premium Quality</p>
                <h5>Latest foam Sofa</h5>
              </div>
              <img
                src="https://themewagon.github.io/aranoz/img/feature/feature_1.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="image-text3">
            <div className="text">
              <p>Premium Quality</p>
              <h5>Latest foam Sofa</h5>
              <img
                src="https://themewagon.github.io/aranoz/img/feature/feature_3.png"
                alt=""
              />
            </div>
          </div>
          <div className="image-text4">
            <p>Premium Quality</p>
            <h5>Latest foam Sofa</h5>
            <img
              style={{ width: "460px" }}
              src="https://themewagon.github.io/aranoz/img/feature/feature_4.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section id="awesome">
        

      </section>
    </>
  );
};

export default HomePage;
