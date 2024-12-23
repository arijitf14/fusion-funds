import { Close, ConfirmationIcon } from "@assets/svg";
import "./Confirmation.css";
import { useEffect, useState } from "react";

interface ConfirmationProps {
  onHide: () => void;
  onSuccess: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = (props) => {
  const { onHide, onSuccess } = props;
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(timer);
      onSuccess();
    }

    return () => clearInterval(timer);
  }, [countdown, onSuccess]);

  return (
    <div className="text-center">
      <div className="close-icon-container">
        <Close onClick={() => onHide()} />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <ConfirmationIcon />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="merch-holder mt-4">
          <p className="px-4">Your Merchant ID : Rich1234</p>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="mt-4 col-md-8">
          <p className="px-4">
            Thank you for signing up! We’re excited to have you on board.
          </p>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-grid col-md-6">
          <button
            onClick={() => {
              onSuccess();
            }}
            type="submit"
            className="btn btn-primary"
          >
            Okay [{countdown}]
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
