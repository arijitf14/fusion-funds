import React, { useState, useEffect, useRef } from "react";
// import { Close } from "@assets/assets";
import { Button } from "react-bootstrap";
import Scrollbars from "react-custom-scrollbars-2";
import "./SidePanel.css"; // Import plain CSS file
import { Close, CloseWhite } from "@assets/svg";
 
interface SidePanelProps {
  children?: React.ReactNode;
  position?: "left" | "right";
  setSidePanelVisibility: (visibility: boolean) => void;
  sidePanelHeading?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  actionButton?: boolean;
  actionButtonText?: string;
  cancelButton?: boolean;
  cancelButtonText?: string;
  saveButtonRef?: React.RefObject<HTMLButtonElement>;
  cancelButtonRef?: React.RefObject<HTMLButtonElement>;
  contentfullHeight?: boolean;
}
 
const SidePanel: React.FC<SidePanelProps> = ({
  children,
  position,
  setSidePanelVisibility,
  sidePanelHeading,
  className,
  size,
  actionButton,
  actionButtonText,
  cancelButton,
  cancelButtonText,
  saveButtonRef,
  cancelButtonRef,
  contentfullHeight,
}) => {
  const [minHeight, setMinHeight] = useState<number>(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const additionalClasses = className ? className.split(" ") : [];
  const [addShowClass, setAddShowClass] = useState(false);
 
  const combinedClasses = [
    "sidePanel",
    position && `sidePanel ${position}`,
    size ? `sidePanel ${size}` : "sidePanel sm",
    addShowClass && "sidePanel show",
    ...additionalClasses,
  ].join(" ");
 
  const handleAction = () => {
    saveButtonRef?.current?.click();
  };
 
  const handleClose = () => {
    cancelButtonRef?.current?.click();
    setAddShowClass(false);
    setTimeout(() => {
      setSidePanelVisibility(false);
    }, 500);
  };
 
  useEffect(() => {
    const handleResize = () => {
      if (headerRef.current && footerRef.current) {
        setMinHeight(
          window.innerHeight -
            (headerRef.current.offsetHeight + footerRef.current.offsetHeight) -
            16
        );
      } else if (headerRef.current && !footerRef.current) {
        setMinHeight(window.innerHeight - headerRef.current.offsetHeight);
      } else {
        setMinHeight(window.innerHeight);
      }
    };
 
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        const isModalOpen =
          document.querySelectorAll(`div[role='dialog']`)?.length > 0;
        if (isModalOpen) return;
        handleClose();
      }
    };
 
    document.addEventListener("keydown", handleKeyDown);
 
    const timeoutId = setTimeout(() => {
      setAddShowClass(true);
      document.body.classList.add("overFlowXhidden");
    }, 1);
 
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timeoutId);
      document.body.classList.remove("overFlowXhidden");
    };
  }, []);
 
  return (
    <>
      <div
        // variant="clear"
        className={`sidePanelOverlay ${addShowClass && "showOverlay"}`}
        onClick={handleClose}
      />
      <div className={combinedClasses}>
        <div className="sidePanelHeader" ref={headerRef}>
          {sidePanelHeading && <span className="sidePanelHeading">{sidePanelHeading}</span>}
          <Button
            variant="clear"
            className="closeButton"
            onClick={handleClose}
          >
            <CloseWhite />
          </Button>
        </div>
        <Scrollbars
          className="sidePanelBody"
          style={{ height: `${minHeight}px` }}
        >
          <div
            className={`sidePanelBodyContent ${
              contentfullHeight ? "h-full" : ""
            }`}
          >
            {children}
          </div>
        </Scrollbars>
        {(cancelButton || actionButton) && (
          <div className="sidePanelFooter" ref={footerRef}>
            {actionButton && (
              <Button
                variant="primary"
                type="button"
                className="w-100"
                onClick={handleAction}
              >
                {actionButtonText || "Submit"}
              </Button>
            )}
            {cancelButton && (
              <Button
                variant="outline-primary"
                type="button"
                className="w-100"
                onClick={handleClose}
              >
                {cancelButtonText || "Cancel"}
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};
 
export default SidePanel;