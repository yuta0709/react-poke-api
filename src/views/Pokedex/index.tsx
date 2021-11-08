import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";

type PokedexProps = RouteComponentProps<{ name: string }>;

const Pokedex: FC<PokedexProps> = (props) => {
  return (
    <div>
      <div>{props.match.params.name}</div>
    </div>
  );
};

export default Pokedex;
