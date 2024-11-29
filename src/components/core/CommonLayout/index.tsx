import React, { useEffect, useState } from "react";
import "./CommonLayout.css";
import { ROUTES } from "@utils/Utils";
import Header from "../Header";
import { NavLink, useLocation } from "react-router-dom";
import { Bank, Dashboard, Echeck, Logout, Payee, Reports, Subscription, Transaction } from "@assets/svg";
import { FusionNav } from "@assets/images";

const LayoutHOC = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> => {
  return (props: P) => {
    const [navbarHeight, setNavbarHeight] = useState(0);
    const [isSidebarVisible, setSidebarVisible] = useState(
      window.innerWidth > 768
    ); // Default based on screen size
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const location = useLocation();

    const sideRoutes = [
      {
        icon: <Dashboard />,
        label: "My Dashboard",
        href: `${ROUTES.DASHBOARD}`,
      },
      {
        icon: <Transaction />,
        label: "Transaction History",
        href: `${ROUTES.TRANSACTION}`,
      },
      {
        icon: <Echeck />,
        label: "Create E-check",
        href: `${ROUTES.CREATECHECK}`,
      },
      {
        icon: <Echeck />,
        label: "Receive E-check",
        href: `${ROUTES.RECEIVECHECK}`,
      },
      {
        icon: <Echeck />,
        label: "E-check Drafts",
        href: `${ROUTES.CHECKDRAFT}`,
      },
      { icon: <Reports />, label: "Reports", href: `${ROUTES.REPORTS}` },
      {
        icon: <Bank />,
        label: "Manage Bank Account",
        href: `${ROUTES.MANAGEBANK}`,
      },
      { icon: <Payee />, label: "Manage Payee", href: `${ROUTES.MANAGEPAYEE}` },
      {
        icon: <Subscription />,
        label: "Manage Subscription",
        href: `${ROUTES.MANAGESUBSCRIPTION}`,
      },
    ];

    const toggleSidebar = () => setSidebarVisible((prev) => !prev);

    useEffect(() => {
      const handleResize = () => {
        setSidebarVisible(window.innerWidth > 768);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <div className="layout-container">
        {/* Sidebar */}
        <nav
          className={`sidebar-custom scrollable  ${
            isSidebarVisible ? "visible" : "collapsed"
          }`}
          aria-hidden={!isSidebarVisible}
        >
          <button
            className="toggle-sidebar-cross d-md-none"
            onClick={toggleSidebar}
            aria-label="Close Sidebar"
          >
            ✖
          </button>
          <ul className="nav d-flex justify-content-center">
            <img src={FusionNav} alt="Logo" className="nav-logo" />
          </ul>
          <ul className="nav flex-column px-4 mt-6">
            {sideRoutes.map(({ icon, label, href }) => {
              const isActive = location.pathname === href; // Compare directly with location.pathname
              return (
                <li
                  className={`nav-item d-flex align-items-center mb-3 ${
                    isActive ? "selected" : ""
                  }`}
                  key={label}
                >
                  {icon}
                  <NavLink
                    to={href}
                    // onClick={() => handleSelection(href)}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "selected" : ""}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              );
            })}

            <hr style={{ borderTop: "2px solid #2096f3", margin: "20px 0" }} />
            <li className="nav-item d-flex align-items-center mb-3">
              <Logout />
              <a className="nav-link text-white" href="#logout">
                Log Out
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className={`main-content ${isSidebarVisible ? "" : "collapsed"}`}>
          <Header
            navbarHeight={navbarHeight}
            setNavbarHeight={setNavbarHeight}
            toggleSidebar={toggleSidebar}
          />
          <div
            style={{
              height: `calc(100vh - ${navbarHeight}px)`,
            }}
            className="container-fluid px-4 scrollable"
          >
            <WrappedComponent {...(props as P)} />
          </div>
        </main>
      </div>
    );
  };
};

export default LayoutHOC;
