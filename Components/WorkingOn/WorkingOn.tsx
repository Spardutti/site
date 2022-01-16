import { working } from "../../Assets/working";
import { Container } from "./Working.styles";
import { Button } from "../Components/Button";

type Props = {
  language: string;
};

export const WorkingOn: React.FC<Props> = ({ language }) => {
  return (
    <Container>
      <h3>{language === "es" ? "En Desarrollo" : "Current Project"}</h3>
      <div>
        <h5>{working.name}</h5>
        <a href={working.url} target="_blank" rel="noreferrer">
          <Button text="GitHub" color="#85144b" />
        </a>
      </div>
    </Container>
  );
};
