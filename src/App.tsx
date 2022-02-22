import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import Routes from "./routes";
import theme from "./styles/theme";

import "./App.css";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;