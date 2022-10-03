import { render } from "@testing-library/react";
import React from "react";
import { AdminDashboard } from "../../../admin/components/dashboard";

describe("Dashboard Test Cases", () => {
  it("should render the Dashboard Component", () => {
    const val = render(<AdminDashboard />);
    expect(val).toBeTruthy();
  });
});
