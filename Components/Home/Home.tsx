import { Title } from "../Title/Title";
import { ProjectsContainer } from "../Projects/ProjectsContainer";
import { useEffect, useState } from "react";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";

interface Props {
  language: string;
}

export const Home: React.FC<Props> = ({ language }) => {
  const [yPos, setYPos] = useState<number>(0);

  const handleScroll = () => {
    setYPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Title language={language} />
      <ProjectsContainer language={language} yPos={yPos} />
      <About language={language} />
      <Contact language={language} />
    </div>
  );
};
