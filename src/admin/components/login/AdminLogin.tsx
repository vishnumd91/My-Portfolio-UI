import React, { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminLoginType } from "../../types/adminLogin.types";
import "./AdminLogin.css";

export const AdminLogin = (): ReactElement => {
  const [loginCredentials, setLoginCredentials] = useState<AdminLoginType>({
    userName: "",
    password: "",
  });

  const { userName, password } = loginCredentials;

  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginCredentials({
      ...loginCredentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    const hardCodedUserName = "admin";
    const hardCodedPassword = "admin";
    event.preventDefault();
    if (userName === hardCodedUserName && password === hardCodedPassword) {
      navigate("/dashboard");
    } else {
      // eslint-disable-next-line no-undef
      alert("Wrong Credentials");
    }
    setLoginCredentials({
      ...loginCredentials,
      userName: "",
      password: "",
    });
  };

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
              name="userName"
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
              name="password"
              value={password}
              autoComplete="off"
              required
              onChange={handleInputChange}
            />
          </div>
          <br></br>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
