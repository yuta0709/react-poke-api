import { Stack } from "@chakra-ui/layout";
import React from "react";
import * as paths from "../../common/constants/paths";
import MenuItem from "./MenuItem";

const MENU_ITEMS = [
  {
    name: "Home",
    path: paths.home,
  },
  {
    name: "Pokedex",
    path: paths.pokedexIndex,
  },
];

const MenuItems = () => {
  return (
    <Stack direction="row" spacing="8" align="center">
      {MENU_ITEMS.map((item) => {
        return (
          <MenuItem key={item.name} path={item.path}>
            {item.name}
          </MenuItem>
        );
      })}
    </Stack>
  );
};

export default MenuItems;
