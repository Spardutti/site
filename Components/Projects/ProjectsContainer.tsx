import { NavBar } from "../Navbar/Navbar";
import { AnimatePresence } from "framer-motion";

import {
  Stack,
  Box,
  Heading,
  Text,
  Button,
  Center,
  Divider,
  Link,
  Flex,
} from "@chakra-ui/react";
import { working } from "../../Assets/working";
import { projects } from "../../Assets/projects";

import { useState } from "react";

type Props = {
  language: string;
  yPos: number;
};

export const ProjectsContainer: React.FC<Props> = ({ language, yPos }) => {
  const [show, setShow] = useState<boolean>(false);

  const GitHub = () => {
    return <i className="devicon-github-original-wordmark"></i>;
  };

  const ShowProjects = () => {
    return (
      <Stack>
        <Button mx={"auto"} colorScheme={"green"} onClick={toggle}>
          {language === "es" ? "Cerrar" : "Show Less"}
        </Button>
        <Flex
          direction={"row"}
          wrap={"wrap"}
          alignContent={"space-evenly"}
          justifyContent={"center"}
        >
          {projects.slice(2).map((project, index) => {
            return (
              <Link p={1} href={project.github} key={index}>
                <Button colorScheme={"teal"}>{project.name}</Button>
              </Link>
            );
          })}
        </Flex>
      </Stack>
    );
  };

  const HideProjects = () => {
    return (
      <Center>
        <Button onClick={toggle} colorScheme={"green"}>
          {language === "es" ? "Mas Proyectos" : "More Projects"}
        </Button>
      </Center>
    );
  };

  const toggle = () => setShow(!show);

  return (
    <Box py={1} id="projects">
      <AnimatePresence>
        {yPos >= 300 ? <NavBar language={language} /> : null}
      </AnimatePresence>
      <Heading fontSize={[50, 60, 80]} textAlign={"center"} pb={10}>
        {language === "es" ? "Proyectos Recientes" : "Latest projects"}
      </Heading>
      {/* CARD CONTAINER */}
      <Stack
        direction={["column", "column", "row"]}
        justifyContent={"center"}
        alignItems={["center", null]}
        spacing={10}
        mb={5}
        p={2}
      >
        {projects.slice(0, 2).map((project, index) => {
          const { name, img, description, descripcion, demo, github } = project;
          return (
            <Box
              w={[300, 300, 700]}
              h={550}
              key={index}
              border="4px"
              borderColor={"whiteAñlpha.100"}
              p={1}
              borderRadius={10}
            >
              <Box
                w={"full"}
                h={350}
                backgroundImage={img}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize={"cover"}
              />
              <Stack alignItems={"center"} justifyContent={"center"} h={190}>
                <Heading fontSize={20} textAlign={"center"}>
                  {name}
                </Heading>
                <Text textAlign={"center"} overflowY={"scroll"}>
                  {language === "es" ? descripcion : description}
                </Text>
                <Stack
                  alignItems={"center"}
                  direction={"row"}
                  justifyContent={"space-evenly"}
                >
                  <Link href={demo} target={"_blank"}>
                    <Button colorScheme={"orange"}>Demo</Button>
                  </Link>
                  <Link href={github} target={"_blank"}>
                    <Button colorScheme={"teal"} leftIcon={<GitHub />}>
                      GitHub
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          );
        })}
      </Stack>
      {/* ALL PROJECTS */}
      {show ? <ShowProjects /> : <HideProjects />}
      <Divider py={1} mx={"auto"} w={"90%"} />
      {/* WORKING ON */}
      <Center py={5}>
        <Stack textAlign={"center"}>
          <Heading fontSize={20}>
            {language === "es" ? "En Desarrollo" : "Current Project"}
          </Heading>
          <Box>
            <Text pb={5}>{working.name}</Text>
            <Link href={working.url} target={"_blank"}>
              <Button colorScheme={"teal"} leftIcon={<GitHub />}>
                GitHub
              </Button>
            </Link>
          </Box>
        </Stack>
      </Center>
      <Divider py={1} mx={"auto"} w={"90%"} />
    </Box>
  );
};
