import { Container } from "./Projects.styled";
import { Button } from "../Components/Button";

type Props = {
  name: string;
  img: string;
  description: string;
  descripcion: string;
  demo: string;
  github: string;
  language: string;
};

export const Project: React.FC<Props> = ({
  name,
  img,
  description,
  descripcion,
  demo,
  github,
  language,
}) => {
  return (
    <Container image={img}>
      <div></div>
      <h3>{name}</h3>
      <p>{language === "es" ? descripcion : description}</p>
      <a href={demo} target="_blank" rel="noreferrer">
        <Button color="#001f3f" text={language === "es" ? "Ver" : "Demo"} />
      </a>
      <a href={github} target="_blank" rel="noreferrer">
        <Button text={"Github"} color="#85144b" />
      </a>
    </Container>
  );
};
