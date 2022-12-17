import React, {useEffect} from "react";
import {Heading, Radio, RadioGroup, Stack} from "@chakra-ui/react";

const RadioG = () => {
  const [value, setValue] = React.useState("1");
  const handlechange = (e) => {
    setValue(e);
    localStorage.setItem("mode", JSON.stringify(value));
    // setValue(e.target)
  };

  return (
    <RadioGroup onChange={handlechange} value={value}>
      <Heading mt={3} fontSize={32} fontWeight={200}>
        Payment via
      </Heading>
      <Stack direction="row">
        <Radio value="0">Paypal</Radio>
        <Radio value="1">Debit/ Credit Card</Radio>
        <Radio value="2">COD</Radio>
      </Stack>
    </RadioGroup>
  );
};

export default RadioG;
