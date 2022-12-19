import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { StarIcon } from "@chakra-ui/icons";
import {Box, Button, Image, Text} from "@chakra-ui/react";
const Scarousel2 = ({items}) => {
  return (
    <div
      className="Carousel"
      style={{
        width: "97%",
        // border: "1px solid",
        margin: "auto",
      }}
    >
      <Carousel
        autoPlay={true}
        centerSlidePercentage={20}
        centerMode
        infiniteLoop
        swipeable
        showArrows={true}
        showStatus={false}
        emulateTouch
        thumbWidth={100}
        interval={2000}
        transitionTime={500}
        width={"100%"}
        useKeyboardArrows
        stopOnHover
        showThumbs={false}
      >
        {items?.map((el, i) => (
          <div
            style={{
              margin: "9px",
              height: "420px",
              background: "white",
              color: "black",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              padding: "25px",
              fontFamily: "cursive",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
            key={i}
          >
            <Image mb={2} src={el["productBlock_image src"]} alt="" />
            <Text>AVATAR</Text>
            <Box
              fontSize={"13px"}
              display={"flex"}
              flexDirection="column"
              gap={"4px"}
              fontFamily="monospace"
            >
              <Text>{el.productBlock_productName}</Text>
              <Box display="flex" mt="2" justifyContent={"center"} alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={
                        i < el.productBlock_ratingValue ? "teal.500" : "gray.300"
                      }
                    />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {el.productBlock_reviewCount} reviews
                </Box>
              </Box>
             

              <Text>Price:{el.productBlock_priceValue}</Text>
            </Box>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Scarousel2;
