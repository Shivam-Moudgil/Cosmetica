import {Box, Button, Image, Text} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import CustomerCare from "./CustomerCare";
import {data} from "./Images";

const CartEmpty = () => {
  //   console.log(data);
  return (
    <>
          <Box p={21} m={"auto"} w={{ base:"100vw", md:"90vw"}}>
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
          <Button bgColor={"black"} colorScheme="teal" color="white" p={5}>
            Continue Shopping
          </Button>
        </Box>
              <Box>
                  <CustomerCare/>
</Box>
        <Box
          display={"grid"}
                  gridTemplateColumns={{
                    "md":  "repeat(2,1fr)",
                      "lg": "repeat(3,1fr)",
                  }}
                  gap={10}
                  mt={3}
        >
          {data.map((el, i) => {
            return (
              <Box key={i}>
                <Link href={el.link}>
                  {" "}
                  <Image src={el.image} />
                </Link>
                <Text
                  fontSize={"xl"}
                  fontFamily="cursive"
                  fontWeight={"medium"}
                >
                  {el.name}
                </Text>
                <Link href={el.link}>
                        <Text borderBottom={"2px"} _hover={{ "color": "red" } } fontSize={21}>
                    Shop Now
                  </Text>
                </Link>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default CartEmpty;
