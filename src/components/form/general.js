import React, { Component } from "react";
import PropTypes from "prop-types";
import uniquid from "uniquid";

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: "John Doe",
        occupation: "Software Developer",
        address: "MI, United States",
        phone: "123-456-7890",
        email: "johndoe@gmail.com",
        description:
          "Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim.",
        id: uniquid(),
      },
      generalArray: [],
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
  };

  onSubmitGeneral = (e) => {
    e.preventDefault();
    const newGeneralItem = {
      name: this.state.general.name,
      occupation: this.state.general.occupation,
      address: this.state.general.address,
      phone: this.state.general.phone,
      email: this.state.general.email,
      description: this.state.general.description,
      id: this.state.general.id,
    };
    this.props.addItemGeneral(newGeneralItem);
    this.setState({
      general: {
        name: ``,
        occupation: ``,
        address: ``,
        phone: ``,
        email: ``,
        description: ``,
        id: uniquid(),
      },
    });
  };

  render() {
    const { general } = this.state;
    return (
      <div id="general-form-container">
        <label id="general-label">General</label>
        <form id="general-form" onSubmit={this.onSubmitGeneral}>
          <input
            placeholder="Name"
            type="text"
            title="name"
            value={general.name}
            onChange={this.handleGeneralChange}
          />
          <input
            placeholder="Occupation"
            type="text"
            title="occupation"
            value={general.occupation}
            onChange={this.handleGeneralChange}
          />
          <input
            placeholder="Address"
            id="general-address"
            type="text"
            title="address"
            value={general.address}
            onChange={this.handleGeneralChange}
          />
          <input
            placeholder="Phone Number"
            id="general-phone"
            type="text"
            title="phone"
            value={general.phone}
            onChange={this.handleGeneralChange}
          />
          <input
            placeholder="Email"
            id="general-email"
            type="text"
            title="email"
            value={general.email}
            onChange={this.handleGeneralChange}
          />
          <textarea
            placeholder="Description"
            id="general-description"
            type="text"
            title="description"
            value={general.description}
            onChange={this.handleGeneralChange}
          />
          <button id="general-submit" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}

General.propTypes = {
  addItemGeneral: PropTypes.func.isRequired,
};

export default General;
