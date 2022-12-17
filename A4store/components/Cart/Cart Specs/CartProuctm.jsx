import {
  Box,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import {FiGift} from "react-icons/fi";

export const CartProductMeta = (props) => {
  const { isGiftWrapping = true, image,category ,name} = props;
  let res=name.slice(0,44)
  return (
    <Stack direction="row" spacing="5" width="full">
      <Image
        rounded="lg"
        width="100px"
        height="100px"
        fit="cover"
        src={image}
        alt={name}
        border={"1px solid"}
        draggable="false"
        loading="lazy"
      />
      <Box pt="">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{res}</Text>
          <Text color={mode("gray.600", "gray.400")} fontSize="sm">
            {category}
          </Text>
        </Stack>
        {isGiftWrapping && (
          <HStack spacing="1" mt="3" color={mode("gray.600", "gray.400")}>
            <Icon as={FiGift} boxSize="4" />
            <Link fontSize="sm" textDecoration="underline">
              Add gift wrapping
            </Link>
          </HStack>
        )}
        
      </Box>
    </Stack>
  );
};
