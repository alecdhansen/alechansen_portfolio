import {
  SectionContainer,
  WelcomeTitle,
  WelcomeText,
  AlecIMG,
  ProfileContainer,
  TextContainer,
} from "../components/Welcome.style.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Welcome() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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
