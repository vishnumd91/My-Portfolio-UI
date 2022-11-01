import { render } from "@testing-library/react";
import React from "react";
import { Education } from "../../../web/components/education";

describe("Education Test Cases", () => {
  it("should render the Education Component", () => {
    const val = render(<Education />);
    expect(val).toBeTruthy();
  });
});
