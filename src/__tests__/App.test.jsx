import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

const Mock = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

describe("App Test Suite", () => {
  it("should render the App Component", () => {
    const val = render(<Mock />);
    expect(val).toBeTruthy();
  });
});
