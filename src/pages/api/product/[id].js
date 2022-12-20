import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text, useToast, VStack
} from "@chakra-ui/react";
import axios from "axios";
import { MdStar } from "react-icons/md";

const DetailProduct = ({product}) => {
const [quantity, setQuantity] = useState(1);
const toast = useToast();

  
  useEffect(() => {
    if (quantity === 6) {
      toast({
        title: `Maximum quantity exceeded!`,
        status: "warning",
        isClosable: true,
      });
    }
  }, [quantity]);

const handleAddToCart = async () => {
  // await axios.post("http://localhost:3000/api/cart", {product: data, quantity})
  try {
    await axios
      .post("/api/cart", {product: data, quantity})
      .then((res) => {
        console.log(res)
       toast({
         title: `Item added to cart`,
         status: "success",
         duration: 2000,
         position:"top-right",
         isClosable: true,
       });
      }
      )
      .catch((err) => toast({
         title: err,
         status: "error",
         duration: 2000,
         position:"top-right",
         isClosable: true,
       }) );
  } catch (err) {
    console.log(err);
  }
};

    console.log(product);

  return (
    <>
        <Container maxW="80%" p={0} m="auto">
          <Flex
            justifyContent="space-between"
            alignItems="flex-start"
            direction={{base: "column", md: "row"}}
          >
            <Heading
              fontWeight="normal"
              fontSize="2xl"
              display={{base: "block", md: "none"}}
            >
              {product.name}
            </Heading>
            <Box boxSize="lg">
              <Image src={product.image} alt="" />
            </Box>
            <VStack w={{base: "100%", md: "40%"}} alignItems="flex-start">
              <Box borderBottom="1px solid #ccc" pb={6} w="full">
                <Heading
                  fontWeight="normal"
                  fontSize="2xl"
                  display={{base: "none", md: "block"}}
                >
                  {product.name}
                </Heading>
                <HStack pt={6} spacing={0} m="auto">
                  {new Array(5).fill(0).map((elem) => (
                    <MdStar fontSize="20px" color="#FA9E1C" />
                  ))}
                </HStack>
              </Box>
              <Box>
                <Text fontWeight="bold">
                  Earn 335 reward points when purchasing this product as a
                  rewards member*
                </Text>
                <Heading fontWeight="semibold" fontSize="2xl" py={4}>
                  {product.price?.toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                    style: "currency",
                    currency: "INR",
                  })}
                </Heading>
              </Box>
              <Text>Quantity</Text>
              <HStack w="full" justifyContent="space-between">
                <Flex>
                  <Box>
                    <Button
                      disabled={quantity === 1}
                      onClick={() => setQuantity(quantity - 1)}
                      borderRadius="none"
                      border="1px solid black"
                      variant="unstyled"
                    >
                      -
                    </Button>
                    <Button
                      variant="unstyled"
                      borderRadius="none"
                      border="1px solid black"
                    >
                      {quantity}
                    </Button>
                    <Button
                      disabled={quantity === 6}
                      onClick={() => setQuantity(quantity + 1)}
                      borderRadius="none"
                      border="1px solid black"
                      variant="unstyled"
                    >
                      +
                    </Button>
                  </Box>
                </Flex>
                <Button
                  w="200px"
                  display={{base: "none", lg: "block"}}
                  borderRadius="none"
                  variant="unstyled"
                  bg="#222"
                  color="white"
                  fontWeight="normal"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </HStack>
            </VStack>
          </Flex>
          <Box>
            <Button
              display={{base: "block", lg: "none"}}
              my={6}
              borderRadius="none"
              variant="unstyled"
              bg="#222"
              color="white"
              w="full"
              fontWeight="normal"
            >
              Add to Cart
            </Button>
          </Box>
          <Text w="60%" fontSize="14" mt={6}>
            Give skin a boost of hydration with the SkinCeuticals Phyto Essence
            Mist. Formulated to strengthen the skin’s barrier, the lightweight
            facial mist offers an instant soothing effect. The essence features
            a phyto botanical blend, including boldus leaf, cucumber, thyme and
            rosemary extracts, which helps to minimise the look of redness.
            Hyaluronic acid and glycerin work to enhance skin’s moisture.
            Suitable for all skin types, including sensitive, the hygienic mist
            can be applied before and after makeup to maintain a refreshed and
            hydrated complexion throughout the day. Free from parabens, alcohol,
            gluten, and silicone.
          </Text>
        </Container>
    </>
  );
};

export const getServerSideProps = async ({params}) => {
  const res = await axios.get(
    `/api/product/${params.id}`
  );
  return {
    props: {
      product: res.data,
    },
  };
};

export default DetailProduct;
