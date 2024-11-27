import React, { useEffect, useState } from "react";
import "./CommonLayout.css";
import Dashboard from "@assets/svg/dashboard.svg?react";
import Transaction from "@assets/svg/transaction.svg?react";
import Echeck from "@assets/svg/echeck.svg?react";
import Reports from "@assets/svg/reports.svg?react";
import Bank from "@assets/svg/bank.svg?react";
import Payee from "@assets/svg/payee.svg?react";
import Logout from "@assets/svg/logout.svg?react";
import logo from "@assets/images/FusionNav.png";
import { ROUTES } from "@utils/Utils";
import Header from "../Header";

const LayoutHOC = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> => {
  return (props: P) => {
    const [selected, setSelected] = useState<string>(ROUTES.DASHBOARD); // Default selected route
    const [navbarHeight, setNavbarHeight] = useState(0);
    const [isSidebarVisible, setSidebarVisible] = useState(window.innerWidth > 768); // Default based on screen size

    const toggleSidebar = () => setSidebarVisible((prev) => !prev);

    useEffect(() => {
      const handleResize = () => {
        setSidebarVisible(window.innerWidth > 768);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleSelection = (route: string) => {
      setSelected(route);
      // hideSidebar();
    };

    const isSelected = (route: string) => route === selected;

    return (
      <div className="layout-container">
        {/* Sidebar */}
        <nav
          className={`sidebar-custom ${isSidebarVisible ? "visible" : "collapsed"}`}
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
            <img src={logo} alt="Logo" className="nav-logo" />
          </ul>
          <ul className="nav flex-column px-4 mt-6">
            {[
              { icon: <Dashboard />, label: "My Dashboard", href: "#dashboard" },
              { icon: <Transaction />, label: "Transaction History", href: "#transaction-history" },
              { icon:  <Echeck/>, label: "Create E-check", href: "#create-check" },
              { icon:  <Echeck/>, label: "Receive E-check", href: "#create-check" },
              { icon:  <Echeck/>, label: "E-check Drafts", href: "#create-check" },
              { icon: <Reports/>, label: "Reports", href: "#reports" },
              { icon:  <Bank/>, label: "Manage Sponsor Bank", href: "#manage-sponsor-bank" },
              { icon:  <Payee/>, label: "Manage Payee", href: "#manage-payee" },
            ].map(({ icon, label, href }) => (
              <li className="nav-item d-flex align-items-center mb-3" key={label}>
                {icon}
                <a className="nav-link text-white" href={href}>
                  {label}
                </a>
              </li>
            ))}
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
            overflowY: "auto",
            height: `calc(100vh - ${navbarHeight}px)`,
          }}
        >
            <WrappedComponent {...(props as P)} />
          </div>
        </main>
      </div>
    );
  };
};

export default LayoutHOC;
