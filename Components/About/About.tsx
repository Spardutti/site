import { es, en } from "../../Localization/language";
import { slides } from "../../Assets/slides";
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";

type Props = {
  language: string;
};

const onClick = (url: string) => {
  window.open(url, "_blank");
};

const Icons = () => {
  return (
    <Flex flexWrap={"wrap"} m={2} p={2} justifyContent={"center"}>
      {slides.map((slide, index) => {
        return (
          <Box
            mx={"auto"}
            key={index}
            p={2}
            bg={"whiteAlpha.900"}
            borderRadius={20}
            w={20}
            m={1}
          >
            <Text
              fontSize={[50, 50, 65]}
              onClick={() => onClick(slide.url)}
              className={slide.icon}
            ></Text>
          </Box>
        );
      })}
    </Flex>
  );
};

const Es = () => {
  return (
    <Box textAlign={"center"}>
      <Heading fontSize={[50, 60, 80]} py={10}>
        Acerca De Mi
      </Heading>
      <Text px={1} pb={5}>
        {es.quote}
      </Text>
      <Text px={1} pb={5}>
        {es.about}
      </Text>
      <Heading fontSize={[50, 60, 80]} pb={5}>
        Tecnologías
      </Heading>
      <Icons />
      <Divider py={1} mx={"auto"} w={"90%"} />
    </Box>
  );
};

const En = () => {
  return (
    <Box textAlign={"center"}>
      <Heading fontSize={[50, 80]} py={10}>
        About Me
      </Heading>
      <Text px={1} pb={5}>
        {en.quote}
      </Text>
      <Text px={1} pb={5}>
        {en.about}
      </Text>
      <Heading fontSize={[50, 60, 80]} pb={5}>
        Technologies
      </Heading>
      <Icons />
      <Divider py={1} mx={"auto"} w={"90%"} />
    </Box>
  );
};

export const About: React.FC<Props> = ({ language }) => {
  return (
    <Box pt={15} id="about">
      {language === "es" ? <Es /> : <En />}
    </Box>
  );
};
