import React, { Component } from "react";
import PropTypes from "prop-types";
import uniquid from "uniquid";

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      work: {
        company: "Microsoft",
        jobTitle: "Software Developer",
        startYear: "May 2017",
        endYear: "June 2021",
        tasks:
          "Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim.",
        id: uniquid(),
      },
    };
  }

  handleWorkChange = (e) => {
    const { title, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      work: {
        ...prevState.work,
        [title]: value,
      },
    }));
  };

  onSubmitWork = (e) => {
    e.preventDefault();
    const newWorkItem = {
      company: this.state.work.company,
      jobTitle: this.state.work.jobTitle,
      startYear: this.state.work.startYear,
      endYear: this.state.work.endYear,
      tasks: this.state.work.tasks,
      id: this.state.work.id,
    };
    this.props.addItemWork(newWorkItem);
    this.setState({
      work: {
        company: ``,
        jobTitle: ``,
        startYear: ``,
        endYear: ``,
        tasks: ``,
        id: uniquid(),
      },
    });
  };

  render() {
    const { work } = this.state;
    return (
      <div id="work-form-container">
        <label id="work-label">Work Experience</label>
        <form id="work-form" onSubmit={this.onSubmitWork}>
          <input
            placeholder="Company Name"
            type="text"
            title="company"
            value={work.company}
            onChange={this.handleWorkChange}
          />
          <input
            placeholder="Job Title"
            type="text"
            title="jobTitle"
            value={work.jobTitle}
            onChange={this.handleWorkChange}
          />
          <input
            placeholder="Start Month/Year"
            type="text"
            title="startYear"
            value={work.startYear}
            onChange={this.handleWorkChange}
          />
          <input
            placeholder="End Month/Year"
            type="text"
            title="endYear"
            value={work.endYear}
            onChange={this.handleWorkChange}
          />
          <textarea
            placeholder="Skills/Tasks"
            id="work-tasks"
            type="text"
            title="tasks"
            value={work.tasks}
            onChange={this.handleWorkChange}
          />
          <button id="work-submit" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}

Work.propTypes = {
  addItemWork: PropTypes.func.isRequired,
};

export default Work;
