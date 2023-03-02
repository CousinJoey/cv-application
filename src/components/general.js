import React, { Component } from "react";
import uniquid from "uniquid";

class GeneralData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: "John Doe",
        occupation: "Software Developer",
        number: "123-456-7890",
        email: "johndoe@gmail.com",
        description:
          "Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim.",
        id: uniquid(),
      },
      workData: [],
      educationData: [],
      skillsData: [],
    };
  }

  handleGeneralChange = (e) => {
    const { title, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      general: {
        ...prevState.general,
        [title]: value,
      },
    }));
    console.log(title + " " + value);
  };

  render() {
    const { general } = this.state;

    return (
      <div>
        <label>Personal Info</label>
        <form onSubmit={this.onSubmitTesting}>
          <input
            type="text"
            title="name"
            value={general.name}
            onChange={this.handleGeneralChange}
          />
          <input
            type="text"
            title="occupation"
            placeholder="aaaa"
            value={general.occupation}
            onChange={this.handleGeneralChange}
          />
          <input
            type="text"
            title="number"
            placeholder="aaaa"
            value={general.number}
            onChange={this.handleGeneralChange}
          />
          <input
            type="text"
            title="email"
            placeholder="aaaa"
            value={general.email}
            onChange={this.handleGeneralChange}
          />
          <input
            type="text"
            title="description"
            placeholder="Write a small description about you"
            value={general.description}
            onChange={this.handleGeneralChange}
          />
        </form>
      </div>
    );
  }
}

export default GeneralData;
