import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  // const linkElement = screen.getByRole("textbox", {
  //   name: "Username",
  // });
  // expect(linkElement).toBeInTheDocument();

  // // const btn = screen.getByRole("button");
  // // expect(btn).toBeInTheDocument();

  // const selectItem = screen.getByLabelText("Job Location");
  // expect(selectItem).toBeInTheDocument();

  // const combo = screen.getByRole("combobox");
  // expect(combo).toBeInTheDocument();

  // const check = screen.getByRole("checkbox");
  // expect(check).toBeInTheDocument();

  // const submitBtn = screen.getByRole("button", {
  //   name: "Submit",
  // });
  // expect(submitBtn).toBeInTheDocument();

  // const bioElem = screen.getByRole("textbox", {
  //   name: "Bio",
  // });
  // expect(bioElem).toBeInTheDocument();

  // const btnClick = screen.getByRole("button", {
  //   name: "Click",
  // });
  // expect(btnClick).toBeInTheDocument();

  // const pageHeading = screen.getByRole("heading", {
  //   name: "Job Application Form",
  // });
  // expect(pageHeading).toBeInTheDocument();

  // const sectionHeading = screen.getByRole("heading", {
  //   name: "Section 1",
  // });
  // expect(sectionHeading).toBeInTheDocument();

  // const sectionHeading2 = screen.getByRole("heading", {
  //   name: "Section 2",
  // });
  // expect(sectionHeading2).toBeInTheDocument();

  // const label = screen.getByLabelText("UserName");
  // expect(label).toBeInTheDocument();

  // const input1 = screen.getByRole("textbox");
  // expect(input1).toBeInTheDocument();

  // const jobLocationLable = screen.getByLabelText("Job Location");
  // expect(jobLocationLable).toBeInTheDocument();

  // const jobLocationOption = screen.getByRole("combobox");
  // expect(jobLocationOption).toBeInTheDocument();

  // const btnSubmit = screen.getByRole("button", {
  //   name: "Submit",
  // });
  // expect(btnSubmit).toBeInTheDocument();
  // const nextPageBtn = screen.getByRole("button", {
  //   name: "Next Page",
  // });
  // expect(nextPageBtn).toBeInTheDocument();

  // const heading1 = screen.getByRole("heading", {
  //   name: "Job Location Data",
  // });
  // expect(heading1).toBeInTheDocument();

  // const heading2 = screen.getByRole("heading", {
  //   name: "Job Form",
  // });
  // expect(heading2).toBeInTheDocument();

  // const lableFname = screen.getByLabelText("First Name:");
  // expect(lableFname).toBeInTheDocument();

  // const inputFname = screen.getByRole("textbox");
  // expect(inputFname).toBeInTheDocument();

  // const inputFname = screen.getByRole("textbox", {
  //   name: "First Name:",
  // });
  // expect(inputFname).toBeInTheDocument();

  // const inputLname = screen.getByRole("textbox", {
  //   name: "Last Name:",
  // });
  // expect(inputLname).toBeInTheDocument();

  // const inputEmmail = screen.getByRole("textbox", {
  //   name: "Email:",
  // });
  // expect(inputEmmail).toBeInTheDocument();

  // const inputMassage = screen.getByRole("textbox", {
  //   name: "Message:",
  // });
  // expect(inputMassage).toBeInTheDocument();

  // const btnSubmit = screen.getByRole("button");
  // expect(btnSubmit).toBeInTheDocument();

  // const formHeading = screen.getByRole("heading", {
  //   name: "Sample Form",
  // });
  // expect(formHeading).toBeInTheDocument();

  const FormHeading = screen.getByRole("heading", {
    name: "Complex Form Example",
  });
  expect(FormHeading).toBeInTheDocument();
  const inputFname = screen.getByRole("textbox", {
    name: "Full Name:",
  });
  expect(inputFname).toBeInTheDocument();

  const inputEmail = screen.getByRole("textbox", {
    name: "Email:",
  });
  expect(inputEmail).toBeInTheDocument();

  const inputPhone = screen.getByRole("textbox", {
    name: "Phone Number:",
  });
  expect(inputPhone).toBeInTheDocument();

  // const inputBirthDay = screen.getByRole("textbox", {
  //   name: "Date of Birth:",
  // });
  // expect(inputBirthDay).toBeInTheDocument();

  const comboGender = screen.getByRole("combobox", {
    name: "Gender:",
  });
  expect(comboGender).toBeInTheDocument();

  const intersetSport = screen.getByRole("checkbox", {
    name: "Sports",
  });

  expect(intersetSport).toBeInTheDocument();

  const intersetMusic = screen.getByRole("checkbox", {
    name: "Music",
  });
  expect(intersetMusic).toBeInTheDocument();

  const intersetBooks = screen.getByRole("checkbox", {
    name: "Books",
  });
  expect(intersetBooks).toBeInTheDocument();

  const intersetMovies = screen.getByRole("checkbox", {
    name: "Movies",
  });
  expect(intersetMovies).toBeInTheDocument();

  const textMessage = screen.getByRole("textbox", {
    name: "Additional Comments:",
  });
  expect(textMessage).toBeInTheDocument();

  const buttonSubmit = screen.getByRole("button", {
    name: "Submit",
  });
  expect(buttonSubmit).toBeInTheDocument();
});
