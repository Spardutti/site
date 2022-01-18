import { Container } from "./Navbar.styles";
import { LangButton } from "../LangButton/LangButton";
import { Link } from "react-scroll";
import { es, en } from "../../Localization/language";

type Props = {
  language: string;
};

export const NavBar: React.FC<Props> = ({ language }) => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <p>
        <Link to="home" spy={true} smooth={true}>
          {language === "es" ? es.home : en.home}
        </Link>
      </p>
      <p>
        <Link to="projects" spy={true} smooth={true}>
          {language === "es" ? es.projects : en.projects}
        </Link>
      </p>
      <p>
        <Link to="about" spy={true} smooth={true}>
          {language === "es" ? "Acerca De" : "About Me"}
        </Link>
      </p>
      <p>
        <Link to="contact" spy={true} smooth={true}>
          {language === "es" ? es.contact : en.contact}
        </Link>
      </p>
      <LangButton />
    </Container>
  );
};
