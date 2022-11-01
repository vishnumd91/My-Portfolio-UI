import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AdminLogin } from "../../../admin/components/login";

const Mock = () => {
  return (
    <BrowserRouter>
      <AdminLogin />
    </BrowserRouter>
  );
};

describe("Login Test Cases", () => {
  it("should render the Login Component", () => {
    const val = render(<Mock />);
    expect(val).toBeTruthy();
  });
});
