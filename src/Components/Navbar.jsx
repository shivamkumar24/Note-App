import React from "react";
import {
  Box,
  Flex,
  // Link,
  Button,
  // useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
  Img,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Img h="50px" width="100px" src="Logo.png" alt="logo" />

          <Heading>MakeTodo</Heading>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
