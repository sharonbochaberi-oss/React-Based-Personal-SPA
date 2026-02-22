import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import LandingPage from "../pages/LandingPage";

describe("LandingPage", () => {
  test("renders welcome message", () => {
    render(<LandingPage />);
    expect(
      screen.getByText(/Welcome to Coffee R Us Admin Portal/i)
    ).toBeInTheDocument();
  });
});