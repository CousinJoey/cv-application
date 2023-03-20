import React, { useState } from "react";
import PropTypes from "prop-types";

const EducationView = (props) => {
  const { educationArray, removeItemEducation } = props;

  if (!educationArray || !educationArray.length) {
    return null;
  }

  const onTrigger = (id) => {
    removeItemEducation(id);
  };

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div id="education">
      {educationArray.map((items) => {
        return (
          <div
            key={items.id}
            id="schooling"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div id="education-header">
              <h4 className="education-title-header">
                {items.degree} | {items.gpa}
              </h4>
              <div id="education-details">
                {items.school} |{" "}
                <span className="education-details-UI">
                  {items.startYear} - {items.endYear}
                </span>
              </div>
            </div>
            <div id="education-description">
              <p>{items.extra}</p>
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

EducationView.propTypes = {
  educationArray: PropTypes.array.isRequired,
  removeItemEducation: PropTypes.func.isRequired,
};

export default EducationView;
