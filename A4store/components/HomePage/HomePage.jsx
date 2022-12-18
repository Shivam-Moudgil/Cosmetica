import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Category, FeaturedBrands, StaticBlog } from "./HomePageBottom";
import { BestSellersCarousel, DermstoreExclusiveCarousel, GiftSetsCarousel, HomeNav, NewArrivalsCarousel, OfferCarousel } from "./HomePageCarousals";

export default function HomePage() {
    return(
        <Box w='100vw' m='auto' pos='relative' top={{base:'50px',md:'61px',lg:'148px'}}>
            <HomeNav />
            <OfferCarousel />
            <Category />
            <BestSellersCarousel />
            <StaticBlog />
            <Tabs isFitted colorScheme='black' mt={10}>
                <TabList m='auto' w={{base:'xs',md:'md  ',lg:'xl'}}>
                    <Tab>New Arrivals</Tab>
                    <Tab>Gifts & Sets</Tab>
                    <Tab>Dermstore Exclusive</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    <NewArrivalsCarousel />
                    </TabPanel>
                    <TabPanel>
                    <GiftSetsCarousel />
                    </TabPanel>
                    <TabPanel>
                    <DermstoreExclusiveCarousel />
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <FeaturedBrands />
        </Box>
    )
};
