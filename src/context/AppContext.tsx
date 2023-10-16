import { createContext, useState, useEffect } from "react";

//Sanity

import { getHeadphones } from "../../sanity/sanity";

//Types

import { AppProvider, IAppContext } from "../types";

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: AppProvider) => {
  const [headphones, setHeadphones] = useState<IAppContext[]>([]);

  useEffect(() => {
    const getData = async () => {
      const headphones = await getHeadphones();
      setHeadphones(headphones);
    };
    getData();
  }, []);
  return (
    <AppContext.Provider value={{ headphones }}>{children}</AppContext.Provider>
  );
};
