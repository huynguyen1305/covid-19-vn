import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { themeLight, themeDark } from "../styles/GlobalStyles";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setTypeTheme } from "../features/toggleModeTheme/toggleModeThemeSlice";
import { Layout } from "antd";
import AppFooter from "../components/AppFooter/AppFooter";

const { Footer, Content } = Layout;

function getTypeTheme(typeTheme: string) {
  if (typeTheme === "light") {
    return themeLight;
  }
  if (typeTheme === "dark") {
    return themeDark;
  } else return themeLight;
}

const AppWrapper: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const { typeTheme } = useAppSelector((state) => state.toggleModeTheme);
  const theme = getTypeTheme(typeTheme);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localTheme
      ? dispatch(setTypeTheme("dark"))
      : localTheme
      ? dispatch(setTypeTheme(localTheme))
      : dispatch(setTypeTheme("light"));
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout className="App">
        <Content className="AppMain">{children}</Content>
        <Footer className="AppFooter">
          <AppFooter></AppFooter>
        </Footer>
      </Layout>
    </ThemeProvider>
  );
};

export default AppWrapper;
