import { en, es } from "../../Localization/language";
import { Wrapper, TitleContainer, NavContainer, Switch } from "./Title.styles";
import { Link } from "react-scroll";
import { LangButton } from "../LangButton/LangButton";
import { motion } from "framer-motion";

import { SimpleGrid, Stack, Heading, Text, VStack } from "@chakra-ui/react";

type Props = {
  language: string;
};

const MotionText = motion(Text);

export const Title: React.FC<Props> = ({ language }) => {
  return (
    <SimpleGrid id="home" columns={[1, 1]} h={"100vh"} px={10}>
      <Stack
        direction={["column"]}
        justifyContent={["center"]}
        alignItems={"center"}
      >
        <Heading fontSize={[80, 130]}>FullStack</Heading>
        <Heading fontSize={[70, 130]}>Developer</Heading>
      </Stack>
      <VStack textAlign={"center"} justifyContent={["center"]}>
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1, duration: 2 }}
          whileTap={{ scale: 1.2 }}
        >
          <Link to="projects" style={{ cursor: "pointer" }}>
            <MotionText fontSize={50} whileHover={{ scale: 1.2 }}>
              {language === "es" ? "Proyectos" : "Projects"}
            </MotionText>
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, duration: 2 }}
          whileTap={{ scale: 1.2 }}
        >
          <Link to="about" style={{ cursor: "pointer" }}>
            <MotionText fontSize={50} whileHover={{ scale: 1.2 }}>
              {language === "es" ? "Acerca De" : "About Me"}
            </MotionText>
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 2 }}
          whileTap={{ scale: 1.2 }}
        >
          <Link to="contact" style={{ cursor: "pointer" }}>
            <MotionText fontSize={50} whileHover={{ scale: 1.2 }}>
              {language === "es" ? "Contacto" : "Contact"}
            </MotionText>
          </Link>
        </motion.div>
      </VStack>
    </SimpleGrid>
    /*{ <Wrapper id="home">
      <TitleContainer text={language === "es" ? es.title : en.title} />
      <NavContainer>
        <div>
          <motion.div
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ delay: .1, duration: 2 }}
            whileTap={{ scale: 1.2 }}
          >
            <motion.h4 whileHover={{ scale: 1.2 }}>
              <Link to="projects" spy={true} smooth={true}>
                {language === "es" ? "Proyectos" : "Projects"}
              </Link>
            </motion.h4>
          </motion.div>
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 2 }}
          >
            <motion.h4 whileHover={{ scale: 1.2 }}>
              <Link to="about" spy={true} smooth={true}>
                {language === "es" ? "Acerca De Mi" : "About Me"}
              </Link>
            </motion.h4>
          </motion.div>
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.5, duration: 2 }}
          >
            <motion.h4 whileHover={{ scale: 1.2 }}>
              <Link to="contact" spy={true} smooth={true}>
                {language === "es" ? "Contacto" : "Contact"}
              </Link>
            </motion.h4>
          </motion.div>
        </div>
      </NavContainer>
      <Switch>
        <LangButton />
      </Switch>
    </Wrapper> }*/
  );
};
