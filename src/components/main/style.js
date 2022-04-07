import styled from "styled-components";
import flag from "../../images/ukraine-7047830_1920.jpg";
// import slide1 from "../../images/1bfe9747a08087d87e0c9ada9af34129.jpeg";
// import slide2 from "../../images/4812efe30adc3a0d1543754065fad9d2.jpeg";
// import slide3 from "../../images/e09fd9c0ae8e32e5ac65f6135d96be11.jpeg";
// import slide4 from "../../images/6c9ec2dc0ea3beeb59d8c4acfc1843e8.jpeg";
// import slide5 from "../../images/e849545ff4fd2ecd76167fb7e5782564.jpeg";


export const FlagImg = styled.img.attrs({
  src: `${flag}`,
})`
display:flex;width: 100%;
`;
export const Page = styled.body`
background-attachment: fixed;
background-position: top;
background-repeat: no-repeat;
background-size: cover;
// background-image:url(${flag});
padding-top: 6%;
font-family: font-family: 'Montserrat', sans-serif;
background-color:black;
`;

export const CarouselContainer = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  border: black 1px solid;
  box-shadow: "10px 10px 5px #4B57CF";
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
background-color:black;
`;

export const StoryDiv = styled.div`
display:flex;
margin: 0;
color: black;
background: #ffffffCC;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
border-radius: 30px;
width: 80%;
padding:2%;
margin:5%;

`;