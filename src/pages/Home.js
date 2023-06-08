// Home.js
import React from "react";
import Button from "react-bootstrap/Button";

function TypesExample() {
  return <></>;
}

const Home = () => {
  return (
    <>
      <h1>Chào mừng đến Trang chủ!</h1>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </>
  );
};

export default Home;
