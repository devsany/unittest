import { render, screen } from "@testing-library/react";
import Getbytext from "./Getbytext";

describe("text", () => {
  test("GetByText", () => {
    render(<Getbytext />);

    const btn = screen.getByRole("button", {
      name: "Click",
    });
    expect(btn).toBeInTheDocument();

    const text1 = screen.getByText("Click");
    expect(text1).toBeInTheDocument();
  });
});
