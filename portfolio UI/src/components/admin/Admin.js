import React from "react";
import "./Admin.css";

const Admin = () => {
  return (
    <div className="wrapper">
      <div className="heading">
        <span className="title">Admin Login</span>
      </div>
      <div className="formStyle">
        <form>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
