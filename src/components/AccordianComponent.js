import React, { useState } from "react";
import Badge from "./Badge";
function AccordionComponent({ name, data, count }) {

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${name}`}
            aria-expanded="false"
            aria-controls={name}
          >
            {name}
            <span className="accordionBadge">
              {" "}
              <Badge count={count} colour={"black"} />
            </span>
          </button>
        </h2>
        <div
          id={name}
          className={`accordion-collapse collapse `}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">{data}</div>
        </div>
      </div>
    </div>
  );
}
export default AccordionComponent;
