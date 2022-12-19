import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    HStack,
    Image,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import { FaTruck, FaMobileAlt } from "react-icons/fa";
  import { BsCoin } from "react-icons/bs";
  import { GoChecklist } from "react-icons/go";
  import { FiClock, FiCheck } from "react-icons/fi";
  import { useState, useEffect } from "react";
  import axios from "axios";
  import Link from "next/link";
  import { MdStar } from "react-icons/md";
  import { useToast } from '@chakra-ui/react'
  
  const offers = [
    { title: "Free shipping India ₹500+", icon: <FaTruck /> },
    { title: "New customer save 15%", icon: <BsCoin /> },
    { title: "Dermstore rewards", icon: <GoChecklist /> },
    { title: "Ask the Esthetician", icon: <FiClock /> },
    { title: "Download Our App", icon: <FaMobileAlt /> },
    { title: "Refer a friend, GET ₹200", icon: <FiCheck /> },
  ];
  
  export default function SingleProduct() {
    const [data, setData] = useState({});
    const [quantity, setQuantity] = useState(1);
    const toast = useToast();
  
    const handleGetPage = async () => {
      const response = await axios.get("http://localhost:3000/api/page-setter");
      localStorage.setItem("page-data", JSON.stringify(response.data));
      setData(response.data);
    };
  
    useEffect(() => {
      if (!data.hasOwnProperty("name")) {
        handleGetPage();
      }
    }, []);
  
    useEffect(() => {
      if(quantity === 6) {
        toast({
          title: `Maximum quantity exceeded!`,
          status: "warning",
          isClosable: true,
        })
      }
    }, [quantity]);
  
    const handleAddToCart = async () => {
      await axios.post("http://localhost:3000/api/cart", {product: data, quantity, user: ""})
    }
  
    return (
      <>
        <HStack
          w="full"
          px={10}
          justifyContent="space-between"
          alignItems="center"
          bg="#F2F2F2"
          py={4}
          flexWrap="wrap"
          gap={6}
        >
          {offers.map((offer, index) => (
            <Flex
              key={index}
              justifyContent="space-between"
              alignItems="center"
              gap={3}
            >
              <Text fontSize="xl">{offer.icon}</Text>
              <Text fontSize="14px">{offer.title}</Text>
            </Flex>
          ))}
        </HStack>
  
        <Container maxW="container.xl" my={10} p={0}>
          <HStack w="full" gap={3}>
            <Link href="/">Home</Link>
            <Link href={`/`}></Link>
          </HStack>
  
          <Container maxW="80%" p={0} m="auto">
            <Flex
              justifyContent="space-between"
              alignItems="flex-start"
              direction={{ base: "column", md: "row" }}
            >
              <Heading
                fontWeight="normal"
                fontSize="2xl"
                display={{ base: "block", md: "none" }}
              >
                {data.name}
              </Heading>
              <Box boxSize="lg">
                <Image src={data.image} alt="" />
              </Box>
              <VStack w={{ base: "100%", md: "40%" }} alignItems="flex-start">
                <Box borderBottom="1px solid #ccc" pb={6} w="full">
                  <Heading
                    fontWeight="normal"
                    fontSize="2xl"
                    display={{ base: "none", md: "block" }}
                  >
                    {data.name}
                  </Heading>
                  <HStack pt={6} spacing={0} m="auto">
                    {new Array(data.rating).fill(0).map((elem) => (
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
                    {data.price?.toLocaleString("en-IN", {
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
                      <Button variant="unstyled" borderRadius="none" border="1px solid black">
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
                    display={{ base: "none", lg: "block" }}
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
                display={{ base: "block", lg: "none" }}
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
        </Container>
      </>
    );
  }