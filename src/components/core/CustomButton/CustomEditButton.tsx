import "./CustomButton.css";

interface CustomButtonProps {
  onSelect: () => void;
  title: string;
  icon?: React.ReactNode;
  containFill?:boolean;
  buttonDisabled?:boolean;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { onSelect, title, icon, containFill=false, buttonDisabled=false } = props;

  return (
    // <div>
      <div className={`${buttonDisabled ? 'edit-disable-button' : 'edit-button' } ${containFill ? 'containFillButoom' : ''} `} onClick={() => onSelect()}>
        {/* Icon */}
        {icon && (
          <div className="edit-button-icon">
            <span className="edit-button-plus">{icon}</span>
          </div>
        )}

        {/* Text */}
        <span className="edit-button-text">{title}</span>
      </div>
    // </div>
  );
};

export default CustomButton;