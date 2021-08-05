import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./AdminLogin.css";

const Admin = () => {

  const [userName, setUserName] = useState('');

  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleInputChange = (event) => {
    setUserName(event.target.value);
  }

  const passwordInput = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    const hardCodedUserName = 'admin';
    const hardCodedPassword = 'admin';
    event.preventDefault();
    if (userName === hardCodedUserName && password === hardCodedPassword) {
      history.push('/dashboard');
    }
    else {
      // eslint-disable-next-line no-undef
      alert('Wrong Credentials');
    }
    //Line 33 and 34 clears the text input field after user submits the data to be posted
    setUserName('');
    setPassword('');
  }

  return (
    <div className="wrapper">
      <div className="heading">
        <span className="title">Admin Login</span>
      </div>
      <div className="formStyle">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={userName}
              autoComplete="off"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              autoComplete="off"
              required
              onChange={passwordInput}
            />
          </div>
          <br></br>
          <button type="submit" onClick={handleSubmit} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
