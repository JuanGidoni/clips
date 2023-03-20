import { useContext, useState, useEffect, createContext, useMemo } from "react";
import { initialState } from "../../Utils/State";

const CreateGlobalContext = createContext();

export const useDataContext = () => {
  return useContext(CreateGlobalContext);
};

export const GlobalProvider = ({ children, ...props }) => {
  const [loading, setLoading] = useState(true);
  const value = useMemo(() => {
    return {
      initialState,
    };
  }, []);
  useEffect(() => {
    if (value?.initialState) {
      // fake loading
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [value]);

  return (
    <CreateGlobalContext.Provider value={value} props={props}>
      {loading ? <div>Cargando...</div> : children}
    </CreateGlobalContext.Provider>
  );
};
