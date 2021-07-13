import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import Root from "./components/Root";
import theme from "./config/theme";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    height: 100%;
    padding: 0;
    width: 100%;
  }

  body {
    color: ${(props) => props.theme.colors.base};
    font-family: ${(props) => props.theme.fontFamily};
    font-weight: ${(props) => props.theme.fontWeights.regular};
  }
`;

render(
  <BrowserRouter>
    <QueryParamProvider ReactRouterRoute={Route}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Root />
      </ThemeProvider>
    </QueryParamProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
