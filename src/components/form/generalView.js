import React, { useState } from "react";
import PropTypes from "prop-types";

const GeneralView = (props) => {
  const { generalArray, removeItemGeneral } = props;

  if (!generalArray || !generalArray.length) {
    return null;
  }

  const onTrigger = (id) => {
    removeItemGeneral(id);
  };

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div>
      {generalArray.map((items) => {
        return (
          <div
            key={items.id}
            id="general-div"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div id="general">
              <div id="heading">
                <h1 id="name-heading">{items.name}</h1>
                <h2 id="occupation-heading">{items.occupation}</h2>
              </div>
              <div id="general-details">
                <div className="detail-items">{items.phone}</div>
                <div className="detail-items">{items.email}</div>
                <div className="detail-items">{items.address}</div>
              </div>
            </div>
            <div id="general-description">
              <div id="description-item">
                <p>{items.description}</p>
              </div>
              {isHovering && (
                <button onClick={() => onTrigger(items.id)}>Remove</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

GeneralView.propTypes = {
  generalArray: PropTypes.array.isRequired,
  removeItemGeneral: PropTypes.func.isRequired,
};

export default GeneralView;
