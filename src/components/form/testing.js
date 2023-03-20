import React, { Component } from "react";
import PropTypes from "prop-types";

class Testing extends Component {
  render() {
    const { educationArray } = this.props;

    if (!educationArray || !educationArray.length) {
      return (
        <div>
          <p>Array isnt thing</p>
        </div>
      );
    }

    return (
      <div>
        <h3>Testing Component</h3>
        <ul>
          {educationArray.map((item) => {
            return (
              <li key={item.id}>
                {item.school}, {item.startYear} - {item.endYear}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Testing.propTypes = {
  educationArray: PropTypes.array.isRequired,
};

export default Testing;
