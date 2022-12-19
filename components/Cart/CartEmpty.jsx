import {Box, Button, Image, Link, Text} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import Bottomimg from "./Bottomimg";
import CustomerCare from "./CustomerCare";

const CartEmpty = () => {
  //   console.log(data);
  return (
    <>
      <Box p={21} m={"auto"} w={{base: "100vw", md: "90vw"}}>
        <Box>
          {" "}
          <Text borderBottom={"2px solid"} mb={1} fontSize={20}>
            Your Cart
          </Text>
        </Box>
        <Box
          p={[2, 3]}
          display={"flex"}
          flexDir={"column"}
          alignItems="center"
          gap={3}
        >
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontFamily={"initial"}
            fontSize={["lg", "2xl"]}
            fontWeight="bold"
            textAlign={"center"}
          >
            There are currently no items in your cart.
          </Text>
          <Link as={NextLink} href="/" color={"white"}>
            <Button bgColor={"black"} colorScheme="teal" color="white" p={5}>
              Continue Shopping
            </Button>
          </Link>
        </Box>
        <Box>
          <CustomerCare />
        </Box>
        <Box>
          <Bottomimg />
        </Box>
      </Box>
    </>
  );
};

export default CartEmpty;
