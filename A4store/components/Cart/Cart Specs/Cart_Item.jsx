import {
  Button, CloseButton,
  Flex, HStack, Input,
  Link, useToast
} from "@chakra-ui/react";
import axios from "axios";
import * as React from "react";
import { CartProductMeta } from "./CartProuctm";
import { PriceTag } from "./Cart_Price";
const QuantitySelect = (props) => {
  const [Value, SetValue] = React.useState(props.quantity);
  const toast = useToast();
  const handleChange = ({target}) => {
    // Value > props.quantity ? SetValue(props.qty) : SetValue(target.value);
    // increment(props.cartid, "add", props.prdid);
  };

  console.log(props.value);
  const increment = async (id, query, prdid) => {
    try {
      const body = {q: query, prd_id: prdid};
      if (body.q == "add") {
        SetValue(props.quantity + 1);
      } else {
        SetValue(props.quantity - 1);
      }

      await axios
        .put(process.env.Cart_Route + id, body)
        .then((res) => console.log(res));
      props.updateData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {" "}
      <HStack maxW="150px">
        <Button
          onClick={() => increment(props.cartid, "add", props.prdid)}
          // {...inc}
        >
          +
        </Button>
        <Input
          value={Value}
          onChange={handleChange}
          // {...input}
        />
        <Button
          isDisabled={Value == 1}
          onClick={() => increment(props.cartid, "remove", props.prdid)}
          // {...dec}
        >
          -
        </Button>
      </HStack>
    </>
  );
};

export const CartItem = (props) => {
  const [refresh, setRefresh] = React.useState(false);
  const toast = useToast();
  const {
    isGiftWrapping,
    name,
    category,
    qty,
    image,
    currency,
    price,
    quantity,
    id,
    _id,
    updateData,
  } = props;
  React.useEffect(() => {
    console.log(refresh);
  }, [refresh]);
  const handleDelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(process.env.Cart_Route+ id);
      // console.log("res", res);
      updateData();
     toast({
    title: "Deleted",
    position: "top",
    status: "warning",
    duration: 3000,
    isClosable: true,
  });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={name}
        category={category}
        image={image}
        isGiftWrapping={isGiftWrapping}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        // align={"center"}
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <QuantitySelect
          value={qty}
          quantity={quantity}
          cartid={id}
          prdid={_id}
          updateData={updateData}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        />
        <PriceTag price={price} currency={currency} />
        <CloseButton
          aria-label={`Delete ${name} from cart`}
          onClick={() => handleDelete(id)}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Link
          fontSize="sm"
          onClick={() => handleDelete(id)}
          textDecor="underline"
        >
          Delete
        </Link>
        <QuantitySelect
          value={qty}
          quantity={quantity}
          cartid={id}
          prdid={_id}
          updateData={updateData}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        />
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  );
};
