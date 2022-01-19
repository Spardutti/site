import { es, en } from "../../Localization/language";
import { slides } from "../../Assets/slides";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";

type Props = {
  language: string;
};

const onClick = (url: string) => {
  window.open(url, "_blank");
};

const Icons = () => {
  return (
    <Stack direction={"row"} justifyContent={"space-evenly"} wrap={"wrap"}>
      {slides.map((slide, index) => {
        return (
          <Box key={index} py={1}>
            <Text
              fontSize={[50, 65]}
              onClick={() => onClick(slide.url)}
              className={slide.icon}
            ></Text>
          </Box>
        );
      })}
    </Stack>
  );
};

const Es = () => {
  return (
    <Box textAlign={"center"}>
      <Heading fontSize={[50, 80]} py={10}>
        Acerca De Mi
      </Heading>
      <Text pb={5}>{es.quote}</Text>
      <Text pb={5}>{es.about}</Text>
      <Heading fontSize={[50, 80]} pb={5}>
        Tecnologías
      </Heading>
      <Icons />
    </Box>
  );
};

const En = () => {
  return (
    <Box textAlign={"center"}>
      <Heading fontSize={[50, 80]} py={10}>
        About Me
      </Heading>
      <Text pb={5}>{en.quote}</Text>
      <Text pb={5}>{en.about}</Text>
      <Heading fontSize={[50, 80]} pb={5}>
        Technologies
      </Heading>
      <Icons />
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
