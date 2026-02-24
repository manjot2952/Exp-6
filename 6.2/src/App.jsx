import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  // Email validation
  const validateEmail = (value) => {
  setEmail(value);

  const emailPattern = /^(?!.*\.(com|in|org|net|edu|gov)@)[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

  setEmailValid(emailPattern.test(value));
};
  // Password validation
  const validatePassword = (value) => {
    setPassword(value);

    const passwordPattern =
      /^[A-Z](?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{4,}$/;

    setPasswordValid(passwordPattern.test(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailValid && passwordValid) {
      alert("Login Successful ✅");
    } else {
      alert("Please enter valid details ❌");
    }
  };

  return (
    <div className="container">
      <h2>Login Page</h2>

      <form onSubmit={handleSubmit} className="form">

        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => validateEmail(e.target.value)}
        />

        {email && (
          <p className={emailValid ? "success" : "error"}>
            {emailValid ? "Verified Email ✔" : "Invalid Email"}
          </p>
        )}

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => validatePassword(e.target.value)}
        />

        {password && (
          <p className={passwordValid ? "success" : "error"}>
            {passwordValid
              ? "Strong Password ✔"
              : "Password must start with capital, include number & special character and must include 5 characters..."}
          </p>
        )}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;