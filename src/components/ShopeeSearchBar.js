import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BiSearchAlt } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import Stack from "react-bootstrap/Stack";

export default function ShopeeSearchBar() {
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Tìm kiếm trong Shopee Mall"
          aria-label="Tìm kiếm trong Shopee Mall"
          aria-describedby="basic-addon2"
        />
        <Stack direction="horizontal">
          <div className="header-search-bar">
            <Button
              className="bt-search"
              variant="outline-secondary"
              id="button-addon2"
            >
              <BiSearchAlt style={{ color: "#fff" }} />
            </Button>
          </div>

          <div className="vr vr-facmen" />

          <FiShoppingCart className="icon-fishoppingss" />
        </Stack>
      </InputGroup>
    </>
  );
}
