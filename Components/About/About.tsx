import { Container, Stack } from "./About.styled";
import { es, en } from "../../Localization/language";
import { slides } from "../../Assets/slides";

type Props = {
  language: string;
};

const onClick = (url: string) => {
  window.open(url, "_blank");
};

const Icons = () => {
  return (
    <div>
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            <i onClick={() => onClick(slide.url)} className={slide.icon}></i>
          </div>
        );
      })}
    </div>
  );
};

const Es = () => {
  return (
    <div>
      <h2>Acerca De Mi</h2>
      <q>{es.quote}</q>
      <p>{es.about}</p>
      <Stack>
        <h4>Tecnologías</h4>
        <Icons />
      </Stack>
    </div>
  );
};

const En = () => {
  return (
    <div>
      <h2>About Me</h2>
      <q>{en.quote}</q>
      <p>{en.about}</p>
      <Stack>
        <h4>Technologies</h4>
        <Icons />
      </Stack>
    </div>
  );
};

export const About: React.FC<Props> = ({ language }) => {
  return (
    <Container id="about">{language === "es" ? <Es /> : <En />}</Container>
  );
};
