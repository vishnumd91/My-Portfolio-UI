import { render } from "@testing-library/react";
import React from "react";
import { CardItem } from "../../../admin/components/card";

describe("Card Test Cases", () => {
  it("should render the Card Component", () => {
    const val = render(<CardItem />);
    expect(val).toBeTruthy();
  });
});
