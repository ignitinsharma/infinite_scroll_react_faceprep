import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Button,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContextProvider";
import logoImage from "../assets/logo_image.jpg";

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
        <Flex
          px="1rem"
          h={20}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Box pl="2rem">
            <a href={isAuth ? "/home" : "/"}>
              <Image
                width={{ lg: "120px", md: "120px", base: "100px" }}
                h="80px"
                objectFit="contain"
                className="navbarImage"
                src={logoImage}
              />
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
                Logout 😶
              </Button>
            ) : (
              <Button
                onClick={() => logoutFunction()}
                _hover={{ bg: "black" }}
                bg={"#13B987"}
                color={"white"}
              >
                Hello.. 😁
              </Button>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
