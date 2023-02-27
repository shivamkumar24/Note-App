import React from "react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Heading,
  Img,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Img
            h="50px"
            width="100px"
            src="Logo.png"
            alt="logo"
            onClick={() => navigate("/")}
          />

          <Heading>Note-Book</Heading>

          <Flex alignItems={"center"}>
            <Button
              bg="green.400"
              color="whitesmoke"
              margin="2px 7px"
              fontWeight="bold"
              onClick={handleLogin}
            >
              Login
            </Button>
            <Button
              bg="green.400"
              color="whitesmoke"
              margin="2px 7px"
              fontWeight="bold"
              onClick={handleSignup}
            >
              SignUp
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
