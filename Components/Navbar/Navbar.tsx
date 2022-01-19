import { Container, Stack } from "@chakra-ui/react";
import { LangButton } from "../LangButton/LangButton";
import { Link } from "react-scroll";
import { es, en } from "../../Localization/language";
import { Box } from "@chakra-ui/react";

type Props = {
  language: string;
};

export const NavBar: React.FC<Props> = ({ language }) => {
  return (
    <Stack
      direction={"row"}
      backgroundColor={"gray.700"}
      fontSize={12}
      p={[2, 3]}
      position={"fixed"}
      w={"100vw"}
      top={0}
      color={"white"}
      zIndex={100}
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
    </Stack>
  );
};
