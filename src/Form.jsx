import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    birthdate: "",
    gender: "",
    interests: [],
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      // Handle checkboxes separately to toggle values in array
      if (checked) {
        setFormData((prevState) => ({
          ...prevState,
          interests: [...prevState.interests, value],
        }));
      } else {
        setFormData((prevState) => ({
          ...prevState,
          interests: prevState.interests.filter((item) => item !== value),
        }));
      }
    } else {
      // For other inputs, directly set the value in state
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
    // Reset form after submission (optional)
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      birthdate: "",
      gender: "",
      interests: [],
      message: "",
    });
  };

  return (
    <div>
      <h2>Complex Form Example</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <br />
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="phone">Phone Number:</label>
        <br />
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="Format: 123-456-7890"
          required
        />
        <br />
        <br />

        <label htmlFor="birthdate">Date of Birth:</label>
        <br />
        <input
        placeholder="Enter your Date of Birth"
          type="date"
          id="birthdate"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="gender">Gender:</label>
        <br />
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
        <br />

        <legend>Interests:</legend>
        <label>
          <input
            type="checkbox"
            name="interests"
            value="sports"
            checked={formData.interests.includes("sports")}
            onChange={handleChange}
          />{" "}
          Sports
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="interests"
            value="music"
            checked={formData.interests.includes("music")}
            onChange={handleChange}
          />{" "}
          Music
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="interests"
            value="books"
            checked={formData.interests.includes("books")}
            onChange={handleChange}
          />{" "}
          Books
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="interests"
            value="movies"
            checked={formData.interests.includes("movies")}
            onChange={handleChange}
          />{" "}
          Movies
        </label>
        <br />

        <br />

        <label htmlFor="message">Additional Comments:</label>
        <br />
        <textarea
        placeholder="Enter your massage"
          id="message"
          name="message"
          rows="4"
          cols="50"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
