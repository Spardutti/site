import { en, es } from "../../Localization/language";
import { Wrapper, TitleContainer, NavContainer, Switch } from "./Title.styles";
import { Link } from "react-scroll";
import { LangButton } from "../LangButton/LangButton";
import { motion } from "framer-motion";

type Props = {
  language: string;
};

export const Title: React.FC<Props> = ({ language }) => {
  return (
    <Wrapper id="home">
      <TitleContainer text={language === "es" ? es.title : en.title} />
      <NavContainer>
        <div>
          <motion.div
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 2 }}
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
    </Wrapper>
  );
};
