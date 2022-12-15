import {HStack, Text, useColorModeValue as mode} from "@chakra-ui/react";
import * as React from "react";
export function formatPrice(value) {
    // const { locale = "en-US", currency = "INR" } = opts;
    console.log(value);
  const formatter = new Intl.NumberFormat("en-US", {
    currency:"INR",
    style: "currency",
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
}

export const PriceTag = (props) => {
  const {price, currency, salePrice, rootProps, priceProps} =
    props;
  console.log("tag", currency);
  return (
    <HStack spacing="1" {...rootProps}>
      <Price isOnSale={!!salePrice} textProps={priceProps}>
        {formatPrice(price, {
          currency,
        })}
      </Price>
    </HStack>
  );
};
const Price = (props) => {
  const {isOnSale, children, textProps} = props;
  // console.log(isOnSale, children, textProps);
  const defaultColor = mode("gray.700", "gray.400");
  const onSaleColor = mode("gray.400", "gray.700");
  const color = isOnSale ? onSaleColor : defaultColor;
  return (
    <Text
      as="span"
      fontWeight="medium"
      color={color}
      textDecoration={isOnSale ? "line-through" : "none"}
      {...textProps}
    >
      {children}
    </Text>
  );
};
