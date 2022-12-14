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
function Login() {
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
    <>
      <Box
        display={["block", "block", "block", "flex"]}
        w={["100%", "100%", "100%", "80%"]}
        m="auto"
        mt="3rem"
      >
        <Box
          w={["70%", "70%", "70%", "40%"]}
          m="auto"
          lineHeight="2rem"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          padding="3rem"
          mt="2rem"
        >
          <Box>
            <Text fontSize="24px">Existing Customers</Text>
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
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? (
                    <Text fontSize="14px">HIDE</Text>
                  ) : (
                    <Text fontSize="14px">SHOW</Text>
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Button
            w="100%"
            bgColor="#222222"
            color="white"
            borderRadius="none"
            mt="1rem"
            onClick={handleClick}
          >
            LOGIN TO YOUR ACCOUNT
          </Button>

          <Box mt="2rem">
            <Text fontSize="14px" fontWeight="400">
              Or, Continue With
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
                <Text>Facebook</Text>
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
        </Box>

        <Box
          w={["70%", "70%", "70%", "30%"]}
          m="auto"
          lineHeight="2rem"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          padding="3rem"
          mt="2rem"
          ml={["", "", "", "-3rem"]}
        >
          <Text fontSize="24px" fontWeight="400">
            New Customers
          </Text>
          <Button
            w="100%"
            bgColor="#222222"
            color="white"
            borderRadius="none"
            mt="1rem"
          >
            <a href="/signup"> CONTINUE</a>
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Login;
