import { render, screen } from "@testing-library/react";
import Placeholder from "./Placeholder";

describe("placeholder test", () => {
  test("get By Placeholder text", () => {
    render(<Placeholder />);
    const name = screen.getByPlaceholderText("Enter your name");
    expect(name).toBeInTheDocument();
  });
});
