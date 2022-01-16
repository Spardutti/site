import { useContext, useState, useEffect } from "react";
import { languageContext } from "../../Context/languageContext";
import { Wrapper } from "./LangButton.styles";
import Switch from "https://framer.com/m/Switch-7r3D.js@b4FAy5D6H33TTByeRzu6";

export const LangButton: React.FC = () => {
  const { language, setLanguage } = useContext(languageContext);
  const [isToggled, setIsToggled] = useState<boolean>();

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
    language === "es" ? setIsToggled(false) : setIsToggled(true);
  }, [language]);

  return (
    <div>
      <Wrapper onClick={switchLanguage}>
        <Switch toggled={isToggled} />
      </Wrapper>
      {/*   <En onClick={() => switchLanguage("en")}>en</En>
      <Es onClick={() => switchLanguage("es")}>es</Es> */}
    </div>
  );
};
