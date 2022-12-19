import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaCookie,
  FaFacebook,
  FaInfoCircle,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import {TiArrowSync} from "react-icons/ti";
import {MdLocalShipping} from "react-icons/md";
import {CgTrack} from "react-icons/cg";

const payWith = [
  {
    id: 1,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Visa_Electron.svg/1200px-Visa_Electron.svg.png",
    title: "visa-electron",
  },
  {
    id: 2,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png",
    title: "visa",
  },
  {
    id: 3,
    imgUrl: "https://www.drupal.org/files/project-images/paypal_logo.jpg",
    title: "paypal",
  },
  {
    id: 4,
    imgUrl:
      "https://www.investopedia.com/thmb/F8CKM3YkF1fmnRCU2g4knuK0eDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg",
    title: "mastercard",
  },
  {
    id: 5,
    imgUrl:
      "https://vectorlogo4u.com/wp-content/uploads/2020/11/Maestro-logo-vector-01.png",
    title: "maestro",
  },
  {
    id: 6,
    imgUrl:
      "https://www.americanexpress.com/content/dam/amex/us/merchant/supplies-uplift/product/images/img-WEBLOGO1-01.jpg",
    title: "americanExpress",
  },
  {
    id: 7,
    imgUrl:
      "https://www.discover.com/company/images/newsroom/media-downloads/DGN_AcceptanceMark.png",
    title: "discover",
  },
  {
    id: 8,
    imgUrl:
      "https://1000logos.net/wp-content/uploads/2021/05/Diners-Club-International-logo.png",
    title: "diners",
  },
  {
    id: 9,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/1200px-Apple_Pay_logo.svg.png",
    title: "applePay",
  },
  {
    id: 10,
    imgUrl:
      "https://www.edigitalagency.com.au/wp-content/uploads/afterpay-logo-png-black-transparent.png",
    title: "afterPay",
  },
  {
    id: 11,
    imgUrl: "https://i.postimg.cc/28zn2bLx/62b32650b223544c209f5eb6.png",
    title: "klarna",
  },
];

