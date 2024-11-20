 import { Navbar, Container, Nav } from "react-bootstrap";
import Notification from "@assets/svg/notification.svg?react";
import Profile from "@assets/svg/profile.svg?react";
import Search from "../Search";

const Header = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar className="px-2 pb-0" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Welcome Back, Richard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#search">
                <Search />
              </Nav.Link>
              <Nav.Link className="my-1" href="#notifications">
                <Notification />
              </Nav.Link>
              <Nav.Link href="#profile">
                <Profile />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className="my-2" />
    </div>
  );
};

export default Header;
