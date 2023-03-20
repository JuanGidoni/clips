import { RouterProvider } from "react-router-dom";
import { GlobalProvider } from "./Contexts";
import { BasicTemplate } from "./Templates";
import { router } from "./Utils/Routes";

const Components = () => {
  return (
    <BasicTemplate>
      <GlobalProvider>
        {/* <App /> */}
        <RouterProvider router={router} />
      </GlobalProvider>
    </BasicTemplate>
  );
};

export { Components };
