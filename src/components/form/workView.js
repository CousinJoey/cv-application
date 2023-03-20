import React, { useState } from "react";
import PropTypes from "prop-types";

const WorkView = (props) => {
  const { workArray, removeItemWork } = props;

  if (!workArray || !workArray.length) {
    return null;
  }

  const onTrigger = (id) => {
    removeItemWork(id);
  };

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div id="work">
      {workArray.map((items) => {
        return (
          <div
            key={items.id}
            id="jobs"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div id="job-header">
              <h4 className="company-title-header">{items.jobTitle}</h4>
              <div id="job-details">
                {items.company} |{" "}
                <span className="job-details-UI">
                  {items.startYear} - {items.endYear}
                </span>
              </div>
            </div>
            <div id="job-description">
              <p>{items.tasks}</p>
            </div>
            {isHovering && (
              <button onClick={() => onTrigger(items.id)}>Remove</button>
            )}
          </div>
        );
      })}
    </div>
  );
};

WorkView.propTypes = {
  workArray: PropTypes.array.isRequired,
  removeItemWork: PropTypes.func.isRequired,
};

export default WorkView;
