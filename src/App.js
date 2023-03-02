import React, { Component } from "react";
import EducationData from "./components/education";
import WorkData from "./components/work";
import GeneralData from "./components/general";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <GeneralData />
        <WorkData />
        <EducationData />
      </div>
    );
  }
}

export default App;
