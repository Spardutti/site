import { Container } from "./Contact.styled";

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
      <Container>
        <h2>Contactame</h2>
        <div>
          {contactInfo.map((elem, index) => {
            return <i key={index} className={elem.icon}></i>;
          })}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=luisdamian.sp@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/000000/gmail-new.png"
              alt="gmail"
            />
          </a>
          <a
            href="https://wa.me/+5491138629691"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/000000/whatsapp--v3.png"
              alt="whatsapp"
            />
          </a>
        </div>
      </Container>
    );
  };

  const En = () => {
    return (
      <Container>
        <h2>Contact Me</h2>
        <div>
          {contactInfo.map((elem, index) => {
            return <i key={index} className={elem.icon}></i>;
          })}
          <a
            //href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=luisdamian.sp@gmail.com"
            target="_blank"
            rel="noreferrer"
            href="mailto:luisdamian.sp@gmail.com?Subject=Hello%20Damian"
          >
            <img
              src="https://img.icons8.com/color/48/000000/gmail-new.png"
              alt="gmail"
            />
          </a>
          <a
            href="https://wa.me/+5491138629691"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/000000/whatsapp--v3.png"
              alt="whatsapp"
            />
          </a>
        </div>
      </Container>
    );
  };

  return <div id="contact">{language === "es" ? <Es /> : <En />}</div>;
};
