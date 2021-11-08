export interface Pokedex {
  name: string;
  url: string;
}

export interface PokedexList {
  count: number;
  next?: string;
  previous?: string;
  results: Pokedex[];
}
