import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import CategoriesMainItemsGrid from './CategoriesMainItemsGrid'

const CategoriesMainItemsSection = ({ products }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Container maxW={{ base: 'full', ld: '75%' }}>
      <Heading fontFamily="Poly, serif" fontSize="24px" fontWeight="400">
        {/* {page.title} */}
      </Heading>
      <Text fontSize={'14px'} py={1}>
        4624 results
      </Text>
      <Text fontSize={'14px'} lineHeight={'5'} py={4}>
        {/* {page.summary} */}
      </Text>

      <HStack justifyContent={'flex-end'} w="280px" my={10}>
        <Select fontSize={'14'}>
          <option>Default</option>
          <option value="bestseller">Bestseller</option>
          <option value="low-high">Price: Low to high</option>
          <option value="high-low">Price: High to low</option>
          <option value="alphabetically">A - Z</option>
          <option value="discount">Percentage Discount</option>
          <option value="rated">High Rated</option>
        </Select>
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Added to Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack
              justifyContent="flex-start"
              alignItems="flex-start"
              m="auto"
            >
              <Box boxSize="270px">
                <Image src={''} objectFit="contain" />
              </Box>
              <Box>
                <Text fontSize="15">{''}</Text>
                <Text py={3}>Quantity: 1</Text>
                <Text py={2} fontWeight="bold" fontSize="16">
                  {/* {modalData.price?.toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                    style: 'currency',
                    currency: 'INR',
                  })} */}
                </Text>
              </Box>
            </HStack>
            <HStack py={5} justifyContent="space-between">
              <Heading fontWeight="medium" fontSize="18">
                Subtotal: <br />
                (2 items in your cart)
              </Heading>
              <Text py={2} fontWeight="bold" fontSize="16">
                {/* {modalData.price?.toLocaleString('en-IN', {
                  maximumFractionDigits: 2,
                  style: 'currency',
                  currency: 'INR',
                })} */}
              </Text>
            </HStack>
            <Heading fontSize="16" fontWeight="bold" mb={5}>
              Rewards members earn 1220 points on this order
            </Heading>
            <Flex gap={3} direction={{ base: 'column-reverse', md: 'row' }}>
              <Link href="/" passHref>
                <Button
                  borderRadius="none"
                  variant="unstyled"
                  w="full"
                  fontWeight="normal"
                  border="2px solid black"
                  fontSize="14"
                  onClick={onClose}
                >
                  CONTINUE SHOPPING
                </Button>
              </Link>
              <Button
                borderRadius="none"
                variant="unstyled"
                bg="#222"
                color="white"
                w="full"
                fontWeight="normal"
                fontSize="14"
              >
                <Link href="/cart" passHref>
                  VIEW CART
                </Link>
              </Button>
            </Flex>
          </ModalBody>

        </ModalContent>
      </Modal>

      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={8}
        w="100%"
      >
        {products?.map((ele) => (
          <CategoriesMainItemsGrid key={ele._id} item={ele} />
        ))}
      </Grid>
    </Container>
  )
}

export default CategoriesMainItemsSection
