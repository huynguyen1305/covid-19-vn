import { createGlobalStyle, DefaultTheme } from "styled-components";

export const themeLight: DefaultTheme = {
  colors: {
    primary: "red",
    text: "black",
    background: "white",
    link: "yellow",
    component: "whitesmoke",
  },
};
export const themeDark: DefaultTheme = {
  colors: {
    text: "#fff",
    background: "#272822",
    link: "crimson",
    component: "gray",
    primary: "yellow",
  },
};

const GlobalStyles = createGlobalStyle`
   :root{
     --color-text: ${(props) => props.theme.colors.text};
     --color-background:  ${(props) => props.theme.colors.background};
     --color-link: #f5222d;
     --color-component: ${(props) => props.theme.colors.component}
   }
   body{
     transition: 0.25s linear all;
   }
`;

export default GlobalStyles;
