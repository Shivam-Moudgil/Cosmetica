import {Box, Flex,Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import Scarousel2 from "./carosel2";
import Scarousel from "./Carouse";
import { bestSellerCarousel, exclusiveCarousel, giftSetCarousel, newArrivalsCarousel, mainCarousel, offerCarousel } from "./carouselData";
import {Category, FeaturedBrands, StaticBlog} from "./HomePageBottom";
import {
  BestSellersCarousel,
  DermstoreExclusiveCarousel,
  GiftSetsCarousel,
  HomeNav,
  NewArrivalsCarousel,

} from "./HomePageCarousals";
import ImageCarousel from "./imageCarousel";

export default function HomePage() {
  return (
    <Box
      w="100vw"
      m="auto"
      pos="relative"
    //   top={{base: "50px", md: "61px", lg: "148px"}}
    >
      <HomeNav />
      <ImageCarousel items={mainCarousel} />
      <Box align='center' my={6} fontFamily="monospace">
        <Text fontSize={{base:'16px', md:'20px',lg:'24px'}}>Earn 3x Points on SENTÉ</Text>
        <Text fontSize={{base:'10px', md:'12px', lg:'14px'}}>For a limited-time, Rewards members get TRIPLE points on clinical-strength, dermatologist recommended, anti-aging formulas for sensitive skin.</Text>
      </Box>
      <Flex direction={{base:'column', md:'column', lg:'row'}} m='auto' justifyContent='space-around'>
        <Image src='https://static.thcdn.com/images/medium/webp/widgets/208-us/41/1116-STDCRE-43990-CM-DS-Q4-Batching-676x556-044641.jpeg' alt='Sente' 
            w={{base: "200px", md: "350px", lg: "500px"}}
            h={{base: "200px", md: "300px", lg: "400px"}}
            mt={2}/>
        <Scarousel items={offerCarousel} />
      </Flex>
      {/* <OfferCarousel /> */}
      <Category />
      <Scarousel2 items={bestSellerCarousel} />
      <StaticBlog />
      <Tabs isFitted colorScheme="black" mt={10}>
        <TabList m="auto" w={{base: "xs", md: "md  ", lg: "xl"}}>
          <Tab>New Arrivals</Tab>
          <Tab>Gifts & Sets</Tab>
          <Tab>Dermstore Exclusive</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Scarousel2 items={newArrivalsCarousel} />
          </TabPanel>
          <TabPanel>
            <Scarousel2 items={giftSetCarousel} />
          </TabPanel>
          <TabPanel>
            <Scarousel2 items={exclusiveCarousel} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <FeaturedBrands />
    </Box>
  );
}
