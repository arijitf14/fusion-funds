import React from "react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
  isDefaultOpen?: boolean; // Optional, for controlling the default open state
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="accordion" id="accordionExample">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading-${index}`}>
            <button
              className={`accordion-button ${item.isDefaultOpen ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
              aria-expanded={item.isDefaultOpen ? "true" : "false"}
              aria-controls={`collapse-${index}`}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={`collapse-${index}`}
            className={`accordion-collapse collapse ${item.isDefaultOpen ? "show" : ""}`}
            aria-labelledby={`heading-${index}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
