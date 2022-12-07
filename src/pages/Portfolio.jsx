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
          <PortfolioText marginTop="30px">
            Here are three projects I built during my time at Carolina Code
            School. I'm always building, wait until you see what I add next!
          </PortfolioText>
          <PortfolioText marginTop="30px">
            All of these projects are built using the following technologies:
          </PortfolioText>
          <PortfolioText>React Js</PortfolioText>
          <PortfolioText>JavaScript</PortfolioText>
          <PortfolioText>Python</PortfolioText>
          <PortfolioText>Django</PortfolioText>
          <PortfolioText>HTML</PortfolioText>
          <PortfolioText>CSS</PortfolioText>
          <PortfolioText>Bootstrap</PortfolioText>
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
                scale="0.9"
              />
            </PortfolioItemInfo>
          </PortfolioPiece>
          <PortfolioPiece>
            <PortfolioItemInfo alignItems="flex-start">
              <PortfolioTitle>Newspaper Application</PortfolioTitle>
              <PortfolioText>
                Full CRUD application designed for three distinct user types:
              </PortfolioText>
              <PortfolioText>
                ● The general user is able to view articles on the homepage.
              </PortfolioText>
              <PortfolioText>
                ● Authors are able to write articles and submit for review.
              </PortfolioText>
              <PortfolioText>
                ● The editor is able to approve articles for publication or
                reject those articles. He also can archive articles that are
                live on the homepage and view the archives.
              </PortfolioText>
            </PortfolioItemInfo>
            <PortfolioItemInfo alignItems="center">
              <PortfolioImage
                src={require("../media/newspaper.png")}
                data-aos="fade-left"
                scale="1.2"
                marginLeft="80px"
              />
            </PortfolioItemInfo>
          </PortfolioPiece>
          <PortfolioPiece>
            <PortfolioItemInfo alignItems="flex-start">
              <PortfolioTitle>Pixel Perfect</PortfolioTitle>
              <PortfolioText>
                Responsive recreation of a blog site that mirrors every element
                down to the pixel. This project showcases my skill to combine
                HTML and CSS to match exactly the request of a client.
              </PortfolioText>
              <Tag href="https://alecdhansen.github.io/pixel-perfect/">
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
                marginLeft="80px"
              />
            </PortfolioItemInfo>
          </PortfolioPiece>
        </PortfolioPieces>
      </PortfolioSection>
    </>
  );
}

export default Portfolio;
