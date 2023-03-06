import React from "react";
import {
  Box,
  Img,
  Text,
  Flex,
  Button,
  Avatar,
  Heading,
  Popover,
  PopoverBody,
  PopoverArrow,
  PopoverHeader,
  PopoverContent,
  PopoverTrigger,
  useColorModeValue,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  let isAuth = JSON.parse(localStorage.getItem("isAuth")) || false;
  let logindata = JSON.parse(localStorage.getItem("logindata"));

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.setItem("isAuth", false);
    navigate("/");
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
            {isAuth ? (
              <Popover placement="right">
                <PopoverTrigger>
                  <BsPersonCircle
                    style={{
                      height: "30px",
                      width: "30px",
                      marginRight: " 45px",
                    }}
                  />
                </PopoverTrigger>
                <PopoverContent marginLeft="350%">
                  <PopoverHeader fontWeight="semibold" bg="teal.500">
                    <Flex>
                      <Avatar
                        bg={"white"}
                        color={"teal"}
                        size="md"
                        margin="2px 5px"
                        name={`${logindata.name}`}
                      />
                      <Heading
                        color="white"
                        as="h3"
                        size="lg"
                        mt="5px"
                        ml="5px"
                        textAlign={"center"}
                      >
                        Hi , {logindata.name}
                      </Heading>
                    </Flex>
                  </PopoverHeader>
                  <PopoverArrow />
                  <PopoverCloseButton color="white" />
                  <PopoverBody>
                    <Text
                      textAlign={"center"}
                      onClick={handleLogout}
                      cursor={"pointer"}
                      color={"orange.400"}
                    >
                      Logout
                    </Text>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            ) : (
              <Flex>
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
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
