import "./CustomButton.css";

interface CustomButtonProps {
  onSelect: () => void;
  title: string;
  icon?: React.ReactNode;
  containFill?: boolean;
  buttonDisabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { onSelect, title, icon, containFill = false, buttonDisabled = false } = props;

  console.log("BUTTON DISABLED", buttonDisabled)

  return (
    // <div>
    <button className={`${buttonDisabled ? 'edit-disable-button' : 'edit-button'} ${containFill ? 'containFillButoom' : ''} `}
      onClick={() => !buttonDisabled && onSelect()}
      disabled={buttonDisabled}
    >
      {/* Icon */}
      {icon && (
        <div className="edit-button-icon">
          <span className="edit-button-plus">{icon}</span>
        </div>
      )}

      {/* Text */}
      <span className="edit-button-text">{title}</span>
    </button>
    // </div>
  );
};

export default CustomButton;