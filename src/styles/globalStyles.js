import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-image: url("../assets/home/background-home-desktop.jpg");
    background-color: #cccccc;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    
  }
`;

export const colors = {
    darkBlue: "#0B0D17",
    lightBlue: "#D0D6F9",
    white: "#FFFFFF",
};
