import {
  SectionContainer,
  WelcomeTitle,
  WelcomeText,
  AlecIMG,
  ProfileContainer,
  TextContainer,
} from "../components/Welcome.style.jsx";

function Welcome() {
  return (
    <>
      <SectionContainer>
        <ProfileContainer>
          <TextContainer>
            <WelcomeTitle>Hello There.</WelcomeTitle>
            <WelcomeText>I'm Alec. I'm a software developer.</WelcomeText>
            <WelcomeText>Let me show you what I've built.</WelcomeText>
          </TextContainer>
          <AlecIMG src={require("../media/alec.jpg")}></AlecIMG>
        </ProfileContainer>
      </SectionContainer>
    </>
  );
}
export default Welcome;
