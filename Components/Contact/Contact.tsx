import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { ImWhatsapp } from "react-icons/im";
import { SiGmail } from "react-icons/si";

type Info = {
  url: string;
  icon: string;
}[];

const contactInfo: Info = [
  {
    url: "https://www.linkedin.com/in/spardutti/",
    icon: "devicon-linkedin-plain colored",
  },
  {
    url: "https://github.com/Spardutti",
    icon: "devicon-github-original-wordmark",
  },
];

export const Contact: React.FC<{ language: string }> = ({ language }) => {
  const Es = () => {
    return (
      <Box py={10} textAlign={"center"}>
        <Heading fontSize={[50, 60, 80]}>Contactame</Heading>
        <Stack pt={10} justifyContent={"center"} direction={"row"}>
          {contactInfo.map((elem, index) => {
            return (
              <Link href={elem.url} key={index} target={"_blank"}>
                <Text fontSize={60} px={[1, 10]} className={elem.icon}></Text>
              </Link>
            );
          })}
          <Link
            pr={[1, 10]}
            href={"mailto:luisdamian.sp@gmail.com?Subject=Hola " + "Damian"}
            target="_blank"
            textColor={"red.700"}
          >
            <SiGmail fontSize={60} />
          </Link>
          <Link
            textColor={"whatsapp.600"}
            href="https://wa.me/+5491138629691"
            target="_blank"
          >
            <ImWhatsapp fontSize={60} />
          </Link>
        </Stack>
      </Box>
    );
  };

  const En = () => {
    return (
      <Box py={10} textAlign={"center"}>
        <Heading fontSize={[50, 60, 80]}>Contact Me</Heading>
        <Stack pt={10} justifyContent={"center"} direction={"row"}>
          {contactInfo.map((elem, index) => {
            return (
              <Link href={elem.url} key={index} target={"_blank"}>
                <Text
                  fontSize={[40, 40, 60]}
                  px={[1, 10]}
                  className={elem.icon}
                ></Text>
              </Link>
            );
          })}
          <Link
            px={[1, 10]}
            href={"mailto:luisdamian.sp@gmail.com?Subject=Hello " + "Damian"}
            target="_blank"
            textColor={"red.700"}
            fontSize={[40, 40, 60]}
          >
            <SiGmail />
          </Link>
          <Link
            textColor={"whatsapp.600"}
            href="https://wa.me/+5491138629691"
            target="_blank"
            fontSize={[40, 40, 60]}
          >
            <ImWhatsapp />
          </Link>
        </Stack>
      </Box>
    );
  };

  return <div id="contact">{language === "es" ? <Es /> : <En />}</div>;
};
