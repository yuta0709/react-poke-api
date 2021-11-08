import { sprintf } from "sprintf-js";
import * as apiPaths from "../constants/apiPaths";

export const getPokedexPath = (name: string): string => {
  return sprintf(apiPaths.pokedex, name);
};
