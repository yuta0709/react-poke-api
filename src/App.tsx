import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import PokedexIndex from "./views/PokedexIndex";
import Header from "./components/Header";
import * as paths from "./common/constants/paths";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path={paths.home}>
          <Home></Home>
        </Route>
        <Route path={paths.pokedexIndex}>
          <PokedexIndex></PokedexIndex>
        </Route>
      </Switch>
    </BrowserRouter>
  </ChakraProvider>
);
