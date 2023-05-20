import React, { useContext, useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Loginpng from "../assets/login.svg";
import { AuthContext } from "../AuthContext/AuthContextProvider";

const Login = () => {
  const { loginFunction } = useContext(AuthContext);
  const toast = useToast();
  const navigate = useNavigate();
  const [loginFormData, setloginFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setloginFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (loginFormData.email == "foo" && loginFormData.password == "bar") {
      toast({
        title: "Login Successful..😁",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      loginFunction();
      navigate("/home");
    } else {
      toast({
        title: "Wrong credential.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box pt={"5rem"}>
      <Box textAlign={"center"} py="1rem">
        <Text
          color="var(--main-color)"
          cursor={"pointer"}
          fontSize={{ lg: "2rem", md: "1.3rem", sm: "1rem" }}
          fontWeight={"bold"}
        >
          {" "}
        </Text>
      </Box>
      <Flex
        mt={{ lg: "2rem", md: "1rem", sm: "1rem" }}
        justifyContent={"center"}
        display={{ lg: "flex", md: "block", sm: "block" }}
        w="90%"
        gap="1rem"
        mx="auto"
      >
        <Box
          borderRadius={"8px"}
          height={"fit-content"}
          w={{
            lg: "30%",
            md: "90%",
            sm: "90%",
          }}
          py={"3rem"}
          px="2rem"
          shadow={
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"
          }
        >
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={loginFormData.email}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={loginFormData.password}
              onChange={handleInputChange}
            />
          </FormControl>

          <Button
            onClick={handleSubmit}
            color={"white"}
            bg={"#13B987"}
            mt={4}
            _hover={{ bg: "black" }}
          >
            Log In
          </Button>
        </Box>
        <Box mt="2rem">
          <img src={Loginpng} alt="" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
