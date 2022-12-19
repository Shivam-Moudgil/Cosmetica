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
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {Form1, Form2, Form3} from "./Checkout";
export default function Multistep() {
  const router = useRouter();
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
      return await axios.get(process.env.Cart_Route);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData().then((res) => setCartdata(res.data));
  }, []);

  // console.log(cartData);
  const PostData = async () => {
    let addr = JSON.parse(localStorage.getItem("address"));
    {
      cartData.map((el, i) => {
        try {
          const newProduct = {
            user: el.user,
            product: el.product,
            customer: el._id,
            total: el.quantity * el.product.price,
            address: addr,
            quantity: el.quantity,
          };
          axios.post(process.env.Order_Route, newProduct);
          axios.delete(process.env.Cart_Route);
        } catch (err) {
          console.log(err);
        }
      });
    }
  };

  const handlePost = () => {
    PostData();

    router.push("/cart");
    toast({
      title:
        mode == 1
          ? "Payment will be done via Online method"
          : "Payment will be done via COD",
      description: "It will react to you in 2-3 business days",
      status: "success",
      duration: 3000,
      position: "top-right",
      isClosable: true,
    });
    localStorage.clear();
  };

  return (
    <>
      <Box
        border={"13px solid #0e1823"}
        h={"auto"}
        display="flex"
        flexDir={{base: "column", sm: "row"}}
      >
        <Box w={{base: "100%", sm: "45%"}}>
          <Image
            m={"auto"}
            src="https://media.istockphoto.com/id/1388108025/vector/contactless-customer-payment-to-grocery-shop-cashier.jpg?s=612x612&w=0&k=20&c=xm_MasxuaP4kzcyG1cj7B1zjteWdrhuda8o2Xs2Ze0g="
            fit={"cover"}
          />
        </Box>
        <Box
          rounded="lg"
          w={{base: "100%", sm: "45%"}}
          m="auto"
          p={6}
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
                  w={{base: "0", sm: "7rem"}}
                  display={{base: "none", sm: "block"}}
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
