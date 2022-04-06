
import { keyframes } from "styled-components";


export const Heartbeat = keyframes`

  10% {
            transform: scale(0.91);
    webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }

`;

//animation
// .heartbeat {
// 	-webkit-animation: heartbeat 1.5s ease-in-out infinite both;
// 	        animation: heartbeat 1.5s ease-in-out infinite both;
// }