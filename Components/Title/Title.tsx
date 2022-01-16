import { en, es } from "../../Localization/language";
import { Wrapper, TitleContainer, NavContainer, Switch } from "./Title.styles";
import { Link } from "react-scroll";
import { LangButton } from "../LangButton/LangButton";

type Props = {
  language: string;
};

export const Title: React.FC<Props> = ({ language }) => {
  return (
    <Wrapper id="home">
      <TitleContainer text={language === "es" ? es.title : en.title} />
      <NavContainer animate={{ y: [-1000, 100, 0] }}>
        <div>
          <h4>
            <Link to="projects" spy={true} smooth={true}>
              {language === "es" ? "Proyectos" : "Projects"}
            </Link>
          </h4>
          <h4>
            <Link to="about" spy={true} smooth={true}>
              {language === "es" ? "Acerca De Mi" : "About Me"}
            </Link>
          </h4>
          <h4>
            <Link to="contact" spy={true} smooth={true}>
              {language === "es" ? "Contacto" : "Contact"}
            </Link>
          </h4>
        </div>
      </NavContainer>
      <Switch>
        <LangButton />
      </Switch>
    </Wrapper>
  );
};
