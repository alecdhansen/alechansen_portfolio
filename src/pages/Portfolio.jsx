import {
  PortfolioSection,
  PortfolioHeader,
  Info,
  PortfolioPieces,
  BackgroundText,
  PortfolioText,
  TechButton,
  Tag,
  TechButtonHouse,
  PortfolioImage,
  PortfolioTitle,
  PortfolioItemInfo,
  PortfolioPiece,
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
    <>
      <PortfolioSection>
        <Info>
          <BackgroundText>PORTFOLIO PORTFOLIO</BackgroundText>
          <PortfolioHeader data-aos="fade-right">Portfolio</PortfolioHeader>
          <PortfolioText marginTop="30px" width="85%">
            Here are three projects I built during my time at Carolina Code
            School. I'm always building, wait until you see what I add next!
          </PortfolioText>
          <PortfolioText marginTop="0px" width="85%">
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
          <PortfolioPiece>
            <PortfolioItemInfo alignItems="flex-start">
              <PortfolioTitle>Braggem</PortfolioTitle>
              <PortfolioText>
                Braggem was built to provide users an exciting experience while
                following the NBA season. Predict game winners, view
                leaderboard, challenge other users, and customize your profile
                while showcasing your game-winner picking skills.
              </PortfolioText>
              <Tag href="https://braggem.herokuapp.com/">
                <TechButton fontColor="#254D79" color="#489ffb">
                  View Live
                </TechButton>
              </Tag>
            </PortfolioItemInfo>
            <PortfolioItemInfo alignItems="center">
              <PortfolioImage
                src={require("../media/braggem.png")}
                data-aos="fade-left"
              />
            </PortfolioItemInfo>
          </PortfolioPiece>
          <PortfolioPiece>
            <PortfolioItemInfo alignItems="flex-start">
              <PortfolioTitle>Newspaper Application</PortfolioTitle>
              <PortfolioText>
                Braggem was built to provide users an exciting experience while
                following the NBA season. Predict game winners, view
                leaderboard, challenge other users, and customize your profile
                while showcasing your game-winner picking skills.
              </PortfolioText>
              <Tag href="https://braggem.herokuapp.com/">
                <TechButton fontColor="#254D79" color="#489ffb">
                  View Live
                </TechButton>
              </Tag>
            </PortfolioItemInfo>
            <PortfolioItemInfo alignItems="center">
              <PortfolioImage
                src={require("../media/newspaper.png")}
                data-aos="fade-left"
                scale="1.2"
              />
            </PortfolioItemInfo>
          </PortfolioPiece>
          <PortfolioPiece>
            <PortfolioItemInfo alignItems="flex-start">
              <PortfolioTitle>Pixel Perfect</PortfolioTitle>
              <PortfolioText>
                Braggem was built to provide users an exciting experience while
                following the NBA season. Predict game winners, view
                leaderboard, challenge other users, and customize your profile
                while showcasing your game-winner picking skills.
              </PortfolioText>
              <Tag href="https://braggem.herokuapp.com/">
                <TechButton fontColor="#254D79" color="#489ffb">
                  View Live
                </TechButton>
              </Tag>
            </PortfolioItemInfo>
            <PortfolioItemInfo alignItems="center">
              <PortfolioImage
                src={require("../media/pixelperfect.png")}
                data-aos="fade-left"
                scale="1.2"
              />
            </PortfolioItemInfo>
          </PortfolioPiece>
        </PortfolioPieces>
      </PortfolioSection>
    </>
  );
}

export default Portfolio;
