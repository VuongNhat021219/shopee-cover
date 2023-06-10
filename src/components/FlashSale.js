import React from "react";
import "../style/FlashSale.scss";
import Container from "react-bootstrap/Container";
import LogoFlashSale from "../images/logoFlashSale.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import FlashSalePro from "./FlashSalePro";
import Row from "react-bootstrap/Row";
import Countdown from "../fnComponents/CountDown";

function FlashSale(props) {
  const dataFlashSale = [
    {
      id: 1,
      titleImage: "Hình Ảnh",
      image:
        "https://down-vn.img.susercontent.com/file/vn-50009109-8f3774357e16433893ef0a1c98ece982_tn",
      price: "1.000.000",
      progress: 30,
    },
    {
      id: 2,
      titleImage: "Hình Ảnh",
      image:
        "https://down-vn.img.susercontent.com/file/vn-50009109-095dde03a484dca091d7330795428ce4_tn",
      price: "1.000.000",
      progress: 70,
    },
    {
      id: 3,
      titleImage: "Hình Ảnh",
      image:
        "https://down-vn.img.susercontent.com/file/vn-50009109-33611f8af5dea93efcb1613126ed360c_tn",
      price: "1.000.000",
      progress: 80,
    },
    {
      id: 4,
      titleImage: "Hình Ảnh",
      image:
        "https://down-vn.img.susercontent.com/file/vn-50009109-0eb8c3b5f991bb016856ab20b8672e0d_tn",
      price: "1.000.000",
      progress: 90,
    },
    {
      id: 5,
      titleImage: "Hình Ảnh",
      image:
        "https://down-vn.img.susercontent.com/file/vn-50009109-095dde03a484dca091d7330795428ce4_tn",
      price: "1.000.000",
      progress: 80,
    },
    {
      id: 6,
      titleImage: "Hình Ảnh",
      image:
        "https://down-vn.img.susercontent.com/file/vn-50009109-33611f8af5dea93efcb1613126ed360c_tn",
      price: "1.000.000",
      progress: 40,
    },
  ];
  const targetDate = new Date().getTime() + 2 * 60 * 1000; // Thời gian đích: 2 phút từ thời điểm hiện tại
  return (
    <Container>
      <div className="flashSale">
        <div className="flashSale-top">
          <div className="flashSale-top-title">
            <div className="flashSale-top-title-img">
              <img src={LogoFlashSale} alt="Logo Flash Sale" />
            </div>
            <p className="flashSale-top-countdown">
              <Countdown targetDate={targetDate} />
            </p>
          </div>
          <div className="flashSale-top-text">
            <Link to="/">
              {" "}
              <p>
                Xem tất cả{" "}
                <span>
                  <IoIosArrowForward />
                </span>
              </p>
            </Link>
          </div>
        </div>
        <div className="flashSale-content">
          <Row>
            <FlashSalePro dataFlashSale={dataFlashSale} />
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default FlashSale;
