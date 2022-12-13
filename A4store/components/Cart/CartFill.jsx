import {Box, Text, Alert, AlertIcon} from "@chakra-ui/react";
import React from "react";
import TableData from "./Cart Specs/Table";

const CartFill = () => {
  return (
    <Box p={21} m={"auto"} w={{base: "100vw", md: "90vw"}}>
      <Box>
        {" "}
        <Text mb={1} fontSize={20}>
          Your Cart
        </Text>
        <Alert
          fontSize={{base: 10, md: 15}}
          color={"blue.600"}
          fontWeight={"extrabold"}
          fontFamily={"initial"}
                  lineHeight={{ base: 4 }}
          status="info"
        >
          <AlertIcon />
          Gift yourself an Olaplex Hair Repair Treatment Holiday Kit Worth $90-
          NOW $62 Add To Cart
        </Alert>
      </Box>
      <TableData />
    </Box>
  );
};

export default CartFill;
