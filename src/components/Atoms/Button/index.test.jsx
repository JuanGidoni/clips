import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./index";

describe("<Button /> testing suits", () => {
  const mockClick = jest.fn();
  test("check button snapshot", () => {
    const { container } = render(
      <Button
        text="Testing"
        click={mockClick}
        className="btn"
        testId="buttonTest"
      />
    );
    expect(container).toMatchSnapshot();
  });
  test("should render with props", () => {
    render(
      <Button
        text="Testing"
        click={mockClick}
        className="btn"
        testId="buttonTest"
      />
    );
    const button = screen.getByTestId("buttonTest");
    fireEvent.click(button);
    expect(mockClick).toHaveBeenCalledTimes(1);
    expect(button.innerHTML).toBe("Testing");
    expect(button).toHaveClass("btn");
    expect(button).toHaveAttribute("data-testid", "buttonTest");
    expect(button).toBeInTheDocument();
  });
});
