import { render } from "@testing-library/react";
import React from "react";
import { About } from "../../../web/components/about";

describe("About Test Cases", () => {
  it("should render the About Component", () => {
    const val = render(<About />);
    expect(val).toBeTruthy();
  });
});
