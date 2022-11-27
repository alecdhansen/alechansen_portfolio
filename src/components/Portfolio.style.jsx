import styled from "styled-components";

export const PortfolioSection = styled.section`
  width: 100%;
  /* height: 500px; */
  padding: 0px 50px;
  display: flex;
  flex-direction: row;
  position: relative;
  margin-top: 100px;
`;

export const Info = styled.div`
  width: 50%;
`;

export const PortfolioTitle = styled.h2`
  font-size: 48px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: #ffffff;
  z-index: 50;
`;

export const PortfolioPieces = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

export const BackgroundText = styled.p`
  font-size: 40px;
  font-family: "Train One", cursive;
  color: #8c9ced1f;
  z-index: 10;
  position: absolute;
  margin-left: -20px;
`;

export const PortfolioText = styled.p`
  font-size: 20px;
  color: #a9b7ff;
  width: 85%;
  margin-top: ${(props) => props.marginTop};
`;

export const ComputerImage = styled.img`
  width: 100%;
  scale: 70%;
`;

export const Tag = styled.a`
  display: flex;
  justify-content: center;
`;

export const TechButton = styled.button`
  padding: 5px 20px;
  max-width: 120px;
  border-radius: 10px;
  margin: 5px 0px;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.color};
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => props.color};
  box-shadow: 3px 3px 6px #343b9d, -3px -3px 6px #343b9d;
`;

export const TechButtonHouse = styled.div`
  width: 75%;
  display: grid;
  padding: 10px 0px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const PortfolioImage = styled.img`
  width: 350px;
  position: absolute;
  border-radius: 10px;
  z-index: ${(props) => props.zIndex};
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  @keyframes fadein {
    0% {
      scale: 1%;
    }
    100% {
      scale: 100%;
    }
  }
  /* animation: fadein 1.5s; */
`;