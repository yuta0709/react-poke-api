import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as paths from "./common/constants/paths";
import Header from "./components/Header";
import HomePage from "./views/HomePage";
import PokedexIndexPage from "./views/PokedexIndexPage";
import PokedexPage from "./views/PokedexPage";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path={paths.home} component={HomePage} />
        <Route exact path={paths.pokedexIndex} component={PokedexIndexPage} />
        <Route path={`${paths.pokedexIndex}/:name`} component={PokedexPage} />
      </Switch>
    </BrowserRouter>
  </ChakraProvider>
);
