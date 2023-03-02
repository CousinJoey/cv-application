import React, { Component } from "react";
import uniquid from "uniquid";

class EducationData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: {
        school: "University of Michigan",
        startYear: "2018",
        endYear: "2022",
        degree: "B.S. - Biology ",
        gpa: "3.67",
        extra:
          "Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim.",
        id: uniquid(),
      },
    };
  }

  handleEducationChange = (e) => {
    const { title, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      education: {
        ...prevState.education,
        [title]: value,
      },
    }));
    console.log(title + " " + value);
  };

  render() {
    const { education } = this.state;
    return (
      <div>
        <label>Education</label>
        <form>
          <input
            type="text"
            title="school"
            value={education.school}
            onChange={this.handleEducationChange}
          />
          <input
            type="text"
            title="startYear"
            value={education.startYear}
            onChange={this.handleEducationChange}
          />
          <input
            type="text"
            title="endYear"
            value={education.endYear}
            onChange={this.handleEducationChange}
          />
          <input
            type="text"
            title="degree"
            value={education.degree}
            onChange={this.handleEducationChange}
          />
          <input
            type="text"
            title="gpa"
            value={education.gpa}
            onChange={this.handleEducationChange}
          />
          <input
            type="text"
            title="extra"
            value={education.extra}
            onChange={this.handleEducationChange}
          />
        </form>
      </div>
    );
  }
}

export default EducationData;
