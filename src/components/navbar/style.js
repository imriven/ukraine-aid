import styled from "styled-components";
import { Heartbeat } from "../animation/keyframes";

export const Button = styled.button`
  display: flex;
  background-image: linear-gradient(
    to right,
    #3d7eaa 0%,
    #ffe47a 51%,
    #3d7eaa 100%
  );
  margin: 10px;
  padding: 10px 35px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: blue;

  border-radius: 10px;
  display: block;
  &:hover {
    background-position: right center;
    color: yellow;
    text-decoration: none;
  }
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #4166f5;
  border-bottom: yellow 5px solid;
  padding: 2%;
`;

export const NavbarBrand = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
`;

export const Pulse = styled.div`
  display: flex;
  justify-content: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  animation: ${Heartbeat} 1.5s ease-in-out infinite both;
  webkit-animation: ${Heartbeat} 1.5s ease-in-out infinite both;
  width: 20%;
`;
