import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  Text,
  Toast,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { formatPrice } from '../../Cart/Cart Specs/Cart_Price'
import RadioG from '../payment/Radio'
const Form1 = ({ setFormValidation }) => {
  const [show, setShow] = React.useState(false)
  const [formData, setFormData] = useState({ fname: '', lname: '', phone: '' })
  useEffect(() => {
    const { fname, lname, phone } = formData
    if (!fname || !lname || !phone) {
      setFormValidation()
    }
  }, [])

  const handleClick = () => {
    setShow(!show)
  }
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Shipping Details
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            First name
          </FormLabel>
          <Input
            value={formData.fname}
            onChange={(e) =>
              setFormData({ ...formData, fname: e.target.value })
            }
            id="first-name"
            placeholder="First name"
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Last name
          </FormLabel>
          <Input
            value={formData.lname}
            onChange={(e) =>
              setFormData({ ...formData, lname: e.target.value })
            }
            id="last-name"
            placeholder="First name"
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="tel" fontWeight={'normal'}>
          Phone Number
        </FormLabel>
        <Input
          value={formData.phone}
          onChange={(e) => {
            const { fname, lname, phone } = formData
            setFormData({ ...formData, phone: e.target.value })
            if (fname && lname && phone) {
              setFormValidation(true)
            }
          }}
          id="email"
          type="number"
          isRequired
        />
        <FormHelperText>We'll never share your number.</FormHelperText>
      </FormControl>

      <FormControl isDisabled>
        <FormLabel htmlFor="code" fontWeight={'normal'} mt="2%">
          Coupon Code
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            value="Cosmetica_In_your_cart_boi"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  )
}

const Form2 = ({ setFormValidation }) => {
  const [formData, setFormData] = useState({
    country: '',
    street: '',
    city: '',
    state: '',
    pin: '',
  })
  useEffect(() => {
    const { country, street, state, city, pin } = formData
    if (!country || !street || !state || !city || !pin) {
      setFormValidation()
    }
  }, [])

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Shipping Address
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
        >
          Country / Region
        </FormLabel>
        <Select
          value={formData.country}
          onChange={({ target: { value } }) =>
            setFormData({ ...formData, country: value })
          }
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Japan</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%"
        >
          Street address
        </FormLabel>
        <Input
          value={formData.street}
          onChange={({ target: { value } }) => {
            setFormData({ ...formData, street: value })
            localStorage.setItem('address', JSON.stringify(value))
          }}
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%"
        >
          City
        </FormLabel>
        <Input
          value={formData.city}
          onChange={({ target: { value } }) =>
            setFormData({ ...formData, city: value })
          }
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%"
        >
          State / Province
        </FormLabel>
        <Input
          value={formData.state}
          onChange={({ target: { value } }) =>
            setFormData({ ...formData, state: value })
          }
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%"
        >
          ZIP / Postal
        </FormLabel>
        <Input
          value={formData.pin}
          onChange={({ target: { value } }) => {
            const { country, street, state, city, pin } = formData
            setFormData({ ...formData, pin: value })
            if (country && street && state && city && pin) {
              setFormValidation(true)
            }
          }}
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </>
  )
}

const Form3 = () => {
  let total = JSON.parse(localStorage.getItem('total'))

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Payment Section
      </Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Shipping + Tax">
          <Text>{formatPrice(total + 1000)}</Text>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Discount">
          <Text textDecor="underline">{formatPrice(1000)}</Text>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(total)}
          </Text>
        </Flex>
      </Stack>
      <RadioG />
    </>
  )
}
const OrderSummaryItem = (props) => {
  const { label, value, children } = props
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  )
}

export { Form1, Form2, Form3 }
