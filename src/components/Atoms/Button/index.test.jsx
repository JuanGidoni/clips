import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Button } from "./index";

describe("<Button /> testing suits", () => {
  const mockClick = jest.fn();
  test("check button snapshot", () => {
    const TestButton = render(
      <Button
        text="Testing"
        click={mockClick}
        className="btn"
        testId="buttonTest"
      />
    );
    expect(TestButton).toMatchSnapshot();
  });
  test("should render with props", () => {
    const { getByTestId } = render(
      <Button
        text="Testing"
        click={mockClick}
        className="btn"
        testId="buttonTest"
      />
    );
    const TestButton = getByTestId("buttonTest");
    act(() => {
      fireEvent.click(TestButton);
    });
    expect(mockClick).toHaveBeenCalledTimes(1);
    expect(TestButton.innerHTML).toBe("Testing");
    expect(TestButton).toHaveClass("btn");
    expect(TestButton).toHaveAttribute("data-testid", "buttonTest");
    expect(TestButton).toBeInTheDocument();
  });
});
