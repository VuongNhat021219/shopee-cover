import React from "react";
import Container from "react-bootstrap/Container";
import ListProList from "./ListProList";
import "../style/ListPro.scss";

function ListPro(props) {
  const dataListProList = [
    {
      id: 1,
      image:
        "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
      title: "Thời Trang Nam",
      linkUrl:
        "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
    },
    {
      id: 2,
      image:
        "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
      title: "Điện Thoại & Phụ Kiện",
      linkUrl: "http://dfsd",
    },
    {
      id: 3,
      image:
        "https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn",
      title: "Thiết Bị Điện Tử",
      linkUrl: "http://dfsd",
    },
    {
      id: 4,
      image:
        "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
      title: "Máy Tính & Laptop",
      linkUrl: "http://dfsd",
    },
    {
      id: 5,
      image:
        "https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn",
      title: "Máy Ảnh & Máy Quay Phim",
      linkUrl: "http://dfsd",
    },
    {
      id: 6,
      image:
        "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn",
      title: "Đồng Hồ",
      linkUrl: "http://dfsd",
    },
    {
      id: 7,
      image:
        "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn",
      title: "Ô Tô & Xe Máy & Xe Đạp",
      linkUrl: "http://dfsd",
    },
    {
      id: 8,
      image:
        "https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de_tn",
      title: "Giày Dép Nam",
      linkUrl: "http://dfsd",
    },

    {
      id: 9,
      image:
        "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn",
      title: "Thiết Bị Điện Gia Dụng",
      linkUrl: "http://dfsd",
    },

    {
      id: 10,
      image:
        "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn",
      title: "Thể Thao & Du Lịch",
      linkUrl: "http://dfsd",
    },
    {
      id: 15,
      image:
        "https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn",
      title: "Máy Ảnh & Máy Quay Phim",
      linkUrl: "http://dfsd",
    },
    {
      id: 16,
      image:
        "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn",
      title: "Đồng Hồ",
      linkUrl: "http://dfsd",
    },
    {
      id: 17,
      image:
        "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn",
      title: "Ô Tô & Xe Máy & Xe Đạp",
      linkUrl: "http://dfsd",
    },
    {
      id: 18,
      image:
        "https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de_tn",
      title: "Giày Dép Nam",
      linkUrl: "http://dfsd",
    },

    {
      id: 19,
      image:
        "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn",
      title: "Thiết Bị Điện Gia Dụng",
      linkUrl: "http://dfsd",
    },

    {
      id: 20,
      image:
        "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn",
      title: "Thể Thao & Du Lịch",
      linkUrl: "http://dfsd",
    },
    {
      id: 11,
      image:
        "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
      title: "Thời Trang Nam",
      linkUrl:
        "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
    },
    {
      id: 12,
      image:
        "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
      title: "Điện Thoại & Phụ Kiện",
      linkUrl: "http://dfsd",
    },
    {
      id: 13,
      image:
        "https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn",
      title: "Thiết Bị Điện Tử",
      linkUrl: "http://dfsd",
    },
    {
      id: 14,
      image:
        "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
      title: "Máy Tính & Laptop",
      linkUrl: "http://dfsd",
    },
  ];
  return (
    <Container>
      <div className="ListPro">
        <div className="ListPro-title">
          <h4>Danh Mục</h4>
        </div>
        <div className="ListPro-content">
          <ListProList dataListProList={dataListProList} />
        </div>
      </div>
    </Container>
  );
}

export default ListPro;
