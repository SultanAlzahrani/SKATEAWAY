import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./Logo";
import ShoppingCart from "./ShoppingCart";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function NavBar({ CartCounter }) {
  return (
    <Navbar expand="sm" bg="white" variant="light" className="custom-navbar">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        <Logo />
      </Navbar.Brand>
      <ShoppingCart counter={CartCounter} className="Cart-1" />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-grow-1">
          <Nav.Link as={Link} to="/new" className="custom-end-align nav-link">
            NEW
          </Nav.Link>
          <Nav.Link as={Link} to="/Shoes" className="custom-end-align nav-link">
            Shoes
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Clothing"
            className="custom-end-align nav-link"
          >
            Clothing
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Backpack"
            className="custom-end-align nav-link"
          >
            Backpacks
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Accessories"
            className="custom-end-align nav-link"
          >
            Accessories
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <ShoppingCart counter={CartCounter} className="Cart-2" />
    </Navbar>
  );
}

export default NavBar;