export default function Footer2() {
  return (
    <Box
      w="100vw"
      mt={{base: "100px", md: "150px", lg: "200px"}}
      mb="20px"
      borderTop="1px solid gray"
    >
      <Flex
        mx={10}
        justifyContent="flex-start"
        direction={{base:'column', md:'column', lg:'row'}}
        gap={{base:'0px', md:'0px',lg:"110px"}}
        ml={{base: "30px", md: "65px", lg: "105px"}}
      >
        <VStack gap="20px" py="20px" m='auto'w={{base:'100%', md:'100%', lg:"45%"}}>
          <Text fontSize={{base: "10px", md: "12px", lg: "14px"}} align="left">
            Sign up to our newsletters and receive the latest exclusive
            discounts and deals
          </Text>
          <Button
            alignSelf={"flex-start"}
            borderRadius={0}
            variant="solid"
            bgColor="black"
            color="white"
            _hover={{color: "black", bgColor: "blackAlpha.500"}}
          >
            SIGN ME UP
          </Button> 
        </VStack>
        <VStack alignItems="flex-start" gap="20px" py="20px" m='auto'w={{base:'100%', md:'100%', lg:"45%"}}>
          <Text>Connect with us</Text>
          <Flex gap={{base: 4, md: 6, lg: 10}}>
            <Icon
              as={FaFacebook}
              boxSize={{base: "20px", md: "30px", lg: "40px"}}
              color="gray"
            />
            <Icon
              as={FaTwitter}
              boxSize={{base: "20px", md: "30px", lg: "40px"}}
              color="gray"
            />
            <Icon
              as={FaInstagram}
              boxSize={{base: "20px", md: "30px", lg: "40px"}}
              color="gray"
            />
            <Icon
              as={FaYoutube}
              boxSize={{base: "20px", md: "30px", lg: "40px"}}
              color="gray"
            />
            <Icon
              as={FaPinterest}
              boxSize={{base: "20px", md: "30px", lg: "40px"}}
              color="gray"
            />
          </Flex>
        </VStack>
      </Flex>
      <Flex mx={10} justifyContent="space-evenly"  direction={{base:'column', md:'column', lg:'row'}} gap={{base:4, md:4, lg:0}}>
        <VStack
          align="flex-start"
          gap={4}
          borderTop="2px solid gray"
          m='auto'
          w={{base:'100%', md:'100%', lg:"45%"}}
          pt={4}
          fontSize="14px"
        >
          <Box fontSize={{base: "10px", md: "12px", lg: "14px"}}>
            Customer Service
          </Box>
          <Box
            fontSize={{base: "10px", md: "12px", lg: "14px"}}
            display="flex"
            alignItems="center"
          >
            <Icon
              as={FaInfoCircle}
              boxSize={{base: "10px", md: "15px", lg: "20px"}}
              mr="10px"
            />
            Help Center / FAQs
          </Box>
          <Box
            fontSize={{base: "10px", md: "12px", lg: "14px"}}
            display="flex"
            alignItems="center"
          >
            <Icon
              as={TiArrowSync}
              boxSize={{base: "10px", md: "15px", lg: "20px"}}
              mr="10px"
            />
            Returns
          </Box>
          <Box
            fontSize={{base: "10px", md: "12px", lg: "14px"}}
            display="flex"
            alignItems="center"
          >
            <Icon
              as={MdLocalShipping}
              boxSize={{base: "10px", md: "15px", lg: "20px"}}
              mr="10px"
            />
            Shipping Information
          </Box>
          <Box
            fontSize={{base: "10px", md: "12px", lg: "14px"}}
            display="flex"
            alignItems="center"
          >
            <Icon
              as={CgTrack}
              boxSize={{base: "10px", md: "15px", lg: "20px"}}
              mr="10px"
            />
            Track my order
          </Box>
          <Box
            fontSize={{base: "10px", md: "12px", lg: "14px"}}
            display="flex"
            alignItems="center"
          >
            <Icon
              as={FaCookie}
              boxSize={{base: "10px", md: "15px", lg: "20px"}}
              mr="10px"
            />
            Cookie Settings
          </Box>
        </VStack>
        <Flex m='auto' w={{base:'100%', md:'100%', lg:"45%"}} justifyContent="space-around" gap={14} textAlign="left">
          <VStack
            align="flex-start"
            borderTop="2px solid gray"
            pt={4}
            gap={4}
            fontSize={{base: "10px", md: "12px", lg: "14px"}}
          >
            <Text>My Account</Text>
            <Text>Manage My Auto- Replenishments</Text>
            <Text>My Rewards</Text>
            <Text>My Favourite</Text>
            <Text>Refer a Friend</Text>
            <Text>Order History</Text>
          </VStack>
          <VStack
            align="flex-start"
            borderTop="2px solid gray"
            pt={4}
            gap={4}
            fontSize={{base: "10px", md: "12px", lg: "14px"}}
          >
            <Text>Company</Text>
            <Text>About Us</Text>
            <Text>Press</Text>
            <Text>What is Klarna?</Text>
          </VStack>
          <VStack
            align="flex-start"
            borderTop="2px solid gray"
            pt={4}
            gap={4}
            fontSize={{base: "10px", md: "12px", lg: "14px"}}
          >
            <Text>Legal</Text>
            <Text>Privacy Policy</Text>
            <Text>Terms & Conditions</Text>
            <Text>Modern Slavery Statement</Text>
            <Text>Product Recall</Text>
            <Text>Accessibility</Text>
          </VStack>
        </Flex>
      </Flex>
      <Flex m={10} justifyContent="space-evenly" display={{base:'none',md:'none', lg:'flex'}}>
        <VStack w="45%" align='left' borderTop='2px solid gray'>
          <Heading>THG</Heading>
          <Text>2022 © The Hut.com Ltd.</Text>
        </VStack>
        <VStack w="45%" align='left'  borderTop='2px solid gray'>
          <Heading>Pay securely with</Heading>
          <Flex justifyContent="start" gap={1} alignItems="center">
            {payWith.map((el) => (
              <Box key={el.id} border="1px solid lightgrey">
                <Image src={el.imgUrl} alt={el.title} w="50px" h="30px" />
              </Box>
            ))}
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
}
