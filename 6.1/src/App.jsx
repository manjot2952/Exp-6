import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    address: "",
    dob: "",
    state: "",
    skills: []
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // handle checkbox
  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value]
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter(skill => skill !== value)
      });
    }
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit} className="form">

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />

        {/* Gender */}
        <div className="group">
  <label className="group-title">Gender:</label>
  <div className="options">
    <label><input type="radio" name="gender" value="Male" onChange={handleChange}/> Male</label>
    <label><input type="radio" name="gender" value="Female" onChange={handleChange}/> Female</label>
    <label><input type="radio" name="gender" value="Other" onChange={handleChange}/> Other</label>
  </div>
</div>

        {/* Address */}
        <textarea
          name="address"
          placeholder="Address"
          rows="3"
          onChange={handleChange}
        ></textarea>

        {/* DOB */}
        <div className="group">
          <label>Date of Birth:</label>
          <input type="date" name="dob" onChange={handleChange} />
        </div>

        {/* State Dropdown */}
        <select name="state" onChange={handleChange}>
          <option value="">Select State</option>
          <option>Andhra Pradesh</option>
<option>Arunachal Pradesh</option>
<option>Assam</option>
<option>Bihar</option>
<option>Chhattisgarh</option>
<option>Goa</option>
<option>Gujarat</option>
<option>Haryana</option>
<option>Himachal Pradesh</option>
<option>Jharkhand</option>
<option>Karnataka</option>
<option>Kerala</option>
<option>Madhya Pradesh</option>
<option>Maharashtra</option>
<option>Manipur</option>
<option>Meghalaya</option>
<option>Mizoram</option>
<option>Nagaland</option>
<option>Odisha</option>
<option>Punjab</option>
<option>Rajasthan</option>
<option>Sikkim</option>
<option>Tamil Nadu</option>
<option>Telangana</option>
<option>Tripura</option>
<option>Uttar Pradesh</option>
<option>Uttarakhand</option>
<option>West Bengal</option>
<option>Andaman and Nicobar Islands</option>
<option>Chandigarh</option>
<option>Dadra and Nagar Haveli and Daman and Diu</option>
<option>Delhi</option>
<option>Jammu and Kashmir</option>
<option>Ladakh</option>
<option>Lakshadweep</option>
<option>Puducherry</option>
        </select>

        {/* Skills */}
        <div className="group">
  <label className="group-title">Skills:</label>
  <div className="options">
    <label><input type="checkbox" value="Python" onChange={handleSkillChange}/> Python</label>
    <label><input type="checkbox" value="Java" onChange={handleSkillChange}/> Java</label>
    <label><input type="checkbox" value="C++" onChange={handleSkillChange}/> C++</label>
  </div>
</div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;