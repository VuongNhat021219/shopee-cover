import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import SliderStick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/Slider.scss";
import imgSlider1 from "./../images/slider1.png";
import imgSlider2 from "./../images/slider2.jpeg";
import imgSlider3 from "./../images/slider3.jpeg";
import imgSlider4 from "./../images/slider4.jpeg";
import imgSlider5 from "./../images/slider5.jpeg";
import imgSlider6 from "./../images/slider6.jpeg";
import imgSlider7 from "./../images/slider7.png";
import imgSliderRight from "./../images/slider-right1.jpeg";
import imgSliderRight2 from "./../images/slider-right2.jpeg";

import SliderFooter from "../components/SliderFooter";

function Slider() {
  const dataSlider = [
    {
      id: 1,
      image: "https://cf.shopee.vn/file/c7a2e1ae720f9704f92f72c9ef1a494a_xhdpi",
      title: "Miễn Phí Vận Chuyển",
      linkUrl: "http://dfsd",
    },
    {
      id: 2,
      image:
        "https://cf.shopee.vn/file/vn-50009109-f6c34d719c3e4d33857371458e7a7059_xhdpi",
      title: "Voucher Giảm Đến 200.000Đ",
      linkUrl: "http://dfsd",
    },
    {
      id: 3,
      image:
        "https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi",
      title: "Mã Giảm Giá",
      linkUrl: "http://dfsd",
    },
    {
      id: 4,
      image: "https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi",
      title: "Thẻ Điện Thoại",
      linkUrl: "http://dfsd",
    },
    {
      id: 5,
      image: "https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi",
      title: "Hàng Quốc Tế",
      linkUrl: "http://dfsd",
    },
    {
      id: 6,
      image:
        "https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi",
      title: "Hàng Hiệu Outlet Giảm 50%",
      linkUrl: "http://dfsd",
    },
    {
      id: 7,
      image:
        "https://cf.shopee.vn/file/vn-50009109-1975fb1af4ae3c22878d04f6f440b6f9_xhdpi",
      title: "Giảm Sốc",
      linkUrl: "http://dfsd",
    },
    {
      id: 8,
      image: "https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi",
      title: "Gì Cũng Rẻ",
      linkUrl: "http://dfsd",
    },
  ];

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="slider">
        <Container>
          <Row>
            <Col xs={12} md={8} style={{ paddingRight: "4px" }}>
              <div className="container-slick">
                <SliderStick {...settings}>
                  <div>
                    <img src={imgSlider1} alt="Ảnh Slider" />
                  </div>
                  <div>
                    <img src={imgSlider2} alt="Ảnh Slider" />
                  </div>
                  <div>
                    <img src={imgSlider3} alt="Ảnh Slider" />
                  </div>
                  <div>
                    <img src={imgSlider4} alt="Ảnh Slider" />
                  </div>
                  <div>
                    <img src={imgSlider5} alt="Ảnh Slider" />
                  </div>
                  <div>
                    <img src={imgSlider6} alt="Ảnh Slider" />
                  </div>
                  <div>
                    <img src={imgSlider7} alt="Ảnh Slider" />
                  </div>
                </SliderStick>
              </div>
            </Col>
            <Col xs={6} md={4} style={{ padding: "0px" }}>
              <div className="imgSlider-right">
                <img src={imgSliderRight} />
              </div>
              <div className="imgSlider-right">
                <img src={imgSliderRight2} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col className="slider-list">
            <SliderFooter dataSlider={dataSlider} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Slider;
