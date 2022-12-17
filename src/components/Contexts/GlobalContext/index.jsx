import { useContext, useState, useEffect, createContext, useMemo } from "react";

const CreateGlobalContext = createContext();

export const useDataContext = () => {
  return useContext(CreateGlobalContext);
};

const GlobalProvider = ({ children, ...props }) => {
  const [loading, setLoading] = useState(true);
  const value = useMemo(() => {
    return {
      initialState: ["test", "123"],
    };
  }, []);
  useEffect(() => {
    if (value?.initialState.length > 0) {
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

export default GlobalProvider;
