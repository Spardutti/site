import { useState } from "react";
import { Container, Projects } from "./AllProjects.styled";
import { projects } from "../../Assets/projects";
import { Button } from "../Components/Button";
import { motion, AnimatePresence } from "framer-motion";

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
        <div onClick={toggle}>
          <Button
            color="#85144b"
            text={language === "es" ? "Mostrar Todo" : "Show All"}
          />
        </div>
      </Container>
    );
  };

  const Visible = () => {
    return (
      <Container>
        <div onClick={toggle}>
          <Button
            color="#85144b"
            text={language === "es" ? "Ocultar" : "Show less"}
          />
        </div>
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

  return (
    <div>
      {showProjects ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Visible />
        </motion.div>
      ) : (
        <Hidden />
      )}
    </div>
  );
};
