import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";


const categoryData = [
    {id:1, title:'Skin Care' , imageUrl:'https://static.thcdn.com/images/small/webp/widgets/208-us/20/DS_Round_Nav_-_Untitled_Page_%287%29-052520.png'},
    {id:2, title:'Tools & Devices' , imageUrl:'https://static.thcdn.com/images/small/webp/widgets/208-us/36/DS_Round_Nav_-_Untitled_Page_%2833%29-085536.png'},
    {id:3, title:'Moisturizers' , imageUrl:'https://static.thcdn.com/images/small/webp/widgets/208-us/32/DS_Round_Nav_-_Untitled_Page_%289%29-052632.png'},
    {id:4, title:'Hair Care' , imageUrl:'https://static.thcdn.com/images/small/webp/widgets/208-us/03/DS_Round_Nav_-_Untitled_Page_%2810%29-052703.png'},
    {id:5, title:'Makeup' , imageUrl:'https://static.thcdn.com/images/small/webp/widgets/208-us/49/DS_Round_Nav_-_Untitled_Page_%2813%29-053649.png'},
    {id:6, title:'Fragrance' , imageUrl:'https://static.thcdn.com/images/small/webp/widgets/208-us/36/DS_Round_Nav_-_Untitled_Page_%2825%29-063536.png'},
];

const brandsData = [
    {id:1, title:'Sunday Riley' , imageUrl:'https://static.thcdn.com/images/small/webp/widgets/208-us/19/SR-logo_2000x2000-060919.jpg'},
    {id:2, title:'Skin Ceuticals' , imageUrl:'https://static.thcdn.com/images/small/webp/widgets/208-us/59/Skinc-014559.jpg'},
    {id:3, title:'elta MD Skin Care' , imageUrl:'https://static.thcdn.com/images/small/webp/widgets/208-us/34/original-220322-ELTAMD-LOGO-RGB-01_%28002%29-014534.png'},
    {id:4, title:'Chantecaille' , imageUrl:'https://static.thcdn.com/images/small/webp/widgets/208-us/09/Chantecaille-033909.png'},
    {id:5, title:'Skin Medica' , imageUrl:'https://static.thcdn.com/images/small/webp/widgets/208-us/08/SkinMedica-014608.jpg'},
    {id:6, title:'Augustinus Bader' , imageUrl:'https://static.thcdn.com/images/small/webp/widgets/208-us/21/augustinusbader-124221.gif'},
];

const blogData = [
    {id:1, title:'New form Fekkai' , imageUrl:'https://static.thcdn.com/images/small/webp/widgets/208-us/39/1116-STDCRE-43990-CM-DS-Q4-Batching-676x556-063539.jpeg', desc:'Three soon-to-be faves to smooth, volumize & hold.'},
    {id:2, title:'Ask the Esthetician' , imageUrl:'https://static.thcdn.com/images/small/webp/widgets/208-us/30/Ask_The_Esthetician_676x556-092905-040630.png', desc:'Sign up for personal recommendations on all things beauty from our in-house estheticians.'},
    {id:3, title:'Serum Superstars' , imageUrl:'https://static.thcdn.com/images/small/webp/widgets/208-us/10/1116-STDCRE-43990-CM-DS-Q4-Batching-676x556-063610-034610.jpg', desc:'The most concentrated products in your skin care arsenal for targeted treatment.'}
];

export function Category(){
    return (
        <Box maxW='full' my={10}>
            <Heading align='center' mb={10}>Category</Heading>
            <SimpleGrid alignItems='center' justifyContent='space-evenly' columns={{base:2, md:3, lg:6}}>
                {categoryData.map((el)=>(<Box key={el.id} alignSelf='center'>
                    <Image src={el.imageUrl} alt={el.title} w='180px' />
                </Box>))}
            </SimpleGrid>
        </Box>
    )
}

export function FeaturedBrands(){
    return (
        <Box maxW='full' mx={4} my={10}>
            <Heading align='center' my={10}>Featured Brands</Heading>
            <SimpleGrid m='auto' alignItems='center' justifyContent='space-evenly' columns={{base:2, md:3, lg:6}}>
                {brandsData.map((el)=>(<Box key={el.id} alignSelf='center'>
                    <Image src={el.imageUrl} alt={el.title}  w={{base:'120px', md:'150px', lg:'180px'}} />
                </Box>))}
            </SimpleGrid>
        </Box>
    )
}

export function StaticBlog(){
    return (
        <Box maxW='full' mx={4}>
            {/* <Text align='center'>Featured Brands</Text> */}
            <SimpleGrid alignItems='center' justifyContent='space-evenly' mx={4} columns={{base:1, md:2, lg:3}} >
                {blogData.map((el)=>(<Box key={el.id} alignSelf='center' align={'center'}>
                    <Image src={el.imageUrl} alt={el.title}  w={{base:'200px', md:'300px', lg:'400px'}} h={{base:'200px', md:'300px', lg:'400px'}} mt={2} />
                    <Text fontSize={{base:'14px', md:'16px', lg:'18px' }} mt={2}>{el.title}</Text>
                    <Text fontSize={{base:'10px', md:'12px', lg:'14px' }} w={{base:'200px', md:'300px', lg:'400px'}} mt={2}>{el.desc}</Text>
                </Box>))}
            </SimpleGrid>
        </Box>
    )
}
