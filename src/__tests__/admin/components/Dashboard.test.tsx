import { render } from "@testing-library/react";
import React from "react";
import { AdminDashboard } from "../../../admin/components/dashboard";
import { AppContextProvider } from "../../../context";

const Mock = () => {
  return (
    <AppContextProvider>
      <AdminDashboard />
    </AppContextProvider>
  );
};

describe("Dashboard Test Cases", () => {
  it("should render the Dashboard Component", () => {
    const val = render(<Mock />);
    expect(val).toBeTruthy();
  });
});
