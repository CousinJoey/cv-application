import React, { Component } from "react";
import "../style.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="header">
        <p>CV Application Maker</p>
      </div>
    );
  }
}

export default Header;
