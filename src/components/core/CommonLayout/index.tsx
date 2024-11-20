import React from "react";
import "./CommonLayout.css"; // Add custom styles if needed
import Dashboard from "@assets/svg/dashboard.svg?react";
import Transaction from "@assets/svg/transaction.svg?react";
import Echeck from "@assets/svg/echeck.svg?react";
import Reports from "@assets/svg/reports.svg?react";
import Bank from "@assets/svg/bank.svg?react";
import Payee from "@assets/svg/payee.svg?react";
import Logout from "@assets/svg/logout.svg?react";

import logo from "@assets/images/FusionNav.png";

// Define a type for the wrapped component's props
type WithLayoutProps = {
  [key: string]: any;
};

const LayoutHOC = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> => {
  return (props: P) => (
    <div className="d-flex flex-column vh-100">
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <nav
          className="text-white p-3 flex-shrink-0"
          style={{ width: "250px", backgroundColor: "#1C2971" }}
        >
          <ul className="nav">
            <img src={logo} alt="Side Graphic" className="nav-logo" />
          </ul>

          <ul className="nav flex-column mt-6">
            <li className="nav-item d-flex align-items-center mb-3">
              <Dashboard /> {/* Assuming Dashboard is a React component */}
              <a className="nav-link text-white" href="#dashboard">
                My Dashboard
              </a>
            </li>

            <li className="nav-item d-flex align-items-center mb-3">
              <Transaction />
              <a className="nav-link text-white" href="#transaction-history">
                Transaction History
              </a>
            </li>
            <li className="nav-item d-flex align-items-center mb-3">
              <Echeck />
              <a className="nav-link text-white" href="#create-check">
                Create E-check
              </a>
            </li>
            <li className="nav-item d-flex align-items-center mb-3">
              <Reports />
              <a className="nav-link text-white" href="#reports">
                Reports
              </a>
            </li>
            <li className="nav-item d-flex align-items-center mb-3">
              <Bank />
              <a className="nav-link text-white" href="#manage-sponsor-bank">
                Manage Sponsor Bank
              </a>
            </li>
            <li className="nav-item d-flex align-items-center mb-3">
              <Payee />
              <a className="nav-link text-white" href="#manage-payee">
                Manage Payee
              </a>
            </li>
            <li className="nav-item d-flex align-items-center mb-3">
              <Reports />
              <a className="nav-link text-white" href="#manage-subscription">
                Manage Subscription
              </a>
            </li>
            <hr style={{ borderTop: "2px solid #2096f3", margin: "20px 0" }} />
            <li className="nav-item d-flex align-items-center mt-auto">
              <Logout />
              <a className="nav-link text-white" href="#logout">
                Log Out
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-grow-1 py-1 bg-light">
          <WrappedComponent {...props} />
        </main>
      </div>
    </div>
  );
};

export default LayoutHOC;
