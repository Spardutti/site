import { useState } from "react";
import { Container, Projects } from "./AllProjects.styled";
import { projects } from "../../Assets/projects";
import { Button } from "../Components/Button";

type Props = {
  language: string;
};

export const AllProjects: React.FC<Props> = ({ language }) => {
  const [showProjects, setShowProjects] = useState<boolean>(false);

  const toggle = () => {
    setShowProjects(!showProjects);
  };

  const Hidden = () => {
    return (
      <Container>
        <h4 onClick={toggle}>
          {language === "es"
            ? "Mostrar Todos Los Proyectos"
            : "Show All Projects"}
        </h4>
      </Container>
    );
  };

  const Visible = () => {
    return (
      <Container>
        <h4 onClick={toggle}>{language === "es" ? "Ocultar" : "Show less"}</h4>
        <Projects>
          {projects.slice(2).map((project, index) => {
            return (
              <div key={index}>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Button text={project.name} color="#85144b" />
                </a>
              </div>
            );
          })}
        </Projects>
      </Container>
    );
  };

  return <div>{showProjects ? <Visible /> : <Hidden />}</div>;
};
