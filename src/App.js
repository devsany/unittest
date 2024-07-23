// const App = () => {
//   return (
//     <>
//       {/* <h1>Job Application Form</h1>
//       <h2>Section 1</h2>
//       <h2>Section 2</h2>
//       <form action="">
//         <label htmlFor="userName">Username</label>
//         <input type="text" id="userName" />
//         <label htmlFor="bio">Bio</label>
//         <textarea name="" id="bio"></textarea>
//       </form>
//       <button>Click</button>
//       <label htmlFor="job-location">Job Location</label>
//       <select name="" id="job-location">
//         <option value="">Select country</option>
//         <option value="US">USA</option>
//         <option value="IN">India</option>
//       </select>
//       <input type="checkbox" /> I agree to the term and comdition
//       <button>Submit </button> */}
//       <h1>Job Location Data</h1>
//       <h2>Job ta</h2>
//       <form action="">
//         <label htmlFor="id">UserName</label>
//         <input type="text" id="id" />

//         <label htmlFor="selection">Job Location</label>
//         <select name="" id="selection">
//           <option value="">Select option</option>
//           <option value="US">USA</option>
//           <option value="IN">India</option>
//         </select>
//         <button>Submit</button>
//         <button>Next Page</button>
//       </form>
//     </>
//   );
// };

// export default App;

import React from "react";
import ComplexForm from "./Form";

const App = () => {
  return (
    <>
      <h2>Complex Form Example</h2>
      <form id="complexForm" onsubmit="handleSubmit(event)">
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="htmlFormat: 123-456-7890"
        />

        <label htmlFor="birthdate">Date of Birth:</label>
        <input type="date" id="birthdate" name="birthdate" required />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender">
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <fieldset>
          <legend>Interests:</legend>
          <label>
            <input type="checkbox" name="interests" value="sports" /> Sports
          </label>
          <label>
            <input type="checkbox" name="interests" value="music" /> Music
          </label>
          <label>
            <input type="checkbox" name="interests" value="books" /> Books
          </label>
          <label>
            <input type="checkbox" name="interests" value="movies" /> Movies
          </label>
        </fieldset>

        <label htmlFor="message">Additional Comments:</label>
        <textarea id="message" name="message" rows="4" cols="50"></textarea>

        <button>Submit</button>
      </form>
      <ComplexForm />
    </>
  );
};

export default App;
