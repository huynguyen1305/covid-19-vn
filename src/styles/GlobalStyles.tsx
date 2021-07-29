import { createGlobalStyle, DefaultTheme } from "styled-components";

export const themeLight: DefaultTheme = {
  colors: {
    text: "black",
    background: "white",
    itemHover: "#f5f5f5",
  },
};
export const themeDark: DefaultTheme = {
  colors: {
    text: "#fff",
    background: "#212121",
    itemHover: "#141414",
  },
};

const GlobalStyles = createGlobalStyle`
   :root{
     --color-text: ${(props) => props.theme.colors.text};
     --color-background:  ${(props) => props.theme.colors.background};
     --color-item-hover: ${(props) => props.theme.colors.itemHover};
     --color-total-case: #f5222d;
     --color-today-case: #ffccc7;
     --color-today-recovering: #fff1b8;
     --color-total-recovering:#faad14;
     --color-today-recovered: #d9f7be;
     --color-total-recovered: #52c41a;
     --color-today-death: #d9d9d9;
     --color-total-death: #434343;
   }
   body {
    transition: 0.25s linear all;
   }
   ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: crimson;
    outline: 1px solid slategrey;
  }
  /* For AppBody alway height 100vh */
  .App {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }
  .AppMain {
    flex: 1;
    overflow: hidden;
    background-color: transparent;
  }
  .AppFooter {
    box-shadow: rgb(0 0 0 / 30%) 0px 0px 4px 0px;
    padding: 1rem;
  }
  .ant-avatar{
    background: transparent;
  }
  .ant-card{
    border-radius: 0.5rem;
  }
  .ant-statistic-title {
    color: currentColor;
    opacity: 0.9;
  }
  .ant-statistic-content {
    color: currentColor;
  }
  .ant-card-head{
    padding: 0 1rem;
  }
  .ant-card-body{
    padding: 1rem;
  }
  .ant-divider-horizontal{
    margin: 1rem 0;
  }
  .ant-divider{
    background: var(--color-text);
  }
  .ant-layout{
    background: ${(props) => props.theme.colors.background};
  }
`;

export default GlobalStyles;
