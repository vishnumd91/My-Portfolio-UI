import { render } from "@testing-library/react";
import React from "react";
import { CardItem } from "../../../admin/components/card";
import { AdminContextProvider } from "../../../context";

const Mock = () => {
  return (
    <AdminContextProvider>
      <CardItem title="title" description="some desc" buttonText="Add" />
    </AdminContextProvider>
  );
};

describe("Card Test Cases", () => {
  it("should render the Card Component", () => {
    const val = render(<Mock />);
    expect(val).toBeTruthy();
  });
});
