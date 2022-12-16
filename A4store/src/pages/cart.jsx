import {Button} from "@chakra-ui/react";
import React, {useState} from "react";
import CartEmpty from "../../components/Cart/CartEmpty";
import {CartFill} from "../../components/Cart/CartFill";

const cart = () => {
  const [cart, setCart] = useState(false);
  return (
    <>
      <Button onClick={() => setCart(!cart)}>Change</Button>
      {cart ? <CartFill /> : <CartEmpty />}
    </>
  );
};

export default cart;
