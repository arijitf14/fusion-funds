import ConfirmationIcon from "@assets/svg/Confirmation.svg?react";
import CloseIcon from "@assets/svg/close.svg?react";
import "./Confirmation.css";

interface ConfirmationProps {
  onHide: () => void; // Function to close the modal
  onSuccess: () => void; // Function to handle success
}

const Confirmation: React.FC<ConfirmationProps> = (props) => {
  const { onHide, onSuccess } = props;

  return (
    <div className="text-center">
      <div onClick={() => onHide()} className="close-icon-container">
        <CloseIcon />
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
            Okay [5]
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
