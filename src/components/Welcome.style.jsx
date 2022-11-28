import styled from "styled-components";

export const BackgroundColor = styled.div`
  height: 5000px;
  width: 100vw;
  position: absolute;
  background-color: #25125c;
  background-image: linear-gradient(
    180deg,
    #25125c 0%,
    #475ab7 37%,
    #4097c5 76%,
    #79bde2 100%
  );
`;

export const SectionContainer = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const WelcomeTitle = styled.h2`
  font-size: 100px;
  font-family: "Pattaya", sans-serif;
  color: #fff;
  align-self: center;
  @keyframes fadein {
    0% {
      color: #ffffff10;
    }
    100% {
    }
  }
  animation: fadein 3s;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 50%;
  padding-left: 30px;
`;

export const WelcomeText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  align-self: center;
  color: #8c9ced;
`;

export const AlecIMG = styled.img`
  clip-path: polygon(28% 0, 100% 0%, 78% 100%, 0% 100%);
  width: 42%;
  @keyframes createBox {
    from {
      margin-left: 1000px;
    }
    to {
    }
  }
  animation: createBox 2.5s ease;
`;
