import { render } from "@testing-library/react";
import React from "react";
import { Experience } from "../../../web/components/experience";

describe("Experience Test Cases", () => {
  it("should render the Experience Component", () => {
    const val = render(<Experience />);
    expect(val).toBeTruthy();
  });
});
