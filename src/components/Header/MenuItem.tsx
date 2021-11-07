import { Text } from "@chakra-ui/layout";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  children?: ReactNode;
  path: string;
}

const MenuItem = (props: MenuItemProps) => {
  return (
    <Link to={props.path}>
      <Text>{props.children}</Text>
    </Link>
  );
};

export default MenuItem;
