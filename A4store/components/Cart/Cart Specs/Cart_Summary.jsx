import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import {FaArrowRight} from "react-icons/fa";
import {formatPrice} from "./Cart_Price";
const OrderSummaryItem = (props) => {
  const {label, value, children} = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = ({cartdata, updateData}) => {
  const [total, setTotal] = React.useState(0);
  React.useEffect(() => {
    let s = 0;
    cartdata.map((el) => {
      s += el.quantity * el.product.price;
      // return setTotal((s));
    });
    setTotal(s);
    localStorage.setItem("total", JSON.stringify(s));
  }, [cartdata]);

  // console.log("summ", total);
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(total)} />
        <OrderSummaryItem label="Shipping + Tax">
          <Link href="/order/checkout" textDecor="underline">
            Calculate shipping
          </Link>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <Link href="/order/checkout" textDecor="underline">
            AVATAR
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(total)}
          </Text>
        </Flex>
      </Stack>
      <Link href="/order/checkout">
        <Button
          colorScheme="blue"
          size="lg"
          w={"100%"}
          fontSize="md"
          rightIcon={<FaArrowRight />}
        >
          Checkout
        </Button>
      </Link>
    </Stack>
  );
};
