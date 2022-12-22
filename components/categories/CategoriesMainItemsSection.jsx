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
  ModalHeader,
  ModalOverlay,
  Select,
  Skeleton,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import CategoriesMainItemsGrid from './CategoriesMainItemsGrid'

const CategoriesMainItemsSection = ({
  products,
  updateFilters,
  filters,
  length,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { loading } = useSelector((s) => s.categoryFilter)
  return (
    <Container maxW={{ base: 'full', ld: '75%' }}>
      <Heading fontFamily="Poly, serif" fontSize="24px" fontWeight="400">
        {/* {page.title} */}
      </Heading>
           <Text
        w={"32"}
        fontWeight={"extrabold"}
        bg={"bisque"}
        // color="white"
        fontFamily={"cursive"}
        textAlign="center"
        p={1}
        border={"2px solid grey"}
        fontSize={"17"}
      >
        {length} results
      </Text>
      <Text fontSize={'14px'} lineHeight={'5'} py={4}>
        {/* {page.summary} */}
      </Text>

      <HStack justifyContent={'flex-end'} w="280px" my={10}>
        <Select
          value={filters.typeOfSort}
          onChange={({ target: { value } }) => {
            updateFilters('typeOfSort', value)
          }}
          fontSize={'14'}
        >
          <option value="">Default</option>
          <option value="asc">Price: Low to high</option>
          <option value="desc">Price: High to low</option>
          <option value="alpSort">A - Z</option>
          <option value="rating">High Rated</option>
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
                  akljdfkj
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
          <Skeleton isLoaded={!loading}>
            <CategoriesMainItemsGrid key={ele._id} item={ele} />
          </Skeleton>
        ))}
      </Grid>
    </Container>
  )
}

export default CategoriesMainItemsSection
