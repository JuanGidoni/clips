import { GlobalProvider, AuthProvider } from "./Contexts";
import { BasicTemplate } from "./Templates";

const Components = () => {
  return (
    <BasicTemplate>
      <GlobalProvider>
        <AuthProvider>In progress...</AuthProvider>
      </GlobalProvider>
    </BasicTemplate>
  );
};

export { Components };
