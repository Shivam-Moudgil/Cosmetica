import {
  CloseButton,
  Flex,
  Input,
  Link,
  HStack,
  Button,
  useNumberInput,
} from "@chakra-ui/react";
import * as React from "react";
import {CartProductMeta} from "./CartProuctm";
import {PriceTag} from "./Cart_Price";
import axios from "axios";
const QuantitySelect = (props) => {
  const {getInputProps, getIncrementButtonProps, getDecrementButtonProps} =
    useNumberInput({
      step: 1,
      defaultValue: props.quantity,
      min: 1,
      max: props.value,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  return (
    <>
      {" "}
      <HStack maxW="150px">
        <Button {...inc}>+</Button>
        <Input {...input} />
        <Button {...dec}>-</Button>
      </HStack>
    </>
  );
};

export const CartItem = (props) => {
  const [refresh, setRefresh] = React.useState(false);

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
    updateData,
  } = props;
  React.useEffect(() => {
    console.log(refresh);
  }, [refresh]);
  const handleDelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete("http://localhost:3000/api/cart/" + id);
      console.log("res", res);
      updateData();
      // alert("Deleted");
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
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        />
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  );
};
