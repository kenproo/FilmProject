import React, { useState } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    dob: "",
  });

  const [formErrors, setFormErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form data
  const validate = () => {
    const errors = {};
    if (!formData.username) errors.username = "Username is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.password) errors.password = "Password is required";
    if (!formData.firstname) errors.firstname = "First name is required";
    if (!formData.lastname) errors.lastname = "Last name is required";
    if (!formData.dob) errors.dob = "Date of birth is required";

    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formData);
      // Add your form submission logic here (e.g., send data to a server)
      alert("Registration successful!");
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {formErrors.username && (
            <p className="error">{formErrors.username}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <p className="error">{formErrors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formErrors.password && (
            <p className="error">{formErrors.password}</p>
          )}
        </div>

        {/* First Name */}
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
          {formErrors.firstname && (
            <p className="error">{formErrors.firstname}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
          {formErrors.lastname && (
            <p className="error">{formErrors.lastname}</p>
          )}
        </div>

        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          {formErrors.dob && <p className="error">{formErrors.dob}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit">Register</button>
      </form>

      <div className = "infor-text-login">
<h2>Welcome my channel</h2>


      </div>
    </div>
  );
}

export default RegisterForm;
