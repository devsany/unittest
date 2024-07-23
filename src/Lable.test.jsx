import { render, screen } from "@testing-library/react";
import Lable from "./Lable";

describe("Lable test", () => {
  test("label test", () => {
    render(<Lable />);

    const lable1 = screen.getByLabelText("sunny", {
      selector: "input",
    });
    expect(lable1).toBeInTheDocument();

    // const lable2 = screen.getByLabelText("sunny" )
    // expect(lable2).toBeInTheDocument();
  });
});
