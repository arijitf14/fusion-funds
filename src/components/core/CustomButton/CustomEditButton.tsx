import "./CustomButton.css";

interface CustomButtonProps {
  onSelect: () => void;
  title: string;
  icon: string;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { onSelect, title, icon } = props;

  return (
    <div>
      <div className="edit-button" onClick={() => onSelect()}>
        {/* Icon */}
        {icon !== "" && (
          <div className="edit-button-icon">
            <span className="edit-button-plus">{icon}</span>
          </div>
        )}

        {/* Text */}
        <span className="edit-button-text">{title}</span>
      </div>
    </div>
  );
};

export default CustomButton;