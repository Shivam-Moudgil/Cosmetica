import {Box, Button, Flex, Heading, Image, Text} from "@chakra-ui/react";
import {MdLocalShipping} from "react-icons/md";
import Slider from "react-slick";
import {
  bestSellerCarousel,
  exclusiveCarousel,
  giftSetCarousel,
  newArrivalsCarousel,
  offerCarousel,
} from "./carouselData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function HomeNav() {
  return (
    <Box w="100vw" m="auto" display={{base:'none', md:'none', lg:'block'}}>
      <Box>
        <Box maxW="full" textAlign="center" bg={"blackAlpha.300"}>
          <Flex
            w="90%"
            justifyContent="space-between"
            alignItems="center"
            h={{base: 6, md: 8, lg: 10}}
            gap={4}
            px={4}
            m="auto"
            fontFamily={"cursive"}
          >
            <Box
              fontSize={{base: "10px", md: "12px", lg: "14px"}}
              display="flex"
              alignItems="center"
              gap={2}
            >
              <MdLocalShipping />
              Free US Shipping $50+
            </Box>
            <Box fontSize={{base: "10px", md: "12px", lg: "14px"}}>
              New Customers Save 15%*
            </Box>
            <Box fontSize={{base: "10px", md: "12px", lg: "14px"}}>
              Dermstore Rewards
            </Box>
            <Box fontSize={{base: "10px", md: "12px", lg: "14px"}}>
              Ask the Esthetician
            </Box>
            <Box fontSize={{base: "10px", md: "12px", lg: "14px"}}>
              Download Our App
            </Box>
            <Box fontSize={{base: "10px", md: "12px", lg: "14px"}}>
              Refer a friend, Get $15
            </Box>
          </Flex>
        </Box>
        <Box
          maxW="full"
          textAlign="center"
          bg={"blackAlpha.500"}
          h={{base: 6, md: 8, lg: 10}}
          py={2}
        >
          <Text fontFamily={"fantasy"} letterSpacing={1} fontSize={{base: "10px", md: "12px", lg: "14px"}}>
            Rewards Members: User code AVATAR to avail an Offer of 20% off on
            your final Purchase Bill. Happy Shopping
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export function OfferCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box w={{base: "xs", md: "xl", lg: "4xl"}} m="auto" my={10}>
      <Slider {...settings}>
        
          {offerCarousel.map((el) => (
            <Box
              key={el["productBlock_link href"]}
              // border={"3px solid red"}
              my={10}
            >
              <Image
                m="auto"
                src={el["productBlock_image src"]}
                alt={el.productBlock_productName}
                w={{base: "100px", md: "200px", lg: "300px"}}
                mb={4}
              />
              <Box textAlign={"center"}>
                <Text
                  h="60px"
                  m={"auto"}
                  w={"70%"}
                  noOfLines={2}
                  fontSize={{ base: "10px", md: "12px", lg: "14px" }}
              overflow={"hidden"}
                >
                  {el.productBlock_productName}
                </Text>
                <Text
                  h="40px"
                  fontSize={{base: "10px", md: "12px", lg: "14px"}}
                >
                  Ratings:- {el.productBlock_ratingValue}
                </Text>
                <Text fontSize={{base: "10px", md: "12px", lg: "14px"}}>
                  {el.productBlock_priceValue}
                </Text>
                <Button
                  mt={4}
                  borderRadius={0}
                  variant="solid"
                  bgColor="black"
                  color="white"
                  _hover={{color: "black", bgColor: "blackAlpha.500"}}
                >
                  Shop Now
                </Button>
              </Box>
            </Box>
          ))}
      </Slider>
    </Box>
  );
}

