import { fireEvent, render, screen } from "@testing-library/react";
import MissionForm from "./components/MissionForm";
import React from "react";

test("mission form renders correctly", () => {
  render(<MissionForm />);
});

test("renders the message when isFetchingData is true", () => {
  render(<MissionForm isFetchingData={true} />);
  const value = screen.queryByText(/we are fetching data/i);
  expect(value).not.toBeNull();
});

test("renders button when isFetchingData is false", () => {
  render(<MissionForm isFetchingData={false} />);
  const button = screen.getByRole("button");
  expect(button).not.toBeNull();
});

test("calls getData when button is pressed", () => {
  const mockGetData = jest.fn(() => {});
  render(<MissionForm getData={mockGetData} />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(mockGetData.mock.calls).toHaveLength(1);
});
