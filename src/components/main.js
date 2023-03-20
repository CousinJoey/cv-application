import React, { Component } from "react";
import Education from "./form/education";
import EducationView from "./form/educationView";
import General from "./form/general";
import GeneralView from "./form/generalView";
import Work from "./form/work";
import WorkView from "./form/workView";
import "../style.css";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educationArray: [],
      generalArray: [],
      workArray: [],
    };
  }

  addItemGeneral = (childData) => {
    let generalItem = childData;
    this.setState((prevState) => {
      const generalArray = [...prevState.generalArray, generalItem];
      return { generalArray };
    });
  };

  removeItemGeneral = (childData) => {
    this.setState((prevState) => {
      const generalArray = prevState.generalArray.filter(
        (item) => item.id !== childData
      );
      return { generalArray };
    });
  };

  addItemEducation = (childData) => {
    let educationItem = childData;
    this.setState((prevState) => {
      const educationArray = [...prevState.educationArray, educationItem];
      return { educationArray };
    });
  };

  removeItemEducation = (childData) => {
    this.setState((prevState) => {
      const educationArray = prevState.educationArray.filter(
        (item) => item.id !== childData
      );
      return { educationArray };
    });
  };

  addItemWork = (childData) => {
    let workItem = childData;
    this.setState((prevState) => {
      const workArray = [...prevState.workArray, workItem];
      return { workArray };
    });
  };

  removeItemWork = (childData) => {
    this.setState((prevState) => {
      const workArray = prevState.workArray.filter(
        (item) => item.id !== childData
      );
      return { workArray };
    });
  };

  render() {
    const { educationArray, generalArray, workArray } = this.state;

    return (
      <div id="main">
        <div className="left">
          {generalArray.length === 1 ? (
            <div>General ✔</div>
          ) : (
            <General addItemGeneral={this.addItemGeneral} />
          )}
          {workArray.length === 3 ? (
            <div>Work Experience ✔</div>
          ) : (
            <Work addItemWork={this.addItemWork} />
          )}
          {educationArray.length === 2 ? (
            <div>Education ✔</div>
          ) : (
            <Education addItemEducation={this.addItemEducation} />
          )}
        </div>
        <div className="right">
          <div id="cv-view">
            <GeneralView
              removeItemGeneral={this.removeItemGeneral}
              generalArray={generalArray}
            />
            {workArray.length >= 1 ? (
              <div id="work-list">
                <h3 id="work-list-header">Work Experience</h3>
                <WorkView
                  removeItemWork={this.removeItemWork}
                  workArray={workArray}
                />
              </div>
            ) : (
              <div></div>
            )}
            {educationArray.length >= 1 ? (
              <div id="education-list">
                <h3 id="education-list-header">Education</h3>
                <EducationView
                  removeItemEducation={this.removeItemEducation}
                  educationArray={educationArray}
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

// ' ✔'

export default Main;
