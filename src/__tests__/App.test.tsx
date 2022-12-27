import { render } from "@testing-library/react";
import React from "react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import { queryClient } from "../utils";

const Mock = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

describe("App Test Suite", () => {
  it("should render the App Component", () => {
    const val = render(<Mock />);
    expect(val).toBeTruthy();
  });
});
