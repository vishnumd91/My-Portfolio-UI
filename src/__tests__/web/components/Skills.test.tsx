import { render } from "@testing-library/react";
import React from "react";
import { Skills } from "../../../web/components/skills";

describe("Skills Test Cases", () => {
  it("should render the Skills Component", () => {
    const val = render(<Skills />);
    expect(val).toBeTruthy();
  });
});
