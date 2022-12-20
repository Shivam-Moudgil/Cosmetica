import {Box, Flex,Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import Scarousel2, { Scarousel2Base } from "./carosel2";
import Scarousel, { ScarouselBase } from "./Carouse";
import { bestSellerCarousel, exclusiveCarousel, giftSetCarousel, newArrivalsCarousel, mainCarousel, offerCarousel } from "./carouselData";
import {Category, FeaturedBrands, StaticBlog} from "./HomePageBottom";
import {
  BestSellersCarousel,
  DermstoreExclusiveCarousel,
  GiftSetsCarousel,
  HomeNav,
  NewArrivalsCarousel,

} from "./HomePageCarousals";
import ImageCarousel, { ImageCarouselBase } from "./imageCarousel";

export default function HomePage() {
  return (
    <Box
      w="100%"
      m="auto"
    //   top={{base: "50px", md: "61px", lg: "148px"}}
    >
      <HomeNav />
      <Box m='auto' display={{base:'block', lg:'none'}}><ImageCarouselBase items={mainCarousel} /></Box>
      <Box m='auto' display={{base:'none', lg:'block'}}><ImageCarousel items={mainCarousel} /></Box>
      <Box align='center' my={6} fontFamily="monospace">
        <Text fontSize={{base:'16px', md:'20px',lg:'24px'}}>Earn 3x Points on SENTÉ</Text>
        <Text fontSize={{base:'10px', md:'12px', lg:'14px'}}>For a limited-time, Rewards members get TRIPLE points on clinical-strength, dermatologist recommended, anti-aging formulas for sensitive skin.</Text>
      </Box>
      <Flex direction={{base:'column', md:'column', lg:'row'}} m='auto' justifyContent='space-around'>
        <Image src='https://static.thcdn.com/images/medium/webp/widgets/208-us/41/1116-STDCRE-43990-CM-DS-Q4-Batching-676x556-044641.jpeg' alt='Sente' 
            w={{base: "300px", md: "40px", lg: "500px"}}
            h={{base: "200px", md: "300px", lg: "400px"}}
            m='auto'
            mt={2}/>
        <Box m='auto' display={{base:'block', lg:'none'}}><ScarouselBase items={offerCarousel}/></Box>
        <Box display={{base:'none', lg:'block'}}><Scarousel items={offerCarousel} /></Box>
      </Flex>
      {/* <OfferCarousel /> */}
      <Category />
            <Box m='auto' display={{base:'block', lg:'none'}}><Scarousel2Base items={bestSellerCarousel} /></Box>
            <Box m='auto' display={{base:'none', lg:'block'}}><Scarousel2 items={bestSellerCarousel} /></Box>
      <StaticBlog />
      <Tabs isFitted colorScheme="black" mt={10}>
        <TabList m="auto" w={{base: "xs", md: "md  ", lg: "xl"}}>
          <Tab>New Arrivals</Tab>
          <Tab>Gifts & Sets</Tab>
          <Tab>Dermstore Exclusive</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box m='auto' display={{base:'block', lg:'none'}}><Scarousel2Base items={newArrivalsCarousel} /></Box>
            <Box m='auto' display={{base:'none', lg:'block'}}><Scarousel2 items={newArrivalsCarousel} /></Box>
          </TabPanel>
          <TabPanel>
          <Box m='auto' display={{base:'block', lg:'none'}}><Scarousel2Base items={giftSetCarousel} /></Box>
            <Box m='auto' display={{base:'none', lg:'block'}}><Scarousel2 items={giftSetCarousel} /></Box>
          </TabPanel>
          <TabPanel>
            <Box m='auto' display={{base:'block', lg:'none'}}><Scarousel2Base items={exclusiveCarousel} /></Box>
            <Box m='auto' display={{base:'none', lg:'block'}}><Scarousel2 items={exclusiveCarousel} /></Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <FeaturedBrands />
    </Box>
  );
}
