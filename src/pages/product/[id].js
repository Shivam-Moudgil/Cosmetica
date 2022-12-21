import {useEffect, useState} from "react";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import {MdStar} from "react-icons/md";
import Rating from "../../../components/Product/Rating";

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
        .post("/api/cart", {product: product._id, quantity})
        .then((res) => {
          console.log(res);
          toast({
            title: `Item added to cart`,
            status: "success",
            duration: 2000,
            position: "top-right",
            isClosable: true,
          });
        })
        .catch((err) =>
          toast({
            title: err,
            status: "error",
            duration: 2000,
            position: "top-right",
            isClosable: true,
          })
        );
    } catch (err) {
      console.log(err);
    }
  };

  console.log(product);

  return (
    <>
      <Container maxW={{base: "100%", sm: "80%"}} m="auto" p={"10"}>
        <Flex
          gap={8}
          // border={"1px solid red"}
          justifyContent="space-between"
          direction={{base: "column", md: "row"}}
        >
          <Heading display={{base: "block", md: "none"}} fontSize={[22, 20]}>
            {product.name}
          </Heading>
          <Box
          // border={"2px solid"}
          >
            <Image src={product.image} alt="" />
          </Box>
          <VStack
            // border={"2px solid"}
            // w={{base: "100%", md: "40%"}}
            alignItems="flex-start"
            m={"auto"}
            w={{base: "full", sm: "100%"}}
          >
            <Box pb={6} w="full">
              <Heading display={{base: "none", md: "block"}}>
                {product.name}
              </Heading>
              <Box mt={2}>
                <Rating {...product} />
              </Box>
              <Text mt={4}>
                🎯 Sometimes the scent of seasonal hand wash is all we need to
                rouse our holiday spirits. Available in an array of festive
                fragrances, our naturally derived gel hand wash will leave your
                hands soft, clean and ready to be tucked into a pair of fair
                isle mittens. It really is the most wonderful time of the year.
              </Text>
            </Box>

            <Box>
              <Text fontWeight="bold">
                Earn 335 reward points when purchasing this product as a rewards
                member*
              </Text>
              <Heading fontWeight="semibold" fontSize="2xl" py={4}>
                {product.price?.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "INR",
                })}{" "}
                INR
              </Heading>
            </Box>
            <Text fontSize={"xl"} fontWeight="semibold">
              Stock left : {product.qty}
            </Text>
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
            bg="black"
            color="white"
            w="full"
            fontWeight="normal"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Box>
        {/* <Text w="60%" fontSize="14" mt={6}>
          Give skin a boost of hydration with the SkinCeuticals Phyto Essence
          Mist. Formulated to strengthen the skin’s barrier, the lightweight
          facial mist offers an instant soothing effect. The essence features a
          phyto botanical blend, including boldus leaf, cucumber, thyme and
          rosemary extracts, which helps to minimise the look of redness.
          Hyaluronic acid and glycerin work to enhance skin’s moisture. Suitable
          for all skin types, including sensitive, the hygienic mist can be
          applied before and after makeup to maintain a refreshed and hydrated
          complexion throughout the day. Free from parabens, alcohol, gluten,
          and silicone.
        </Text> */}
      </Container>
    </>
  );
};

export const getServerSideProps = async ({params}) => {
  const res = await axios.get(
    `${process.env.Base_URL}/api/product/${params.id}`
  );
  return {
    props: {
      product: res.data,
    },
  };
};

export default DetailProduct;
