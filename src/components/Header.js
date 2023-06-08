import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsBell, BsInstagram } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiEarthFill } from "react-icons/ri";
import { FiChevronDown } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import Image from "react-bootstrap/Image";
import logoShopeeMall from "../images/logo-shopeeMall.gif";
import ShopeeSearchBar from "./ShopeeSearchBar";

const Header = () => {
  return (
    <header className="header-main">
      <Container>
        <div className="header-main-top">
          <Row>
            <Col>
              <div className="header-main-top-left text-header-top-main ">
                <ul>
                  <li>
                    <Link to="/">Trang chủ Shopee</Link>
                    <span>|</span>
                  </li>
                  <li>
                    <Link to="/">Trở thành người bán hàng Shopee</Link>
                    <span>|</span>
                  </li>

                  <li>
                    <Link to="/">Tải ứng dụng Shopee</Link>
                    <span>|</span>
                  </li>
                  <li>
                    <Link to="/">
                      Kết Nối
                      <FaFacebook style={{ marginLeft: "4px" }} />
                      <BsInstagram style={{ marginLeft: "4px" }} />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col>
              <div className="header-main-top-right text-header-top-main ">
                <ul>
                  <li>
                    <Link to="/">
                      <BsBell />
                      Thông báo
                    </Link>
                    <span>|</span>
                  </li>
                  <li>
                    <Link to="/">
                      <AiOutlineQuestionCircle />
                      Hỗ trợ
                    </Link>
                    <span>|</span>
                  </li>
                  <li>
                    <Link to="/">
                      <RiEarthFill />
                      Tiếng Việt
                      <FiChevronDown />
                    </Link>
                    <span>|</span>
                  </li>

                  <li>
                    <Link to="/" style={{ fontWeight: "700" }}>
                      Đăng Ký
                    </Link>
                    <span>|</span>
                  </li>
                  <li>
                    <Link to="/" style={{ fontWeight: "700" }}>
                      Đăng Nhập
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>

        {/* header center */}
        <div className="header-main-center">
          <Row>
            <Col>
              <div className="header-main-center-left">
                <div className="header-logoShopeeMall">
                  <Image src={logoShopeeMall} rounded />
                </div>
              </div>
            </Col>
            <Col>
              <div className="header-main-center-right">
                <div className="shopee-searchBar">
                  <ShopeeSearchBar />
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* header footer */}
      </Container>
    </header>
  );
};

export default Header;
