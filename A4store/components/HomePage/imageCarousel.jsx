import {mainCarousel} from './carouselData';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {Box, Button, Heading, Image, Text} from "@chakra-ui/react";

export default function ImageCarousel({items}) {
    return (
        <div className="Carousel" style={{}}>
      <Carousel
        autoPlay={true}
        centerSlidePercentage={100}
        centerMode
        infiniteLoop
        swipeable
        showArrows={true}
        showStatus={false}
        emulateTouch
        thumbWidth={100}
        interval={2000}
        transitionTime={500}
        width={'100%'}
        useKeyboardArrows
        stopOnHover
        showThumbs={false}
      >
        {items?.map((el, i) => (
          <div
            style={{
              margin: "9px",
              height: "400px",
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
            <Image mb={2} src={el.imageUrl} alt="" />
            <Box
            //   fontSize={"13px"}
              display={"flex"}
              flexDirection="column"
              gap={"4px"}
              fontFamily="monospace"
              pos='relative'
              top={'200px'}
              right='100px'
            >
                <Heading>{el.offerHeading}</Heading>
                <Text>{el.offerPitch}</Text>
              </Box>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
