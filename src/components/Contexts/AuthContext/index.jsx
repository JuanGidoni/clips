import { useContext, useState, useEffect, createContext, useMemo } from "react";
import Authenticate from "../../Organisms/Authenticate";
import { initialState } from "../../Utils/State";

const CreateAuthContext = createContext();

export const useDataContext = () => {
  return useContext(CreateAuthContext);
};

const AuthProvider = ({ children, ...props }) => {
  const [isAuth, setIsAuth] = useState(false);
  const value = useMemo(() => {
    return {
      initialState: initialState,
      isAuth: isAuth,
    };
  }, [isAuth]);
  useEffect(() => {
    if (value?.initialState.isLoggedIn) {
      setTimeout(() => {
        setIsAuth(true);
      }, 1500);
    }
  }, [value]);

  return (
    <CreateAuthContext.Provider value={value} props={props}>
      {isAuth ? children : <Authenticate isAuth={isAuth} />}
    </CreateAuthContext.Provider>
  );
};

export default AuthProvider;
