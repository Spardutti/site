import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { slides } from "../../Assets/slides";
import { Wrapper } from "./Carousel.styles";

export const Carousel: React.FC<{ language: string }> = ({ language }) => {
  /*SLIDE SETTINGS  */
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1,
    cssEase: "linear",
    variableWidth: true,
  };

  const onClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {slides.map((slide, index) => {
          return (
            <div key={index} onClick={() => onClick(slide.url)}>
              <i className={slide.icon}></i>
            </div>
          );
        })}
      </Slider>
    </Wrapper>
  );
};
