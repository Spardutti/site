import { Box, Stack } from "@chakra-ui/react";
import { LangButton } from "../LangButton/LangButton";
import { Link } from "react-scroll";
import { es, en } from "../../Localization/language";

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
      <Box cursor={"pointer"}>
        <Link to="home" spy={true} smooth={true}>
          {language === "es" ? es.home : en.home}
        </Link>
      </Box>
      <Box cursor={"pointer"}>
        <Link to="projects" spy={true} smooth={true}>
          {language === "es" ? es.projects : en.projects}
        </Link>
      </Box>
      <Box cursor={"pointer"}>
        <Link to="about" spy={true} smooth={true}>
          {language === "es" ? "Acerca De" : "About Me"}
        </Link>
      </Box>
      <Box cursor={"pointer"}>
        <Link to="contact" spy={true} smooth={true}>
          {language === "es" ? es.contact : en.contact}
        </Link>
      </Box>
      <LangButton />
    </Stack>
  );
};
