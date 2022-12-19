import axios from "axios";
import {
  Box,
  Container,
  Flex,
  Heading,
  Checkbox,
  Text,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
  Select,
  Grid,
  GridItem,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

const links = [
  { title: "Skin Care", slug: "skin-care", type: "skinCare" },
  { title: "Hair Care", slug: "hair-care", type: "hairCare" },
  { title: "Makeup", slug: "makeup", type: "makeup" },
  { title: "Fragrance", slug: "fragrance", type: "fragrance" },
  { title: "Bath & Body", slug: "bath-body", type: "bathBody" },
];


export default function Categories(props) {
  const { page, products } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [modalData, setModalData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setData(products);
    setFilterData(products);
  }, [products]);

  const handleSort = (event) => {
    const { value, name } = event.target;

    setLoading(true);
    if (value === "bestseller") {
      setFilterData(filterData.map((elem) => elem.category === "bestseller"));
    }
    else if (value === "low-high") {
      setFilterData(
        filterData.sort((a, b) => a.price - b.price)
      )
    }
    else if (value === "high-low") {
      setFilterData(
        filterData.sort((a, b) => b.price - a.price)
      )
    }
    else if (value === "alphabetically") {
      setFilterData(
        filterData.sort((a, b) => {
          if (a.name > b.name) return 1;
          else return -1;
        })
      )
    }
    else if (value === "discount") {
      setFilterData(
        filterData.sort((a, b) => a.ratingcount - b.ratingcount)
      )
    }
    else if (value === "rated") {
      setFilterData(
        filterData.sort((a, b) => b.rating - a.rating)
      )
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000)
  };

  const handleFilterPrice = (event) => {
    const { name, value } = event.target;

    // console.log(value)
  }

  return (
    <Container
      border="1px solid red"
      maxW={{ base: "full", lg: "96%" }}
      mx={10}
      m="auto"
      p={0}
    >
      <Flex justifyContent="space-between" gap={5}>
        <Container maxW="23%" display={{ base: "none", md: "block" }}>
          <Box>
            <Text fontFamily="lato, sans-serif" fontWeight="700" py={3}>
              Refine
            </Text>
          </Box>

          <Accordion defaultIndex={[0, 1, 2]} allowMultiple>
            <AccordionItem py={4} borderBottom="1px solid #ccc">
              <h2>
                <AccordionButton p={0}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontFamily="lato, sans-serif"
                    fontWeight="700"
                  >
                    Price
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel h="150" className="scrollbar__hide">
                <Stack spacing={1}>
                  <Checkbox
                    onChange={handleFilterPrice}
                    value={{ min: 0, max: 1000 }}
                  >
                    <Text fontSize={"15"}>Less than ₹1000</Text>
                  </Checkbox>
                  <Checkbox
                    onChange={handleFilterPrice}
                    value={{ min: 1000, max: 2000 }}
                  >
                    <Text fontSize={"15"}>₹1000 - ₹2000</Text>
                  </Checkbox>
                  <Checkbox onChange={handleFilterPrice}>
                    <Text fontSize={"15"}>₹2000 - ₹3000</Text>
                  </Checkbox>
                  <Checkbox onChange={handleFilterPrice}>
                    <Text fontSize={"15"}>₹3000 - ₹4000</Text>
                  </Checkbox>
                  <Checkbox onChange={handleFilterPrice}>
                    <Text fontSize={"15"}>Above ₹4000</Text>
                  </Checkbox>
                </Stack>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem py={4} borderBottom="1px solid #ccc">
              <h2>
                <AccordionButton p={0}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontFamily="lato, sans-serif"
                    fontWeight="700"
                  >
                    Savings
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel h="100" className="scrollbar__hide">
                <Stack spacing={1}>
                  <Checkbox>
                    <Text fontSize={"15"}>Up tp 25%</Text>
                  </Checkbox>
                  <Checkbox>
                    <Text fontSize={"15"}>25% - 50%</Text>
                  </Checkbox>
                  <Checkbox>
                    <Text fontSize={"15"}>50% - 75%</Text>
                  </Checkbox>
                </Stack>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem py={4} borderBottom="1px solid #ccc">
              <h2>
                <AccordionButton p={0}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontFamily="lato, sans-serif"
                    fontWeight="700"
                  >
                    Average Reviews
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel h="100" className="scrollbar__hide">
                <Stack spacing={1}>
                  <Checkbox>
                    <Text fontSize={"15"}>2-3</Text>
                  </Checkbox>
                  <Checkbox>
                    <Text fontSize={"15"}>3-4</Text>
                  </Checkbox>
                  <Checkbox>
                    <Text fontSize={"15"}>4+</Text>
                  </Checkbox>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>

        <Container maxW={{ base: "full", ld: "75%" }}>
          <Heading fontFamily="Poly, serif" fontSize="24px" fontWeight="400">
            {page.title}
          </Heading>
          <Text fontSize={"14px"} py={1}>
            4624 results
          </Text>
          <Text fontSize={"14px"} lineHeight={"5"} py={4}>
            {page.summary}
          </Text>

          <HStack justifyContent={"flex-end"} w="280px" my={10}>
            <Select fontSize={"14"} onChange={handleSort}>
              <option>Default</option>
              <option value="bestseller">Bestseller</option>
              <option value="low-high">Price: Low to high</option>
              <option value="high-low">Price: High to low</option>
              <option value="alphabetically">A - Z</option>
              <option value="discount">Percentage Discount</option>
              <option value="rated">High Rated</option>
            </Select>
          </HStack>

          <Modal isOpen={isOpen} onClose={onClose} size={"3xl"}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Added to Cart</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <HStack
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  m="auto"
                >
                  <Box boxSize="270px">
                    <Image src={modalData.image} objectFit="contain" />
                  </Box>
                  <Box>
                    <Text fontSize="15">{modalData.name}</Text>
                    <Text py={3}>Quantity: 1</Text>
                    <Text py={2} fontWeight="bold" fontSize="16">
                      {modalData.price?.toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                        style: "currency",
                        currency: "INR",
                      })}
                    </Text>
                  </Box>
                </HStack>
                <HStack py={5} justifyContent="space-between">
                  <Heading fontWeight="medium" fontSize="18">
                    Subtotal: <br />
                    (2 items in your cart)
                  </Heading>
                  <Text py={2} fontWeight="bold" fontSize="16">
                    {modalData.price?.toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                      style: "currency",
                      currency: "INR",
                    })}
                  </Text>
                </HStack>
                <Heading fontSize="16" fontWeight="bold" mb={5}>
                  Rewards members earn 1220 points on this order
                </Heading>
                <Flex gap={3} direction={{ base: "column-reverse", md: "row" }}>
                  <Link href="/" passHref>
                    <Button
                      borderRadius="none"
                      variant="unstyled"
                      w="full"
                      fontWeight="normal"
                      border="2px solid black"
                      fontSize="14"
                      onClick={onClose}
                    >
                      CONTINUE SHOPPING
                    </Button>
                  </Link>
                  <Button
                    borderRadius="none"
                    variant="unstyled"
                    bg="#222"
                    color="white"
                    w="full"
                    fontWeight="normal"
                    fontSize="14"
                  >
                    <Link href="/cart" passHref>VIEW CART</Link>
                  </Button>
                </Flex>
              </ModalBody>

              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>

          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
            gap={8}
            w="100%"
          >
            {loading
              ? null
              : filterData?.map((item) => (
                <GridItem
                  key={item._id}
                  w="100%"
                  h={{ base: "300px", sm: "350px", lg: "400px" }}
                  my={6}
                >
                  <Flex
                    direction="column"
                    w="100%"
                    h="100%"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Link
                      href={`/view/${item.name?.trim().split(" ").join("-")}`}
                    >
                      <Box
                        boxSize="80%"
                        onClick={async () => {
                          await axios.post(
                            "http://localhost:3000/api/page-setter",
                            item
                          );
                        }}
                      >
                        <Image src={item.image} objectFit="contain" />
                      </Box>
                    </Link>
                    <Text pt={3} fontSize="14" textAlign="center">
                      {item.name}
                    </Text>
                    <Box
                      display={"flex"}
                      justifyContent="center"
                      alignItems={"center"}
                      gap={1}
                    >
                      <HStack spacing={0} m="auto">
                        {new Array(item.rating).fill(0).map((elem) => (
                          <AiFillStar />
                        ))}
                      </HStack>
                      <Text>{item.ratingcount}</Text>
                    </Box>
                    <Text
                      py={2}
                      fontWeight="bold"
                      textAlign="center"
                      fontSize="14"
                    >
                      {item.price?.toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                        style: "currency",
                        currency: "INR",
                      })}
                    </Text>
                    <Button
                      borderRadius="none"
                      variant="unstyled"
                      bg="#222"
                      color="white"
                      w="full"
                      fontWeight="normal"
                      py={{ base: 1, lg: 2 }}
                      onClick={async () => {
                        onOpen();
                        setModalData(item);
                        try {
                          await axios
                            .post("http://localhost:3000/api/cart", {
                              product: item._id,
                              quantity: 1,
                            })
                            .then((res) => console.log(res))
                            .catch((err) => console.log(err));
                        } catch (err) {
                          console.log(err);
                        }
                      }}
                    >
                      Quick Buy
                    </Button>
                  </Flex>
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Flex>
    </Container>
  );
}

/*
{"_id":"6398c2bde157e2b1fb4b2295","qty":40,"image":"https://static.thcdn.com/images/small/webp//productimg/original/13812005-4724980887145978.jpg","category":"bestseller","price":136,"name":"                           Best of Dermstore The Necessities Kit - $431 Value                         ","rating":3,"ratingcount":1771},
*/

export const getStaticPaths = () => {
  const paths = links.map((link) => ({
    params: { category: link.slug, type: link.type },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { category } = context.params;

  const page = await fetch(
    `http://localhost:3000/api/static/page?q=${category}`
  ).then((res) => res.json());

  const { data } = await axios.get(
    `http://localhost:3000/api/product?q=${category}`
  );

  return {
    props: {
      page,
      products: data,
    },
  };
};