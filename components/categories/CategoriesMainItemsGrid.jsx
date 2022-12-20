import {
  Box,
  Button,
  Flex,
  GridItem,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const CategoriesMainItemsGrid = ({ item }) => {
  return (
    <GridItem
      key={item._id}
      w="100%"
      h={{ base: '300px', sm: '350px', lg: '400px' }}
      my={6}
    >
      <Flex
        direction="column"
        w="100%"
        h="100%"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Link href={`/product/${item._id}`}>
          <Box
            boxSize="80%"
            // onClick={async () => {
            //   await axios.post('/api/product/', item)
            // }}
          >
            <Image src={item.image} objectFit="contain" />
          </Box>
        </Link>
        <Text pt={3} fontSize="14" textAlign="center">
          {item.name}
        </Text>
        <Box
          display={'flex'}
          justifyContent="center"
          alignItems={'center'}
          gap={1}
        >
          <HStack spacing={0} m="auto">
            {new Array(item.rating).fill(0).map((elem) => (
              <AiFillStar />
            ))}
          </HStack>
          <Text>{item.ratingcount}</Text>
        </Box>
        <Text py={2} fontWeight="bold" textAlign="center" fontSize="14">
          {item.price?.toLocaleString('en-IN', {
            maximumFractionDigits: 2,
            style: 'currency',
            currency: 'INR',
          })}
        </Text>
        <Button
          borderRadius="none"
          variant="unstyled"
          bg="#222"
          color="white"
          w="full"
          fontWeight="normal"
          py={{ base: 1, lg: 2 }}
          onClick={async () => {
            onOpen()
            setModalData(item)
            try {
              await axios
                .post('/api/cart', {
                  product: item._id,
                  quantity: 1,
                })
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
            } catch (err) {
              console.log(err)
            }
          }}
        >
          Quick Buy
        </Button>
      </Flex>
    </GridItem>
  )
}

export default CategoriesMainItemsGrid
