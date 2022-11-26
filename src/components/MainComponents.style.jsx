import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  @keyframes createBox {
    from {
      transform: scale(5);
    }
    to {
      transform: scale(1);
    }
  }
  animation: createBox 1s;
`;

export const WelcomeText = styled.h2`
  font-size: 100px;
  color: #fff;
`;

// export const AlecIMG = styled.img`
//   border-radius: 300px 40px 300px 40px;
//   scale: 100%;
//   @keyframes createBox {
//     from {
//       transform: scale(10);
//     }
//     to {
//       transform: scale(1);
//     }
//   }
//   animation: createBox 1s;
//   box-shadow: -16px -16px 32px #d7d5d1, 16px 16px 32px #bdbcba;
// `;
