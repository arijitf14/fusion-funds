import Modal from "react-bootstrap/Modal";
import { ReactNode } from "react";

export enum ModalSize {
  sm = "sm",
  lg = "lg",
  xl = "xl",
}

interface ModalProps {
  size?: ModalSize; // Modal size can be "sm", "lg", or "xl"
  show: boolean; // Boolean to control modal visibility
  onHide: () => void; // Callback when modal is closed
  width?: string; // Custom width for the modal
  children: ReactNode; // Children content for the modal body
}

export const MyCustomModal: React.FC<ModalProps> = ({
  size = ModalSize.lg, // Default size is "lg"
  show,
  onHide,
  width,
  children,
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      // size={size}
      aria-labelledby="example-custom-modal-styling-title"
      centered
      dialogClassName="modal-70w"
      style={width ? { width } : undefined} // Apply custom width if provided
    >
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};
