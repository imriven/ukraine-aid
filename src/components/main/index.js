import React from "react";
import { Page, MainDiv, CarouselContainer,StoryDiv, FlagImg } from "./style"
// import flag from "../../images/ukraine-7047830_1920.jpg";
// import { Carousel } from "react-bootstrap"
// import slide1 from "../../images/1bfe9747a08087d87e0c9ada9af34129.jpeg"
// import slide2 from "../../images/4812efe30adc3a0d1543754065fad9d2.jpeg";
// import slide3 from "../../images/e09fd9c0ae8e32e5ac65f6135d96be11.jpeg";
// import slide4 from "../../images/6c9ec2dc0ea3beeb59d8c4acfc1843e8.jpeg";
// import slide5 from "../../images/e849545ff4fd2ecd76167fb7e5782564.jpeg";


export default function Main() {
  return (
    <Page>
      <MainDiv>
        <CarouselContainer>
          <FlagImg />
        </CarouselContainer>
        <StoryDiv>
          <p style={{ textAlign: "left", padding: "5%", lineHeight: "2"}}>
            I am Ukrainian and my family is in Ukraine now. Our country is going
            through the hardest time now, communities from all over the world
            are sending humanitarian help to the Ukraine, including our
            Seattle’s Ukrainian community, but everyone is welcome to join! We
            have already collected and sent a lot of donations, but we continue
            to collect further, as the war continues in Ukraine, thousands of
            people were left without homes, hundreds and hundreds of people
            died. People are hiding in basements, bomb shelters, without food,
            clothing and warmth. People suffer, children suffer!
          </p>
        </StoryDiv>
      </MainDiv>
    </Page>
  );
}