export function BestSellersCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box w={{base: "sm", md: "4xl", lg: "8xl"}} m="auto" my={10} px={4}>
      <Heading>Best Sellers</Heading>
      <Slider {...settings}>
        {bestSellerCarousel.map((el) => (
          <Box
            w={{base: "100px", md: "200px", lg: "300px"}}
            key={el["productBlock_link href"]}
            textAlign="center"
            my={10}
          >
            <Image
              maxW="full"
              m="auto"
              src={el["productBlock_image src"]}
              alt={el.productBlock_productName}
              w={{base: "100px", md: "200px", lg: "300px"}}
              mb={4}
            />
            <Text h="60px" fontSize={{base: "10px", md: "12px", lg: "14px"}}>
              {el.productBlock_productName}
            </Text>
            <Text h="40px" fontSize={{base: "10px", md: "12px", lg: "14px"}}>
              {el.productBlock_ratingValue}
            </Text>
            <Text fontSize={{base: "10px", md: "12px", lg: "14px"}}>
              {el.productBlock_priceValue}
            </Text>
            <Button
              mt={4}
              borderRadius={0}
              variant="solid"
              bgColor="black"
              color="white"
              _hover={{color: "black", bgColor: "blackAlpha.500"}}
            >
              Shop Now
            </Button>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export function NewArrivalsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box w={{base: "sm", md: "4xl", lg: "8xl"}} m="auto" my={10} px={4}>
      <Slider {...settings}>
        {newArrivalsCarousel.map((el) => (
          <Box
            w={{base: "100px", md: "200px", lg: "300px"}}
            key={el["productBlock_link href"]}
            textAlign="center"
            my={10}
          >
            <Image
              m="auto"
              maxW="full"
              src={el["productBlock_image src"]}
              alt={el.productBlock_productName}
              w={{base: "100px", md: "200px", lg: "300px"}}
              mb={4}
            />
            <Text h="60px" fontSize={{base: "10px", md: "12px", lg: "14px"}}>
              {el.productBlock_productName}
            </Text>
            <Text h="40px" fontSize={{base: "10px", md: "12px", lg: "14px"}}>
              {el.productBlock_ratingValue}
            </Text>
            <Text fontSize={{base: "10px", md: "12px", lg: "14px"}}>
              {el.productBlock_priceValue}
            </Text>
            <Button
              mt={4}
              borderRadius={0}
              variant="solid"
              bgColor="black"
              color="white"
              _hover={{color: "black", bgColor: "blackAlpha.500"}}
            >
              Shop Now
            </Button>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
export function GiftSetsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box w={{base: "sm", md: "4xl", lg: "8xl"}} m="auto" my={10} px={4}>
      <Slider {...settings}>
        {giftSetCarousel.map((el) => (
          <Box
            w={{base: "100px", md: "200px", lg: "300px"}}
            key={el["productBlock_link href"]}
            textAlign="center"
            my={10}
          >
            <Image
              m="auto"
              maxW="full"
              src={el["productBlock_image src"]}
              alt={el.productBlock_productName}
              w={{base: "100px", md: "200px", lg: "300px"}}
              mb={4}
            />
            <Text h="60px" fontSize={{base: "10px", md: "12px", lg: "14px"}}>
              {el.productBlock_productName.slice(0,60)}
            </Text>
            <Text h="40px" fontSize={{base: "10px", md: "12px", lg: "14px"}}>
              {el.productBlock_ratingValue}
            </Text>
            <Text fontSize={{base: "10px", md: "12px", lg: "14px"}}>
              {el.productBlock_priceValue}
            </Text>
            <Button
              mt={4}
              borderRadius={0}
              variant="solid"
              bgColor="black"
              color="white"
              _hover={{color: "black", bgColor: "blackAlpha.500"}}
            >
              Shop Now
            </Button>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export function DermstoreExclusiveCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box w={{base: "sm", md: "4xl", lg: "8xl"}} m="auto" my={10} px={4}>
      <Slider {...settings}>
        {exclusiveCarousel.map((el) => (
          <Box
            w={{base: "100px", md: "200px", lg: "300px"}}
            key={el["productBlock_link href"]}
            textAlign="center"
            my={10}
          >
            <Image
              m="auto"
              maxW="full"
              src={el["productBlock_image src"]}
              alt={el.productBlock_productName}
              w={{base: "100px", md: "200px", lg: "300px"}}
              mb={4}
            />
            <Text h="60px" fontSize={{base: "10px", md: "12px", lg: "14px"}}>
              {el.productBlock_productName.slice(20,50)}
            </Text>
            <Text h="40px" fontSize={{base: "10px", md: "12px", lg: "14px"}}>
              {el.productBlock_ratingValue}
            </Text>
            <Text fontSize={{base: "10px", md: "12px", lg: "14px"}}>
              {el.productBlock_priceValue}
            </Text>
            <Button
              mt={4}
              borderRadius={0}
              variant="solid"
              bgColor="black"
              color="white"
              _hover={{color: "black", bgColor: "blackAlpha.500"}}
            >
              Shop Now
            </Button>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
