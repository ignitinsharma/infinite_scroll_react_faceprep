import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Skeleton,
  UnorderedList,
  ListItem,
  Spinner,
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

  useEffect(() => {
    FetchAllUsers();
  }, []);

  const FetchAllUsers = () => {
    try {
      setLoading(true);
      fetch(`https://randomuser.me/api/?results=12`)
        .then((data) => data.json())
        .then((data) => {
          /* we are doing that way because we want every time when user fetch new data
          so that data should be come into new array and also we want previous data as well...
          */
          setUsers((prevusers) => [...prevusers, ...data.results]);
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

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.pageYOffset >=
        document.documentElement.offsetHeight
      ) {
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
  }, []);

  console.log(users);
  return (
    <Box pt={"5rem"} maxW="320px" mx="auto">
      <Box p={0}>
        {users.map((user, index) => (
          <Box key={index} py={2} borderBottom="1px solid #ccc">
            <Flex justifyContent={"space-between"}>
              <Text fontWeight={"bold"} fontSize={"1.1rem"}>
                {user.name.first} {user.name.last}
              </Text>
              <Image
                borderRadius="full"
                boxSize="50px"
                src={user.picture.large}
                alt="Dan Abramov"
                objectFit={"cover"}
              />
            </Flex>
          </Box>
        ))}
      </Box>
      {loading && (
        <Box textAlign="center" mt={4}>
          {(() => {
            const skeletonElements = [];
            for (let i = 0; i < 10; i++) {
              skeletonElements.push(
                <Box key={i} borderWidth="1px" borderRadius="lg" p={4}>
                  <Flex alignItems="center">
                    <Skeleton height="30px" width="100px" mr={2} />
                    <Spacer />
                    <Skeleton height="40px" width="40px" />
                  </Flex>
                </Box>
              );
            }
            return skeletonElements;
          })()}
        </Box>
      )}
    </Box>
  );
};

export default Home;
