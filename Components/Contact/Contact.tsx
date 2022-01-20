import { Box, Heading, Link, Stack } from "@chakra-ui/react";
import { ImWhatsapp } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export const Contact: React.FC<{ language: string }> = ({ language }) => {
  return (
    <Box py={10} textAlign={"center"} id="contact">
      <Heading fontSize={[50, 60, 80]}>
        {language === "es" ? "Contactame" : "Contact Me"}
      </Heading>
      <Stack
        pt={10}
        justifyContent={"space-around"}
        direction={"row"}
        fontSize={60}
      >
        <MotionLink
          href="https://www.linkedin.com/in/spardutti/"
          target={"_blank"}
          textColor={"#458eff"}
          whileHover={{ scale: 1.2 }}
        >
          <BsLinkedin />
        </MotionLink>
        <MotionLink
          whileHover={{ scale: 1.2 }}
          href="https://github.com/Spardutti"
          target={"_blank"}
        >
          <BsGithub />
        </MotionLink>
        <MotionLink
          href={"mailto:luisdamian.sp@gmail.com?Subject=Hola " + "Damian"}
          target="_blank"
          whileHover={{ scale: 1.2 }}
          textColor={"#BB001B"}
        >
          <SiGmail />
        </MotionLink>
        <MotionLink
          textColor={"whatsapp.600"}
          href="https://wa.me/+5491138629691"
          whileHover={{ scale: 1.2 }}
          target="_blank"
        >
          <ImWhatsapp />
        </MotionLink>
      </Stack>
    </Box>
  );
};
