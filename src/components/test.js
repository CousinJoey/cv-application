// import React from "react";
// import PropTypes from "prop-types";

// const Test = (props) => {
//   const { educationArray } = props;

//   return (
//     <ul>
//       {educationArray.map((education) => {
//         return (
//           <div key={education.id}>
//             <li>{education.school}</li>
//             <li>{education.startYear}</li>
//             <li>{education.endYear}</li>
//             <li>{education.degree}</li>
//             <li>{education.gpa}</li>
//             <li>{education.extra}</li>
//           </div>
//         );
//       })}
//     </ul>
//   );
// };

// Test.propTypes = {
//   educationArray: PropTypes.array.isRequired,
// };

// export default Test;

// import React, { Component } from "react";
// import "../style.css";
// import uniquid from "uniquid";

// class GeneralData extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       general: {
//         name: "John Doe",
//         occupation: "Software Developer",
//         number: "123-456-7890",
//         email: "johndoe@gmail.com",
//         description:
//           "Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim.",
//         id: uniquid(),
//       },
//       workData: [],
//       educationData: [],
//       skillsData: [],
//     };
//   }

//   handleGeneralChange = (e) => {
//     const { title, value } = e.target;
//     this.setState((prevState) => ({
//       ...prevState,
//       general: {
//         ...prevState.general,
//         [title]: value,
//       },
//     }));
//     console.log(title + " " + value);
//   };

//   render() {
//     const { general } = this.state;

//     return (
//       <div>
//         <label id="personal-label">Personal Info</label>
//         <form onSubmit={this.onSubmitTesting}>
//           <input
//             type="text"
//             title="name"
//             value={general.name}
//             onChange={this.handleGeneralChange}
//           />
//           <input
//             type="text"
//             title="occupation"
//             placeholder="aaaa"
//             value={general.occupation}
//             onChange={this.handleGeneralChange}
//           />
//           <input
//             type="text"
//             title="number"
//             placeholder="aaaa"
//             value={general.number}
//             onChange={this.handleGeneralChange}
//           />
//           <input
//             type="text"
//             title="email"
//             placeholder="aaaa"
//             value={general.email}
//             onChange={this.handleGeneralChange}
//           />
//           <input
//             type="text"
//             title="description"
//             placeholder="Write a small description about you"
//             value={general.description}
//             onChange={this.handleGeneralChange}
//           />
//         </form>
//       </div>
//     );
//   }
// }

// export default GeneralData;

// import React, { Component } from "react";
// import "../style.css";
// import uniquid from "uniquid";

// class EducationData extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       education: {
//         school: "University of Michigan",
//         startYear: "2018",
//         endYear: "2022",
//         degree: "B.S. - Biology ",
//         gpa: "3.67",
//         extra:
//           "Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim.",
//         id: uniquid(),
//       },
//       educationArray: [],
//     };
//   }

//   handleEducationChange = (e) => {
//     const { title, value } = e.target;
//     this.setState((prevState) => ({
//       ...prevState,
//       education: {
//         ...prevState.education,
//         [title]: value,
//       },
//     }));
//   };

//   onSubmitEducation = (e) => {
//     e.preventDefault();
//     this.setState((prevState) => ({
//       educationArray: prevState.educationArray.concat(prevState.education),
//       education: {
//         ...prevState.education,
//         school: "",
//         startYear: "",
//         endYear: "",
//         degree: "",
//         gpa: "",
//         extra: "",
//         id: uniquid(),
//       },
//     }));
//   };

//   render() {
//     const { education } = this.state;
//     return (
//       <div>
//         <label id="education-label">Education</label>
//         <form onSubmit={this.onSubmitEducation}>
//           <input
//             type="text"
//             title="school"
//             value={education.school}
//             onChange={this.handleEducationChange}
//           />
//           <input
//             type="text"
//             title="startYear"
//             value={education.startYear}
//             onChange={this.handleEducationChange}
//           />
//           <input
//             type="text"
//             title="endYear"
//             value={education.endYear}
//             onChange={this.handleEducationChange}
//           />
//           <input
//             type="text"
//             title="degree"
//             value={education.degree}
//             onChange={this.handleEducationChange}
//           />
//           <input
//             type="text"
//             title="gpa"
//             value={education.gpa}
//             onChange={this.handleEducationChange}
//           />
//           <input
//             type="text"
//             title="extra"
//             value={education.extra}
//             onChange={this.handleEducationChange}
//           />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default EducationData;
