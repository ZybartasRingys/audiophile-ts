import { createContext, useState, useEffect } from "react";
//Sanity

import { getHeadphones, getSpeakers, getEarphones } from "../../sanity/sanity";

//Types

import { AppProvider, IAppContext } from "../types";

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: AppProvider) => {
  const [headphones, setHeadphones] = useState<IAppContext[]>([]);
  const [speakers, setSpeakers] = useState<IAppContext[]>([]);
  const [earphones, setEarphones] = useState<IAppContext[]>([]);

  useEffect(() => {
    const getData = async () => {
      const headphones = await getHeadphones();
      setHeadphones(headphones);
    };
    getData();
  }, []);

  useEffect(() => {
    const getSpeakersData = async () => {
      const speakers = await getSpeakers();
      setSpeakers(speakers);
    };
    getSpeakersData();
  }, []);

  useEffect(() => {
    const getEarphonesData = async () => {
      const earphones = await getEarphones();
      setEarphones(earphones);
    };
    getEarphonesData();
  }, []);

  return (
    <AppContext.Provider value={{ headphones, speakers, earphones }}>
      {children}
    </AppContext.Provider>
  );
};
