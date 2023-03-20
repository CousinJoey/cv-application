import React, { Component } from "react";
import PropTypes from "prop-types";
import uniquid from "uniquid";

class Education extends Component {
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
  };

  onSubmitEducation = (e) => {
    e.preventDefault();
    const newEducationItem = {
      school: this.state.education.school,
      startYear: this.state.education.startYear,
      endYear: this.state.education.endYear,
      degree: this.state.education.degree,
      gpa: this.state.education.gpa,
      extra: this.state.education.extra,
      id: this.state.education.id,
    };
    this.props.addItemEducation(newEducationItem);
    this.setState({
      education: {
        school: ``,
        startYear: ``,
        endYear: ``,
        degree: ``,
        gpa: ``,
        extra: ``,
        id: uniquid(),
      },
    });
  };

  render() {
    const { education } = this.state;
    return (
      <div id="education-form-container">
        <label id="education-label">Education</label>
        <form id="education-form" onSubmit={this.onSubmitEducation}>
          <input
            placeholder="University Name"
            type="text"
            title="school"
            value={education.school}
            onChange={this.handleEducationChange}
          />
          <input
            placeholder="Start Year"
            type="text"
            title="startYear"
            value={education.startYear}
            onChange={this.handleEducationChange}
          />
          <input
            placeholder="End Year"
            type="text"
            title="endYear"
            value={education.endYear}
            onChange={this.handleEducationChange}
          />
          <input
            placeholder="Degree"
            id="education-degree"
            type="text"
            title="degree"
            value={education.degree}
            onChange={this.handleEducationChange}
          />
          <input
            placeholder="GPA"
            id="education-gpa"
            type="text"
            title="gpa"
            value={education.gpa}
            onChange={this.handleEducationChange}
          />
          <textarea
            placeholder="extracurriculars"
            id="education-extra"
            type="text"
            title="extra"
            value={education.extra}
            onChange={this.handleEducationChange}
          />
          <button id="education-submit" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}

Education.propTypes = {
  addItemEducation: PropTypes.func.isRequired,
};

export default Education;
