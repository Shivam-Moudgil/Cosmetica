import {Image, Td, Tr, Text} from "@chakra-ui/react";
import React from "react";

const Rows = () => {
  const Remove = (id) => {
    alert("Removed");
  };

  return (
    <>
      <Tr textAlign={"center"}>
        <Td textAlign={"center"}>
          <Image m={"auto"} w={20} src="/cart_images/skincare.png" />
        </Td>
        <Td textAlign={"center"}>
          <Text>Data afdf</Text>
        </Td>
        <Td textAlign={"center"}>Rs34</Td>
        <Td textAlign={"center"}>2</Td>
        <Td textAlign={"center"}>Rs68</Td>
        <Td textAlign={"center"} onClick={() => Remove(1)}>
          ❌
        </Td>
      </Tr>
    </>
  );
};

export default Rows;
