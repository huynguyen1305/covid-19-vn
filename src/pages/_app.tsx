import React from "react";
import type { AppProps } from "next/app";
import { store } from "../app/store";
import { Provider as StoreProvider } from "react-redux";
import AppWrapper from "../app/AppWrapper";

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <StoreProvider store={store}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </StoreProvider>
  );
}
export default App;
