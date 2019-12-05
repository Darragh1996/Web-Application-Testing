import React from "react";
// import { render } from '@testing-library/react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders an element with specific text", () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.queryByText(/strikes/i);
  expect(element).toBeInTheDocument();
});
