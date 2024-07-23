import { getByPlaceholderText, render, screen } from "@testing-library/react";

import Form from "./Form";

describe("Form Testing", () => {
  test("Form detail test", () => {
    render(<Form />);
    const heading = screen.getByRole("heading", {
      name: "Complex Form Example",
    });
    expect(heading).toBeInTheDocument();

    const inputFullName = screen.getByRole("textbox", {
      name: "Full Name:",
    });
    expect(inputFullName).toBeInTheDocument();

    const inputEmail = screen.getByRole("textbox", {
      name: "Email:",
    });
    expect(inputEmail).toBeInTheDocument();

    // const inputBirth = screen.getByRole("textbox", {
    //   name: "Date of Birth:",
    // });
    // expect(inputBirth).toBeInTheDocument();

    const inputPhone = screen.getByRole("textbox", {
      name: "Phone Number:",
    });
    expect(inputPhone).toBeInTheDocument();

    const comboInput = screen.getByRole("combobox", {
      name: "Gender:",
    });
    expect(comboInput).toBeInTheDocument();

    const inputSport = screen.getByLabelText("Sports");
    expect(inputSport).toBeInTheDocument();

    const inputMusic = screen.getByLabelText("Music");
    expect(inputMusic).toBeInTheDocument();

    const inputBooks = screen.getByLabelText("Books");
    expect(inputBooks).toBeInTheDocument();

    const inputMovies = screen.getByLabelText("Movies");
    expect(inputMovies).toBeInTheDocument();

    const inputTextArea = screen.getByLabelText("Additional Comments:");
    expect(inputTextArea).toBeInTheDocument();

    const submitButton = screen.getByRole("button", {
      name: "Submit",
    });
    expect(submitButton).toBeInTheDocument();

    const textarea = screen.getByPlaceholderText("Enter your massage");
    expect(textarea).toBeInTheDocument();

    const inputBirth = screen.getByPlaceholderText("Enter your Date of Birth");
    expect(inputBirth).toBeInTheDocument();
  });
});
