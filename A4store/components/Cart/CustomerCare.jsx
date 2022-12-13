import {Box, Button, Image, Text} from "@chakra-ui/react";
import React from "react";

const CustomerCare = () => {
  return (
    <Box
      mt={"4"}
      mb={"10"}
      display={"flex"}
      flexDir={{base: "column", md: "column", lg: "row"}}
      gap={3}
      border={"2px solid gray"}
    >
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems="center"
        // p={"0px 44px"}
        w={{base: "100%", lg: "30%"}}
        bg={"gray.300"}
        p={"0px 20px"}
        gap={2}
      >
        <Box borderRadius={"1rem"} bg="black">
          <Image
            borderRadius={"4rem"}
            w={"20"}
            src="/cart_images/skincare.png"
          ></Image>
        </Box>
        <Box>
          <Text fontSize={23}>Live Chat</Text>
          <Text fontSize={14}>
            Our operators are{" "}
            <span style={{color: "green", fontWeight: "500"}}>Online</span>
          </Text>
        </Box>
      </Box>
      <Box
        w={{base: "100%", lg: "70%"}}
        textAlign="center"
        display="flex"
        flexDir={"column"}
        justifyContent="center"
        p={2}
        gap={2}
      >
        <Text fontSize={{base: 12,md:14}}>
          Average connection time 25 secs
        </Text>
        <Button
          bg={"black"}
          color="white"
          _hover={{bg: "white", color: "black", border: "2px solid "}}
          borderRadius="none"
        >
          Start Chat
        </Button>
      </Box>
    </Box>
  );
};

export default CustomerCare;
