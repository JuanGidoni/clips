import { useState } from "react";
import { Button } from "../../Atoms";

export const Login = () => {
  const [test, setTest] = useState("Login with Github");
  const [test2, setTest2] = useState(1);
  const testing = (x) => {
    setTest2(x + 1);
    setTest(`In progress... coming soon :) ${test2}`);
  };

  return (
    <Button text={test} className="btn github" click={() => testing(test2)} />
  );
};
