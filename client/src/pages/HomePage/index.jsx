import "../HomePage/index.scss";
import { Card } from "antd";
const { Meta } = Card;
import { Col, Divider, Row } from "antd";
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
                  class="d-block w-cover"
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

        <h1>Awesome</h1>
        <div className="card">
          <Row style={{display:"flex", flexWrap:"wrap"}}>
            <Col lassName="gutter-row" span={6} >
            <Card
              hoverable
              style={{
                marginTop: 100,
                marginLeft: 390,
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://i.guim.co.uk/img/media/cffe55802cc18d103c8d0d57344125b259d422d2/0_169_4293_2576/master/4293.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=543d1e25a43f08af38bbd71956299d80"
                />
              }
            >
              <Meta
                title="Andrew Tate"
                description="www.instagram.com"
              />
            </Card>
            </Col>

            <Col lassName="gutter-row" span={6}>
            <Card
              hoverable
              style={{
                marginTop: 100,
                marginLeft: 390,
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-24360,resizemode-75,msid-94421929/news/international/us/who-is-andrew-tate-one-of-the-most-googled-person-in-the-world.jpg"
                />
              }
            >
              <Meta
                title="Andrew Tate"
                description="www.instagram.com"
              />
            </Card>
            </Col>

            <Col lassName="gutter-row" span={6}>
            <Card
              hoverable
              style={{
                marginTop: 100,
                marginLeft: 390,
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fe01128c2-5d6c-11ee-88d6-eacc4268cc5d.jpg?crop=2773%2C1560%2C9%2C22&resize=1200"
                />
              }
            >
              <Meta
                title="Andrew Tate"
                description="www.instagram.com"
              />
            </Card>
            </Col>

          </Row>
        </div>
      </section>
    </>
  );
};

export default HomePage;
