import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
  Heading,
} from "@chakra-ui/react";
import {FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import {BiMailSend} from "react-icons/bi";

const Logo = (props) => {
  return (
    <Box
      display={"flex"}
      flexDir={["column", "row"]}
      gap="3"
      w={"100%"}
      alignItems="center"
    >
      <Box>
        <Image
          maxW={"20"}
        //   borderRadius={"6rem"}
          src="/admin_images/Colorlogowithbackground.svg"
        />
      </Box>
      <Heading fontSize={{base: 28, sm: 24}}>Cosmetica</Heading>
    </Box>
  );
};

const SocialButton = ({children, label, href}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({children}) => {
  return (
    <>
      <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
        {children}
      </Text>
    </>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box bg={"#0e1823"} color={"white"}>
      <Container as={Stack} maxW={"90%"} py={10}>
        <SimpleGrid
          templateColumns={{sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr"}}
          spacing={8}
        >
          <Stack spacing={4}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"}>
              © 2022 Copyright trip . All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack>
            <ListHeader>Company</ListHeader>
            <Link href={"/contact"}>About us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"mailto:shivammoudgil358@gmail.com"}>Contact us</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"/treasury/testimonials"}>Testimonials</Link>
          </Stack>
          <Stack>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Satus</Link>
          </Stack>
          <Stack>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("white")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("green.400", "green.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "green.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
