import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style/Footer.scss";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <div className="footer-top">
              <div className="footer-top-text">
                <Link to="/">
                  <span>CHÍNH SÁCH BẢO MẬT</span>
                </Link>
                |{" "}
                <Link to="/">
                  <span>QUY CHẾ HOẠT ĐỘNG</span>
                </Link>{" "}
                |
                <Link to="/">
                  <span>CHÍNH SÁCH VẬN CHUYỂN</span>
                </Link>{" "}
                |{" "}
                <Link to="/">
                  <span>CHÍNH SÁCH TRẢ HÀNG HOÀN TIỀN</span>
                </Link>
              </div>
            </div>
            <div className="footer-center">
              <div className="footer-center-img">
                <img
                  src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoCCDV.png"
                  alt="Anh Shoppee"
                />
                <img
                  src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoCCDV.png"
                  alt="Anh Shoppee"
                />
                <img
                  src="https://dreamagency.vn/wp-content/uploads/2022/08/Logo-Shopee-Mall-3.jpg"
                  alt="Anh Shoppee"
                />
              </div>
              <p>
                Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu
                Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt
                Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
                Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại
                liên hệ: 024 73081221 (ext 4678) Mã số doanh nghiệp: 0106773786
                do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015 ©
                2015 - Bản quyền thuộc về Công ty TNHH Shopee
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
