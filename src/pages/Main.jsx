import {
  AppContainer,
  WelcomeText,
} from "../components/MainComponents.style.jsx";

function Main() {
  return (
    <>
      <img
        src={require("../media/background.jpg")}
        alt="background"
        style={{ position: "absolute" }}
      />
      <AppContainer>
        <WelcomeText>Hello There.</WelcomeText>
      </AppContainer>
    </>
  );
}
export default Main;
