import React, { useRef, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Search from "../Search";
import "./Header.css";
import { Link } from "react-router-dom";
import { ROUTES } from "@utils/Utils";
import { Menu, Notification, Profile } from "@assets/svg";

interface HeaderProps {
  navbarHeight: number;
  setNavbarHeight: React.Dispatch<React.SetStateAction<number>>;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({
  toggleSidebar,
  navbarHeight,
  setNavbarHeight,
}) => {
  const navbarRef = useRef<HTMLDivElement>(null);

  const updateNavbarHeight = () => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  return (
    <div className="custom-header-nav" ref={navbarRef}>
      <Navbar className="px-2 pb-0" bg="light" expand="lg">
        <Container fluid>
          <div className="d-flex align-items-center">
            {/* Sidebar Toggle Button */}
            <Menu
              className="toggle-sidebar d-md-none"
              onClick={toggleSidebar}
              aria-label="Toggle Sidebar"
            />
            <Navbar.Brand href="#">Welcome Back, Richard</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="navbar-content" />
          <Navbar.Collapse id="navbar-content">
            <Nav className="ms-auto">
              <Nav.Link href="#search">
                <Search />
              </Nav.Link>
              <Nav.Link
                href="#notifications"
                className="d-flex align-items-center"
              >
                <Notification />
              </Nav.Link>
              <Nav.Link as={Link} to={ROUTES.MANAGEPROFILE}>
                <div className="d-flex profile-holder">
                  <Profile />
                  <div className="px-3">
                    <p>Your Merchant ID : Rich1234</p>
                  </div>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
