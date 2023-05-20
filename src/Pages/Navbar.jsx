import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContextProvider";

const Links = [
  {
    title: "Home",
    id: 1,
    path: "/",
  },
  {
    title: "Mens",
    id: 2,
    path: "/mens",
  },
  {
    title: "Women",
    id: 3,
    path: "/women",
  },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth, logoutFunction } = useContext(AuthContext);

  return (
    <>
      <Box
        zIndex={9999}
        w={"100%"}
        position={"fixed"}
        bg={useColorModeValue("white")}
        px={4}
      >
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box spacing={8} alignItems={"center"}>
            <a style={{ fontWeight: "500" }} href="/" className="logo">
              <Text fontSize="1.3rem" fontWeight={"bold"}>
                Infinity Scroll
              </Text>
            </a>
          </Box>
          <Box>
            {isAuth ? (
              <Button
                onClick={() => logoutFunction()}
                _hover={{ bg: "black" }}
                bg={"#13B987"}
                color={"white"}
              >
                Logout
              </Button>
            ) : null}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
