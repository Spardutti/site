import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { SimpleGrid, Stack, Heading, Text, Box } from "@chakra-ui/react";

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
        textAlign={"center"}
      >
        {language === "es" ? (
          <Box>
            <Heading fontSize={[60, 90, 130]}>Desarrolador</Heading>
            <Heading fontSize={[70, 90, 130]}>FullStack</Heading>
          </Box>
        ) : (
          <div>
            <Heading fontSize={[70, 90, 130]}>FullStack</Heading>
            <Heading fontSize={[60, 90, 130]}>Developer</Heading>
          </div>
        )}
      </Stack>
      <Stack textAlign={"center"} justifyContent={["center"]}>
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1, duration: 2 }}
          whileTap={{ scale: 1.2 }}
        >
          <Link to="projects" style={{ cursor: "pointer" }}>
            <MotionText fontSize={[35, 45, 50]} whileHover={{ scale: 1.2 }}>
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
            <MotionText fontSize={[35, 45, 50]} whileHover={{ scale: 1.2 }}>
              {language === "es" ? "Acerca De Mi" : "About Me"}
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
            <MotionText fontSize={[35, 45, 50]} whileHover={{ scale: 1.2 }}>
              {language === "es" ? "Contacto" : "Contact"}
            </MotionText>
          </Link>
        </motion.div>
      </Stack>
    </SimpleGrid>
  );
};
