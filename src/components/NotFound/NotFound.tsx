import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FusionLogo from "@assets/images/FusionLogo.png";
import "./NotFound.css";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { ROUTES } from "@utils/Utils";

const NotFound = () => {
  const token = useSelector((gs: RootState) => gs.authDetails.accessToken);
  return (
    <div className="notFound-container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      {/* Logo and 404 */}
      <div className="gap-2 d-flex flex-column align-items-center justify-content-center mb-4">
        <figure className="responsive-logo">
          <img src={FusionLogo} alt="Fusion Logo" />
        </figure>
        <h1 className="lh-1 fw-bold text-white m-0">404</h1>
      </div>

      {/* Text and Button */}
      <div>
        <h2 className="display-1 text-white  fw-bold text-medium text-uppercase">
          Page not Found
        </h2>
        <p className="fs-3 text-white">The requested URL was not found.</p>
        <Button
          type="button"
          variant="primary"
          size="lg"
          className="rounded-pill mt-3"
        >
          <Link to={token ? ROUTES.DASHBOARD : "/"} className="text-white text-decoration-none">
            {token ? 'Go to Dashboard' : 'Go to Login'}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
