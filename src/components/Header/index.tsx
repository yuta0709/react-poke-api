import { Flex, Stack } from "@chakra-ui/layout";
import React from "react";
import Logo from "./Logo";
import MenuItems from "./MenuItems";
import ColorModeSwitcher from "./ColorModeSwitcher";

const Header = () => {
  return (
    <Flex bg="red.400" padding={5} align="center" justify="space-between">
      <Stack direction="row">
        <Logo />
        <MenuItems></MenuItems>
      </Stack>

      <ColorModeSwitcher></ColorModeSwitcher>
    </Flex>
  );
};

export default Header;
