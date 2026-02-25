import { useState } from 'react'
import './App.css'

function App() {

  const initialFormState = {
    firstName: '',
    lastName: '',
    address: '',
    gender: '',
    DoB: '',
    skills: []
  }

  const [formData, setFormData] = useState(initialFormState)

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter(skill => skill !== value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const details = `
Submitted Details:

First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Address: ${formData.address}
Gender: ${formData.gender}
Date of Birth: ${formData.DoB}
Skills: ${formData.skills.length > 0 ? formData.skills.join(', ') : 'None'}
    `

    alert(details)
    console.log(formData)
  }

  const handleClear = () => {
    setFormData(initialFormState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>

        {/* First Name */}
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
          required
        />

        {/* Last Name */}
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
          required
        />

        {/* Address */}
        <label>Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
          rows="3"
          required
        />

        {/* Gender */}
        <label>Gender</label>
        <div className="group">
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
            required
          />
          <label>Male</label>

          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
          />
          <label>Female</label>
        </div>

        {/* Date of Birth */}
        <label>Date of Birth</label>
        <input
          type="date"
          name="DoB"
          value={formData.DoB}
          onChange={handleChange}
          max={today}         // Prevents future dates
          min="1900-01-01"    // Optional lower limit
          required
        />

        {/* Skills */}
        <label>Skills</label>
        <div className="group">
          <input type="checkbox" value="HTML" onChange={handleChange} />
          <label>HTML</label>

          <input type="checkbox" value="CSS" onChange={handleChange} />
          <label>CSS</label>

          <input type="checkbox" value="JavaScript" onChange={handleChange} />
          <label>JavaScript</label>

          <input type="checkbox" value="React" onChange={handleChange} />
          <label>React</label>

          <input type="checkbox" value="Python" onChange={handleChange} />
          <label>Python</label>

          <input type="checkbox" value="Java" onChange={handleChange} />
          <label>Java</label>
        </div>

        {/* Buttons */}
        <div className="button-group">
          <input type="submit" value="Submit" />
          <input type="button" value="Clear Form" onClick={handleClear} />
        </div>

      </fieldset>
    </form>
  )
}

export default App