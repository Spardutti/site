import { createContext } from "react";

type LanguageContext = {
  language: string;
  setLanguage: (value: string) => void;
};

export const languageContext = createContext<LanguageContext>({
  language: "",
  setLanguage: () => {},
});
