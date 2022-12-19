import {
  Box,
  Input,
  Text,
  Checkbox,
  Button,
  Icon,
  InputGroup,
  InputRightElement,
  useToast,
  Link,
} from "@chakra-ui/react";
import {AiFillFacebook} from "react-icons/Ai";
import {FcGoogle} from "react-icons/Fc";
import axios from "axios";
import {useRouter} from "next/router";
import { useState } from "react";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({});
  const toast = useToast();
  const router = useRouter();
  const customToast = (title, desc, status) => {
    return toast({
      position: "top",
      title: title,
      description: desc,
      status: status,
      duration: 4000,
      isClosable: true,
    });
  };
  let handleChange = (e) => {
    let {name, value} = e.target;
    setData({...data, [name]: value});
  };
  let handleClick = async (e) => {
    e.preventDefault();
    try {
      const body = {
        email: data.email,
        password: data.password,
      };
      if (data.email === "" || data.password === "") {
        return customToast(
          "Input details error!",
          "Fill all required input feilds!",
          "error"
        );
      }
      const postdata = await axios.post("/api/auth/login", body);
      if (postdata.status === 200) {
        customToast("Login Message", "Login successful", "success");
        router.back();
      }
    } catch (error) {
      console.log(error);
      customToast("Login error!", "Login failed!", "error");
    }
  };
  return (
    <>
      <Box
        as="form"
        onSubmit={handleClick}
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
          <Link href="/">
            <Button
              w="100%"
              bgColor="#222222"
              color="white"
              borderRadius="none"
              mt="1rem"
              colorScheme="black"
            >
              LOGIN TO YOUR ACCOUNT
            </Button>
          </Link>

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
            type="submit"
          >
            CONTINUE
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Login;
