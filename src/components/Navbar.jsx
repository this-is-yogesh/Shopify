

import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

const Navbar = () => {
  return (
    <div className="navbar">
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button variant={"unstyled"} color={"white"} padding={"5px"}>
        <Link to="/">All Products</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} padding={"5px"}>
        <Link to="/books">Books </Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} padding={"5px"}>
        <Link to="/kirtans">Kirtans </Link>
      </Button>
    </HStack>
    </div>
  );
};

export default  Navbar;

