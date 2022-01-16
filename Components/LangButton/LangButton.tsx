import { useContext, useState, useEffect } from "react";
import { languageContext } from "../../Context/languageContext";
import { Wrapper, Es, En } from "./LangButton.styles";

export const LangButton: React.FC = () => {
  const { language, setLanguage } = useContext(languageContext);
  const [position, setPosition] = useState("");

  const switchLanguage = (lan: string) => {
    localStorage.setItem("language", lan);
    setLanguage(lan);
  };

  useEffect(() => {
    language === "es" ? setPosition("0px") : setPosition("30px");
  }, [language]);

  return (
    <div>
      <Wrapper pos={position}>
        <div></div>
        <Es onClick={() => switchLanguage("es")}>es</Es>
        <En onClick={() => switchLanguage("en")}>en</En>
      </Wrapper>
    </div>
  );
};
