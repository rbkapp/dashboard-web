import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "contexts/AuthContext";
import { IntegrationsProvider } from "contexts/IntegrationsContext";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import Routes from "./routes";
import theme from "./styles/theme";

import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <IntegrationsProvider>
            <Routes />
          </IntegrationsProvider>
        </AuthProvider>
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;