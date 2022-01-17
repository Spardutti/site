import { useContext, useState, useEffect } from "react";
import { languageContext } from "../../Context/languageContext";
import { Wrapper, SelectorContainer, Selector } from "./LangButton.styles";

export const LangButton: React.FC = () => {
  const { language, setLanguage } = useContext(languageContext);
  const [isToggled, setIsToggled] = useState<string>("flex-end");

  const switchLanguage = () => {
    if (language === "es") {
      localStorage.setItem("language", "en");
      setLanguage("en");
    } else {
      localStorage.setItem("language", "es");
      setLanguage("es");
    }
  };

  useEffect(() => {
    language === "es" ? setIsToggled("2px") : setIsToggled("18px");
  }, [language]);

  return (
    <Wrapper>
      <p>Es</p>
      <SelectorContainer onClick={switchLanguage}>
        <Selector position={isToggled} />
      </SelectorContainer>
      <p>En</p>
    </Wrapper>
  );
};
