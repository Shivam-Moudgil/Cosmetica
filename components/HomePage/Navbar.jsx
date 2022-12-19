import {useState, useEffect} from "react";
import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import ColorLogo from "./Images/ColorLogo.png";
import {CloseIcon, HamburgerIcon, SearchIcon} from "@chakra-ui/icons";
import {RxPerson} from "react-icons/rx";
import {CgShoppingCart} from "react-icons/cg";

const getdata = async () => {
  return await axios.get(process.env.Cart_Route);
};

export default function Navbar2() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [cartdata, setCartData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const updateData = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    getdata()
      .then((res) => setCartData(res.data))
      .catch((err) => console.log(err));
  }, [refresh]);

  return (
    <Box
      w="100vw"
      pos="sticky"
      boxShadow={"md"}
      pb={2}
      zIndex={100}
      bg="#1a487a"
      top={0}
      color="white"
    >
      <Box display={{base: "none", md: "none", lg: "block"}}>
        <Flex justifyContent={"space-between"} alignItems="center" px={20}>
          <Box>
            <Link href="/" passhref>
              <Image
                ml={"24"}
                src="/admin_images/Colorlogowithbackground.svg"
                w={20}
              />
            </Link>
          </Box>
          <Box>
            <InputGroup>
              <Input
                type="text"
                placeholder="Search for a product or brand..."
                w="600px"
                outline="1px solid"
              />
              <InputRightElement>
                <Button variant="ghost">
                  <SearchIcon />
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Flex gap={4}>
            <Flex>
              <Link href={"/signup"} passHref>
                <Button colorScheme={"white"} variant="ghost">
                  <Icon as={RxPerson} mr={2} />
                  Signup
                </Button>
              </Link>
              <Link href={"/login"} passHref>
                <Button colorScheme={"white"} variant="ghost">
                  <Icon as={RxPerson} mr={2} />
                  Login
                </Button>
              </Link>
            </Flex>
            <Link href="/cart">
              <Button colorScheme={"white"} variant="ghost">
                <Icon as={CgShoppingCart} />
                <Box
                  p={1}
                  fontSize="10px"
                  borderRadius="full"
                  bg="black"
                  color={"white"}
                  pos="relative"
                  top="-10px"
                  left="-15px"
                  w="20px"
                >
                  {cartdata.length}
                </Box>
                Cart
              </Button>
            </Link>
          </Flex>
        </Flex>
        <Flex
          justifyContent={"space-around"}
          alignItems="center"
          px={20}
          my={2}
          fontWeight={"semibold"}
          fontSize={"md"}
          // gap={8}
        >
          <Link href="/skin-care">Skin Care</Link>
          <Link href="/makeup">Makeup</Link>
          <Link href="/hair-care">Hair Care</Link>
          <Link href="/bath-body">Bath & Body</Link>
        </Flex>
      </Box>
      <Box w="100vw" display={{lg: "none"}}>
        <Flex
          w="100vw"
          gap={10}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{lg: "none"}}
            size="md"
            onClick={isOpen ? onClose : onOpen}
          />
          <SearchIcon />
          <Box>
            <Link href="/" passHref>
              <Image
                src={ColorLogo}
                alt="website-logo"
                w="80px"
                h="50px"
                borderRadius="full"
              />
            </Link>
          </Box>
          <Flex gap={8}>
            <Button size="xs" variant="ghost">
              <Icon as={RxPerson} mr={2} />
              Account
            </Button>
            <Link href="/cart">
              <Button colorScheme={"white"} variant="ghost">
                <Icon as={CgShoppingCart} mr={2} />
                <Box
                  p={1}
                  fontSize="10px"
                  borderRadius="full"
                  bg="black"
                  color={"white"}
                  pos="relative"
                  top="-10px"
                  left="-15px"
                  w="20px"
                >
                  {cartdata.length}
                </Box>
                Cart
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
      {isOpen ? (
        <Box pb={4} display={{lg: "none"}}>
          <VStack
            justifyContent="start"
            alignItems="flex-start"
            mx={10}
            wrap="wrap"
          >
            <Link href="/skin-care">Skin Care</Link>
            <Link href="/makeup">Makeup</Link>
            <Link href="/hair-care">Hair Care</Link>
            <Link href="/bath-body">Bath & Body</Link>
          </VStack>
        </Box>
      ) : null}
    </Box>
  );
}
