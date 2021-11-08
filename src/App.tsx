import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as paths from "./common/constants/paths";
import Header from "./components/Header";
import Home from "./views/Home";
import Pokedex from "./views/Pokedex";
import PokedexIndex from "./views/PokedexIndex";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path={paths.home}>
          <Home></Home>
        </Route>
        <Route exact path={paths.pokedexIndex}>
          <PokedexIndex></PokedexIndex>
        </Route>
        <Route path={`${paths.pokedexIndex}/:name`} component={Pokedex} />
      </Switch>
    </BrowserRouter>
  </ChakraProvider>
);
