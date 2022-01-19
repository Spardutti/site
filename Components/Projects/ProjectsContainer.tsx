import { Project } from "./Project";
import { Container, LatestProjects } from "./ProjectsContainer.styled";
import { NavBar } from "../Navbar/Navbar";
import { WorkingOn } from "../WorkingOn/WorkingOn";
import { AllProjects } from "./AllProjects";
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
        <Button w={20} mx={"auto"} onClick={toggle}>
          {language === "es" ? "Cerrar" : "Show Less"}
        </Button>
        <Stack
          direction={"row"}
          wrap={"wrap"}
          alignContent={"space-evenly"}
          justifyContent={"center"}
        >
          {projects.map((project, index) => {
            return (
              <Link p={1} href={project.github} key={index}>
                <Button>{project.name}</Button>
              </Link>
            );
          })}
        </Stack>
      </Stack>
    );
  };

  const HideProjects = () => {
    return (
      <Center>
        <Button onClick={toggle}>
          {language === "es" ? "Ver Mas" : "Show More"}
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
      <Heading fontSize={[50, 80]} textAlign={"center"} pb={10}>
        {language === "es" ? "Proyectos Recientes" : "Latest projects"}
      </Heading>
      {/* CARD CONTAINER */}
      <Stack
        direction={["column", "row"]}
        justifyContent={"center"}
        spacing={10}
      >
        {projects.slice(0, 2).map((project, index) => {
          const { name, img, description, descripcion, demo, github } = project;
          return (
            <Box mb={1} w={[350, 700]} h={550} key={index}>
              <Box
                w={"full"}
                h={350}
                backgroundImage={img}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize={"cover"}
              />
              <Stack alignItems={"center"} justifyContent={"center"} h={190}>
                <Heading fontSize={20} py={1} textAlign={"center"}>
                  {name}
                </Heading>
                <Text textAlign={"center"} h={20} overflowY={"scroll"}>
                  {language === "es" ? descripcion : description}
                </Text>
                <Stack
                  alignItems={"center"}
                  direction={"row"}
                  justifyContent={"space-evenly"}
                >
                  <Link href={demo} target={"_blank"}>
                    <Button>Demo</Button>
                  </Link>
                  <Link href={github} target={"_blank"}>
                    <Button leftIcon={<GitHub />}>GitHub</Button>
                  </Link>
                </Stack>
              </Stack>
            </Box>
            /*     <Project
              key={index}
              name={name}
              img={img}
              descripcion={descripcion}
              description={description}
              demo={demo}
              github={github}
              language={language}
            /> */
          );
        })}
      </Stack>
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
              <Button leftIcon={<GitHub />}>GitHub</Button>
            </Link>
          </Box>
        </Stack>
      </Center>
      {/* ALL PROJECTS */}
      {show ? <ShowProjects /> : <HideProjects />}
      <Divider py={1} mx={"auto"} w={"90%"} />
    </Box>
    /* <Container id="projects">
      <AnimatePresence>
        {yPos >= 450 ? <NavBar language={language} /> : null}
      </AnimatePresence>
      <h2>{language === "es" ? "Proyectos" : "Projects"}</h2>

      <LatestProjects>
        <h5>{language === "es" ? "Proyectos Recientes" : "Latest projects"}</h5>
        {projects.slice(0, 2).map((project, index) => {
          const { name, img, description, descripcion, demo, github } = project;
          return (
            <Project
              key={index}
              name={name}
              img={img}
              descripcion={descripcion}
              description={description}
              demo={demo}
              github={github}
              language={language}
            />
          );
        })}
      </LatestProjects>
      <WorkingOn language={language} />
      <AllProjects language={language} />
    </Container> */
  );
};
