import {
  PortfolioSection,
  PortfolioTitle,
  Info,
  PortfolioPieces,
  BackgroundText,
  PortfolioText,
  ComputerImage,
  TechButton,
  Tag,
  TechButtonHouse,
  PortfolioImage,
} from "../components/Portfolio.style";
import { GoPrimitiveDot } from "react-icons/go";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <PortfolioSection>
      <Info>
        <BackgroundText>PORTFOLIO PORTFOLIO</BackgroundText>
        <PortfolioTitle data-aos="fade-right">Portfolio</PortfolioTitle>
        <PortfolioText marginTop="30px">
          Here are three projects I built during my time at Carolina Code
          School. I'm always building, wait until you see what I add next!
        </PortfolioText>
        <ComputerImage src={require("../media/computer.png")} />
        <PortfolioText marginTop="0px">
          All of these projects are built using the following technologies:
        </PortfolioText>
        <TechButtonHouse>
          <Tag href="https://reactjs.org/">
            <TechButton color="#54D1FA" fontColor="#194756">
              <GoPrimitiveDot style={{ fontSize: "14px" }} />
              React Js
            </TechButton>
          </Tag>
          <Tag href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            <TechButton color="#E5CE18" fontColor="#4b461e">
              <GoPrimitiveDot style={{ fontSize: "14px" }} />
              JavaScript
            </TechButton>
          </Tag>
          <Tag href="https://docs.python.org/3/">
            <TechButton color="#2A5E95" fontColor="#9fcdff">
              <GoPrimitiveDot style={{ fontSize: "14px" }} />
              Python
            </TechButton>
          </Tag>
          <Tag href="https://docs.djangoproject.com/en/4.1/">
            <TechButton color="#0D3C27" fontColor="#50d79a">
              <GoPrimitiveDot style={{ fontSize: "14px" }} />
              Django
            </TechButton>
          </Tag>
          <Tag href="https://developer.mozilla.org/en-US/docs/Web/HTML">
            <TechButton color="#DB351E" fontColor="#ffccc5">
              <GoPrimitiveDot style={{ fontSize: "14px" }} />
              HTML
            </TechButton>
          </Tag>
          <Tag href="https://developer.mozilla.org/en-US/docs/Web/CSS">
            <TechButton color="#145AA3" fontColor="#afd5ff">
              <GoPrimitiveDot style={{ fontSize: "14px" }} />
              CSS
            </TechButton>
          </Tag>
          <Tag href="https://getbootstrap.com/">
            <TechButton color="#5F00F8" fontColor="#f1e9ff">
              <GoPrimitiveDot style={{ fontSize: "14px" }} />
              Bootstrap
            </TechButton>
          </Tag>
        </TechButtonHouse>
      </Info>
      <PortfolioPieces>
        <PortfolioImage
          src={require("../media/braggem_shot1.png")}
          zIndex="20"
          marginLeft="200px"
          marginTop="40px"
          data-aos="fade-right"
        />
        <PortfolioImage
          src={require("../media/braggem_shot2.png")}
          zIndex="10"
          marginTop="80px"
          data-aos="fade-left"
        />
      </PortfolioPieces>
    </PortfolioSection>
  );
}

export default Portfolio;
