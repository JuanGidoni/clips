import "./index.css";

export const Button = ({ text, className, click, testId }) => {
  return (
    <button className={className} onClick={click} data-testid={testId}>
      {text}
    </button>
  );
};
