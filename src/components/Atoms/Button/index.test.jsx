import { render } from "@testing-library/react";
import Button from "./index";

test("check button snapshot", () => {
  const TestButton = render(<Button />);
  expect(TestButton).toMatchSnapshot();
});
