import React, { Component } from "react";
import uniquid from "uniquid";

class WorkData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experience: {
        company: "Amazon",
        role: "Backend Developer",
        startDate: "May 2018",
        endDate: "June 2021",
        jobDescription:
          "Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim.",
        id: uniquid(),
      },
    };
  }

  handleExperienceChange = (e) => {
    const { title, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      experience: {
        ...prevState.experience,
        [title]: value,
      },
    }));
    console.log(title + " " + value);
  };

  render() {
    const { experience } = this.state;
    return (
      <div>
        <label>Work Experience</label>
        <form onSubmit={this.onSubmitTesting}>
          <input
            type="text"
            title="company"
            value={experience.company}
            onChange={this.handleExperienceChange}
          />
          <input
            type="text"
            title="role"
            value={experience.role}
            onChange={this.handleExperienceChange}
          />
          <input
            type="text"
            title="startDate"
            value={experience.startDate}
            onChange={this.handleExperienceChange}
          />
          <input
            type="text"
            title="endDate"
            value={experience.endDate}
            onChange={this.handleExperienceChange}
          />
          <input
            type="field"
            title="jobDescription"
            value={experience.jobDescription}
            onChange={this.handleExperienceChange}
          />
        </form>
      </div>
    );
  }
}

export default WorkData;
