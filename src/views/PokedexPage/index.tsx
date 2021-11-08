import { Text } from "@chakra-ui/react";
import axios from "axios";
import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Pokedex } from "../../common/api/types";

type PokedexProps = RouteComponentProps<{ name: string }> & {
  pokedex?: Pokedex;
};

const PokedexPage: FC<PokedexProps> = (props) => {
  return (
    <div>
      <Text>{props.match.params.name}</Text>
    </div>
  );
};

export default PokedexPage;
