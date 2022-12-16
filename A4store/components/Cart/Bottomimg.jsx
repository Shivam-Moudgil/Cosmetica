import { Box, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { data } from "./Images";
const Bottomimg = () => {
  return (
    <>
      <Box
        display={"grid"}
        gridTemplateColumns={{
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
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
              <Text fontSize={"xl"} fontFamily="cursive" fontWeight={"medium"}>
                {el.name}
              </Text>
              <Link href={el.link}>
                <Text
                  borderBottom={"2px"}
                  _hover={{color: "red"}}
                  fontSize={21}
                >
                  Shop Now
                </Text>
              </Link>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Bottomimg;
