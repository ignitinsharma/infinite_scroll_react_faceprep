import React, { useState, useEffect } from "react";
import {
  Box,
  Skeleton,
  useToast,
  Text,
  Flex,
  Image,
  Spacer,
} from "@chakra-ui/react";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const fetchUserLimit = 20;

  const FetchAllUsers = () => {
    try {
      setLoading(true);
      fetch(`https://randomuser.me/api/?results=${fetchUserLimit}`)
        .then((data) => data.json())
        .then((data) => {
          setUsers((prevUsers) => [...prevUsers, ...data.results]);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load users.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  /* for Fetching when page first time rendor */
  useEffect(() => {
    FetchAllUsers();
  }, []);

  /* when user scroll then we want data then this use effect trigger */
  useEffect(() => {
    const handleScroll = () => {
      /* 
      window.innerHeight represents the height of the browser's 
      viewport (the visible portion of the web page) in pixels.

      window.pageYOffset represents the vertical scroll position of the page, 
      indicating how far the user has scrolled from the top of the page.

      document.documentElement.scrollHeight represents the total height of 
      the entire document, including the content that extends beyond the viewport.
      */
      if (
        window.innerHeight + window.pageYOffset >=
        document.documentElement.scrollHeight - 20

        /* 
        this condition checks if the sum of the viewport height and scroll position is 
        greater than or equal to the total height of the document minus 20 pixels.
        */
      ) {
        /* if loading is false meaning now we can fetch data and but after delay of 1 sec 
            so at that time i wanna show loading to thats why i'm making loading True inside this... condition
        */
        if (!loading) {
          setLoading(true);
          setTimeout(() => {
            FetchAllUsers();
          }, 1000);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <Box height="auto" bg="rgba(0, 0, 0, 0)" pt={"5rem"} maxW="320px" mx="auto">
      <Box h={"100vh"} autos p={0}>
        {users.map((user, index) => (
          <Box
            key={index}
            _hover={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
              transition: "0.3s ease-in-out",
            }}
            cursor="pointer"
            py={2}
            px="0.5rem"
            borderRadius="8px"
            borderBottom="1px solid #ccc"
          >
            <Flex alignItems="center" justifyContent={"space-between"}>
              <Text fontWeight={"bold"} fontSize={"1.1rem"}>
                {user.name.first} {user.name.last}
              </Text>
              <Image
                borderRadius="full"
                boxSize="50px"
                src={user.picture.large}
                alt={user.name.first}
                objectFit={"cover"}
              />
            </Flex>
          </Box>
        ))}
      </Box>
      {loading && (
        <Box textAlign="center" mt={4}>
          {/*creates a new array with a length of 10. if we are not 
            filing the value so array is not irrable becuase of no value*/}

          {new Array(10).fill(0).map((undefined, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" p={4}>
              <Flex alignItems="center">
                <Skeleton height="30px" width="100px" mr={2} />
                <Spacer />
                <Skeleton height="40px" width="40px" />
              </Flex>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Home;
