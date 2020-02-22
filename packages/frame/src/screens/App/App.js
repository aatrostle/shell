import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";

import Wrapper from "./components/Wrapper";
// import Navigation from './components/Navigation';

import Base from "./screens/Base";
// import Loading from './screens/Loading';
// import Welcome from './screens/Welcome';
import Settings from "./screens/Settings";

import app from "./store";
import theme from "./config/theme";

const store = createStore(app);

// TODO where did this go…
// const imageUrl =
//   "https://camo.githubusercontent.com/209bdea972b9b6ef90220c59ecbe66d35ffefa8a/68747470733a2f2f63646e2e7261776769742e636f6d2f746b6834342f656d6f74696f6e2f6d61737465722f656d6f74696f6e2e706e67";

export default () => (
  <Fragment>
    <Global
      styles={css`
        html,
        body {
          margin: 0;
          padding: 0;
          height: 100%;
        }

        html {
          box-sizing: border-box;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        #root {
          // NOTE where did I get this, what is it for?
          // height: auto !important;

          height: 100%;
          min-height: 100%;
        }

        body {
          font-family: sans-serif;
        }
      `}
    />
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Route exact path={"/"} component={Base} />

            {/* NOTE consider rendering loading first which would redirect once done loading? */}
            {/* <Route exact path={'/'} component={Loading} /> */}

            {/* <Navigation /> */}
            {/* NOTE other routes here */}
            <Route path={"/settings"} component={Settings} />
          </Wrapper>
        </ThemeProvider>
      </Router>
    </Provider>
  </Fragment>
);
