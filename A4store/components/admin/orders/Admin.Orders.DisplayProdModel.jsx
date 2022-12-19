import {
  Center,
  CloseButton,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { BsStarFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'

const OrdersDisplaySingleProductModel = ({ isVisible, toggleVisibility }) => {
  const { singlePurchasedItem } = useSelector((s) => s.admin_products)

  if (isVisible)
    return (
      <VStack
        position="fixed"
        left={{ base: '0', lg: '22%' }}
        bg="white"
        border="1px solid gold"
        boxShadow={'lg'}
        rounded="10px"
        w={{ base: 'full', lg: '800px' }}
        zIndex={14}
        h={{ base: 'fit-content', md: '400px' }}
        p="5px"
        px="10px"
        justify={'space-between'}
        spacing={0}
      >
        <HStack w="full" h="10%" justify={'flex-end'} px="10px">
          <CloseButton fontSize={17} onClick={toggleVisibility} />
        </HStack>
        <Stack w="full" h="90%" direction={{ base: 'column', md: 'row' }}>
          <HStack
            boxShadow={'lg'}
            w={{ base: 'full', lg: '35%' }}
            h={{ base: '200px', md: '70%' }}
            alignSelf="center"
          >
            <Image
              w="full"
              h="full"
              objectFit={{ base: 'contain', md: 'cover' }}
              src={singlePurchasedItem.product?.image}
            />
          </HStack>
          <VStack
            align={'flex-start'}
            justify="center"
            p="5px"
            px="20px"
            w={{ base: 'full', lg: '65%' }}
            h="80%"
          >
            <Text fontSize={19} fontWeight={600}>
              {singlePurchasedItem.product?.name}
            </Text>
            <Center>
              <Text>Quantity:</Text>
              <Text fontWeight={'500'}>{singlePurchasedItem.product?.qty}</Text>
            </Center>
            <HStack>
              <Text>Category:</Text>
              <Text color="teal" textTransform={'uppercase'}>
                {singlePurchasedItem.product?.category}
              </Text>
            </HStack>
            <HStack>
              <HStack spacing={0}>
                {new Array(singlePurchasedItem.product?.rating || 0)
                  .fill(0)
                  .map((_, i) => (
                    <Icon key={i} color="teal" as={BsStarFill} />
                  ))}
              </HStack>
              <Text>{`(${singlePurchasedItem.product?.ratingcount})`}</Text>
            </HStack>
            <Text color="red" fontSize={26} fontWeight={600}>
              ${singlePurchasedItem.product?.price}
            </Text>
          </VStack>
        </Stack>
      </VStack>
    )
}

export default OrdersDisplaySingleProductModel
