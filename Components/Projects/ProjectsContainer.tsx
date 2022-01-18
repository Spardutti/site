import { Project } from "./Project";
import { projects } from "../../Assets/projects";
import { Container, LatestProjects } from "./ProjectsContainer.styled";
import { NavBar } from "../Navbar/Navbar";
import { WorkingOn } from "../WorkingOn/WorkingOn";
import { AllProjects } from "./AllProjects";
import { AnimatePresence } from "framer-motion";

type Props = {
  language: string;
  yPos: number;
};

export const ProjectsContainer: React.FC<Props> = ({ language, yPos }) => {
  return (
    <Container id="projects">
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
    </Container>
  );
};
