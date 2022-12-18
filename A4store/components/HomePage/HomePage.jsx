import {Box, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import Scarousel2 from "./carosel2";
import Scarousel from "./Carouse";
import { bestSellerCarousel, exclusiveCarousel, giftSetCarousel, newArrivalsCarousel, offerCarousel } from "./carouselData";
import {Category, FeaturedBrands, StaticBlog} from "./HomePageBottom";
import {
  BestSellersCarousel,
  DermstoreExclusiveCarousel,
  GiftSetsCarousel,
  HomeNav,
  NewArrivalsCarousel,

} from "./HomePageCarousals";

export default function HomePage() {
  return (
    <Box
      w="100vw"
      m="auto"
      pos="relative"
      top={{base: "50px", md: "61px", lg: "148px"}}
    >
      <HomeNav />
      <Scarousel items={offerCarousel} />
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
