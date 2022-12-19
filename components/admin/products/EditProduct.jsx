import React, { useEffect, useState } from 'react'
import {
  Button,
  CloseButton,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { editSingleProduct } from '../../../redux/admin_products/admin_products.actions'

const EditProductDetails = ({ isVisible, toggleVisiblity, refreshState }) => {
  const dispatch = useDispatch()
  const { singleProduct } = useSelector((s) => s.admin_products)
  const toast = useToast()

  const [newProductDetails, setNewProductDetails] = useState({
    name: '',
    image: '',
    quantity: 1,
    totalPrice: '',
    category: '',
  })
  useEffect(() => {
    setNewProductDetails({
      name: singleProduct.name?.replaceAll(' ', '') || '',
      image: singleProduct.image || '',
      quantity: singleProduct.qty || 1,
      totalPrice: singleProduct.price || '',
      category: singleProduct.category || '',
    })
    return () => {}
  }, [singleProduct.name])
  const handleChange = (e) => {
    const { name, value } = e.target
    setNewProductDetails({ ...newProductDetails, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      newProductDetails.name === '' ||
      newProductDetails.image === '' ||
      newProductDetails.totalPrice === '' ||
      newProductDetails.category === ''
    ) {
      return toast({
        position: 'top',
        title: 'Input feild Error!',
        description: 'Please fill all the fields to proceed!',
        status: 'warning',
        duration: 4000,
        isClosable: true,
      })
    }
    dispatch(editSingleProduct(singleProduct._id, newProductDetails))
    refreshState()
    toast({
      position: 'top',
      title: 'Product added!',
      description: 'New Product has been added successfully',
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
    toggleVisiblity()
  }
  return (
    <>
      {/* <Icon onClick={toggleVisiblity} cursor={'pointer'} as={GrEdit} /> */}
      {isVisible && (
        <VStack
          as="form"
          w={{ base: 'full', md: '500px' }}
          boxShadow="lg"
          position="fixed"
          bg="white"
          top="10%"
          left={{ base: '0', md: '17%', lg: '38%' }}
          px="19px"
          py="20px"
          onSubmit={handleSubmit}
        >
          <HStack w="full" justifyContent="flex-end" px="25px">
            <CloseButton fontSize={19} onClick={toggleVisiblity} />
          </HStack>
          <Text w="full" textAlign="center" fontSize={19} fontWeight={600}>
            Edit Product
          </Text>
          <Divider />
          <FormControl>
            <FormLabel>Name of Product</FormLabel>
            <Input
              name="name"
              value={newProductDetails.name}
              onChange={handleChange}
            />
          </FormControl>
          <HStack w="full">
            <FormControl w="60%">
              <FormLabel>Image url of Product</FormLabel>
              <Input
                name="image"
                type="url"
                value={newProductDetails.image}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl w="40%">
              <FormLabel>Category of Product</FormLabel>
              <Input
                name="category"
                value={newProductDetails.category}
                onChange={handleChange}
              />
            </FormControl>
          </HStack>

          <HStack w="full" justify="space-between">
            <FormControl>
              <FormLabel>Total price of Product</FormLabel>
              <Input
                name="totalPrice"
                type="number"
                value={newProductDetails.totalPrice}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Quantity of Product</FormLabel>
              <Input
                name="quantity"
                type="number"
                value={newProductDetails.quantity}
                onChange={handleChange}
              />
            </FormControl>
          </HStack>

          <Button
            type="submit"
            style={{ marginTop: '20px' }}
            w="50%"
            variant="solid"
            colorScheme="cyan"
          >
            Save Changes
          </Button>
        </VStack>
      )}
    </>
  )
}

export default EditProductDetails
