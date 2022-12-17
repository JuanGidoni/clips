import { Button } from "./Atoms";
import { GlobalProvider } from "./Contexts";

const Components = () => {
  return (
    <GlobalProvider>
      Example Button: <Button />
    </GlobalProvider>
  );
};

export { Components };
