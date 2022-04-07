import styled from "styled-components";
import flag from "../../images/ukraine-7047830_1920.jpg";
import bg from "../../images/background-2406119_1920.jpg"
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

export const FlagImg = styled.img.attrs({
  src: `${flag}`,
})`
display:flex;
object-fit:cover;
width: 100%;

`;

export const Page = styled.body`
background-attachment: fixed;
background-position: top;
background-repeat: no-repeat;
background-size: cover;
background-image:url(${bg});
padding-top: 10%;
font-family: font-family: 'Montserrat', sans-serif;
background-color:black;
`;

export const CarouselContainer = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  border: black 2px solid;
  box-shadow: "10px 10px 5px #4B57CF";
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StoryDiv = styled.div`
  display: flex;
  color: black;
  background: #ffffffcc;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: 80%;
  padding: 5%;
  margin: 10% 0;
`;

export const StoryHeaderDiv = styled.div`
  display: flex;
  margin-bottom: 3%;
  color: black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const HeaderText = styled.h1`
  display: flex;
  font-weight: 600;
  color: black;
  text-align: center;
`;

export const StoryText = styled.p`
  display: flex;
  margin: 0;
  color: black;
  text-align: left;
  line-height: 2.5;

`;

export const ContentRow = styled.div`
display:flex;
flex-direction: row;
flex-wrap: nowrap;
padding: 3% 0;
background: white;
width: 100%;
`;

export const HelpHeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const HelpDiv = styled.div`
  display: flex;
  color: black;
  background: #ffffffcc;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 0 5%;
  margin: 5%;
`;

export const ItemList = styled.ul`
  list-style-type: square;
  text-align: left;
`;

export const Items = styled.li`
padding: 5%;
`;

export const Split = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 80%;

`;

export const ItemCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;

`;

export const Bold = styled.p`
font-weight:500;
`;

export const ListHead = styled.p`
display:flex;
font-weight:500;
`;

export const ListHeadDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 80%;
`;

export const CenterAddress = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
  font-weight:500;
  margin: 5% 0;
  line-height:1.5;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: #4166f5;
  border-top: yellow 3px solid;
  padding: 2%;
  width: 100%;
  color: white;
`;

export const FooterText = styled.p`
  display: flex;
  font-size: 0.8rem;
`;


export const GitHub = styled(FaGithub)`
  display: flex;
  font-size: 1.5rem;
  padding: 0 2%;
`;

export const Web = styled(FaGlobe)`
  display: flex;
  font-size: 1.2rem;
`;