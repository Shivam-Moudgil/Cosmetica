import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import Bottomimg from "./Bottomimg";
import {CartItem} from "./Cart Specs/Cart_Item";
import {CartOrderSummary} from "./Cart Specs/Cart_Summary";
import CustomerCare from "./CustomerCare";
// import { cartData } from "./Cart Specs/_data";
export default function CartFill({cartdata, updateData}) {
  console.log("inner", cartdata);
  return (
    <>
      <Box
        maxW={{
          base: "3xl",
          lg: "7xl",
        }}
        mx="auto"
        px={{
          base: "4",
          md: "8",
          lg: "12",
        }}
        py={{
          base: "6",
          md: "8",
          lg: "12",
        }}
      >
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          align={{
            lg: "flex-start",
          }}
          spacing={{
            base: "8",
            md: "16",
          }}
        >
          <Stack
            spacing={{
              base: "8",
              md: "10",
            }}
            flex="2"
          >
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart ({cartdata.length})
            </Heading>

            <Stack spacing="6">
              {/* {console.log(cart)} */}
              {cartdata.length !== 0 &&
                cartdata.map((item) => {
                  return (
                    <CartItem
                      key={item._id}
                      updateData={updateData}
                      {...item.product}
                      quantity={item.quantity}
                      id={item._id}
                    />
                  );
                })}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary cartdata={cartdata} updateData={updateData} />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link href="/" color={mode("blue.500", "blue.200")}>
                Continue shopping
              </Link>
            </HStack>
          </Flex>
        </Stack>
        {/* <CustomerCare /> */}
        <Bottomimg />
      </Box>
    </>
  );
}
