import React, { useState } from "react";
import {
  Box,
  Input,
  Text,
  Checkbox,
  Button,
  Icon,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { AiFillFacebook } from "react-icons/Ai";
import { FcGoogle } from "react-icons/Fc";
function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({});

  let handleChange = (e) => {
    let { name, value } = e.target;

    setData({ ...data, [name]: value });
  };
  let handleClick = () => {
    console.log(data);
  };
  return (
    <Box
      w={["80%", "80%", "80%", "50%"]}
      m="auto"
      lineHeight="2rem"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      padding="3rem"
    >
      <Text fontSize={"24px"} fontWeight="400" mt="2rem">
        About You
      </Text>

      <Box mt="2rem">
        <Text fontSize="14px" fontWeight="400">
          Sign Up With
        </Text>
        <Box display="flex" gap="2rem" mt="2rem" mb="2rem" w="100%">
          <Box
            display="flex"
            gap="2rem"
            border="1px"
            padding="0.5rem"
            borderColor={"#9a9a9a"}
            w="50%"
          >
            <Icon color="blue" fontSize="2rem" as={AiFillFacebook} />
            <Text >Facebook</Text>
          </Box>
          <Box
            display="flex"
            gap="2rem"
            border="1px"
            padding="0.5rem"
            borderColor={"#9a9a9a"}
            w="50%"
          >
            <Icon color="blue" fontSize="2rem" as={FcGoogle} />
            <Text>Google</Text>
          </Box>
        </Box>
        <hr />
      </Box>
      <Box>
        <Text fontWeight="400" mt="1rem">
          Or create an email account
        </Text>
        <Text as="b">* Full Name</Text>
        <Input
          borderColor={"#9a9a9a"}
          borderRadius="none"
          h="3rem"
          name="name"
          onChange={handleChange}
        ></Input>
      </Box>
      <Box>
        <Text as="b">* Email address</Text>
        <Input
          borderColor={"#9a9a9a"}
          borderRadius="none"
          h="3rem"
          name="email"
          onChange={handleChange}
        ></Input>
      </Box>
      <Box>
        <Text as="b">* Confirm Email address</Text>
        <Input
          borderColor={"#9a9a9a"}
          borderRadius="none"
          h="3rem"
          name="confirmemail"
          onChange={handleChange}
        ></Input>
      </Box>
      <Box>
        <Text as="b">* Password</Text>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            borderColor={"#9a9a9a"}
            borderRadius="none"
            h="3rem"
            name="password"
            onChange={handleChange}
          />
          <InputRightElement h={"full"}>
            <Button
              h="10px"
              bgColor="white"
              mr="15px"
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            >
              {showPassword ? (
                <Text fontSize="14px">HIDE</Text>
              ) : (
                <Text fontSize="14px">SHOW</Text>
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
        {/* <Input borderColor={"#9a9a9a"} borderRadius="none"></Input> */}
        <Text>
          Include a minimum of 6 characters, and contain at least 1 number
        </Text>
      </Box>
      <Box>
        <Text as="b">* Confirm Password</Text>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            borderColor={"#9a9a9a"}
            h="3rem"
            name="confirmpassword"
            onChange={handleChange}
          />
          <InputRightElement h={"full"}>
            <Button
              h="10px"
              mr="15px"
              bgColor="white"
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            >
              {showPassword ? (
                <Text fontSize="14px">HIDE</Text>
              ) : (
                <Text fontSize="14px">SHOW</Text>
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
        {/* <Input borderColor={"#9a9a9a"} borderRadius="none"></Input> */}
        <Text as="b" color="#66666c" fontSize="16px" fontWeight="700">
          Include a minimum of  6 characters, and contain at least 1 number
        </Text>
      </Box>
      <Box>
        <Text as="b">Cell Phone Number</Text>
        <Input
          borderColor={"#9a9a9a"}
          borderRadius="none"
          h="3rem"
          type="number"
          name="number"
          onChange={handleChange}
        ></Input>
        <Text>
          We will use this number to send occasional promotional messages.
        </Text>
      </Box>
      <Box>
        <Text as="b">Referal Code</Text>
        <Input
          borderColor={"#9a9a9a"}
          borderRadius="none"
          h="3rem"
          name="referal"
          onChange={handleChange}
        ></Input>
        <Text as="b" color="#66666c" fontSize="16px" fontWeight="700">
          Your referrals discount is automatically applied at cart
        </Text>
      </Box>
      <Text as="b">Loyalty Reward program</Text>
      <Checkbox>
        Include me in the Dermstore Rewards program{" "}
        <Text as="b">Read our terms of use.</Text>
      </Checkbox>
      <Button
        w="100%"
        bgColor="#222222"
        color="white"
        borderRadius="none"
        mt="1rem"
        onClick={handleClick}
      >
        CONTINUE
      </Button>
      <Text>
        By proceeding, you are confirming that you agree to our{" "}
        <Text as="b">Terms and Conditions and Privacy Policy</Text>
      </Text>
    </Box>
  );
}

export default Signup;
