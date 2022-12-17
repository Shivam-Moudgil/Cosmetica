import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Progress,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {Form1, Form2, Form3} from "./Checkout";
export default function Multistep() {
  let mode = 2;
  const {onOpen, onClose, isOpen} = useDisclosure();
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [cartData, setCartdata] = useState([]);
  const [all, setAll] = useState([]);
  let arr = [];
  const getData = async () => {
    try {
      return await axios.get("http://localhost:3000/api/cart");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData().then((res) => setCartdata(res.data));
  }, []);

  console.log(cartData);
  const PostData = async () => {
    let addr = JSON.parse(localStorage.getItem("address"));
    {
      cartData.map((el, i) => {
        try {
          const newProduct = {
            user: el.user,
            product: el.product,
            customer: el._id,
            total: el.quantity * el.product.qty,
            address: addr,
          };
          axios.post("http://localhost:3000/api/order", newProduct);
          axios.delete("http://localhost:3000/api/cart");

        } catch (err) {
          console.log(err);
        }
      });
    }
  };

  const handlePost = () => {
    PostData();
    toast({
      title:
        mode == 1
          ? "Payment will be done via Online method"
          : "Payment will be done via COD",
      description: "It will react to you in 2-3 business days",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      <Box h={"100vh"} display="flex" flexDir={{base: "column", sm: "row"}}>
        <Box w={{base: "100%", sm: "50%"}} h={"100vh"}>
          <Image
            src="/admin_images/Colorlogowithbackground.svg"
            fit={"cover"}
            h={"full"}
          />
        </Box>
        <Box
          rounded="lg"
          w={{base: "100%", sm: "45%"}}
          p={6}
          // border={"2px solid red"}
          mt={{base: "0", sm: "60px"}}
          as="form"
        >
          <Progress
            hasStripe
            value={progress}
            mb="5%"
            mx="5%"
            isAnimated
          ></Progress>
          {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
          <ButtonGroup mt="5%" w="100%">
            <Flex w="100%" justifyContent="space-between">
              <Flex>
                <Button
                  onClick={() => {
                    setStep(step - 1);
                    setProgress(progress - 33.33);
                  }}
                  isDisabled={step === 1}
                  colorScheme="teal"
                  variant="solid"
                  w="7rem"
                  mr="5%"
                >
                  Back
                </Button>
                <Button
                  w={{ base: "0", sm: "7rem" }}
                  display={{base:"none",sm:"block"}}
                  isDisabled={step === 3}
                  onClick={() => {
                    setStep(step + 1);
                    if (step === 3) {
                      setProgress(100);
                    } else {
                      setProgress(progress + 33.33);
                    }
                  }}
                  colorScheme="teal"
                  variant="outline"
                >
                  Next
                </Button>
              </Flex>
              {step === 3 ? (
                <Button
                  w="7rem"
                  colorScheme="red"
                  variant="solid"
                  onClick={handlePost}
                >
                  Submit
                </Button>
              ) : null}{" "}
            </Flex>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  );
}