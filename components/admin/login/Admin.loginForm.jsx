import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Switch,
  Text,
  VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { adminLogin } from '../../../redux/admin_auth/admin.actions'

const AdminLoginForm = ({ formInput, updateFormInuput }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (formInput.email === '' || formInput.password === '') {
      return alert('Please enter all details')
    }
    updateFormInuput(formInput)
  }

  return (
    <VStack w="full" h="100vh" bg="gray.200" justify={'flex-end'} pb="20">
      <VStack mb="20px">
        <Heading fontSize={{ base: '25', md: 30 }} fontWeight={'bold'}>
          Nice to see you Admin!
        </Heading>
        <Text fontSize={14} fontWeight={600}>
          Enter your emil and password to sign in
        </Text>
      </VStack>
      <VStack
        w={{ base: '90%', sm: '80%', md: '60%', lg: '54%' }}
        spacing={4}
        as={'form'}
        onSubmit={handleSubmit}
        justify="center"
      >
        <FormControl>
          <FormLabel fontSize={18}>Email</FormLabel>
          <Input
            value={formInput.email}
            onChange={({ target: { value } }) =>
              updateFormInuput({ ...formInput, email: value })
            }
            border="1px solid gray"
            p="10px"
            rounded="13px"
            variant={'unstyled'}
            placeholder="Your email address"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize={18}>Password</FormLabel>
          <Input
            p="10px"
            border="1px solid gray"
            rounded="13px"
            fontWeight={600}
            variant={'unstyled'}
            type="password"
            placeholder="Your password"
            value={formInput.password}
            onChange={({ target: { value } }) =>
              updateFormInuput({ ...formInput, password: value })
            }
          />
        </FormControl>
        <FormControl gap="8px" display="flex" alignItems="center">
          <Switch
            onChange={({ target: { checked } }) =>
              updateFormInuput({ ...formInput, isRemembered: checked })
            }
          />
          <FormLabel htmlFor="Remember me" mb="0">
            Remember me
          </FormLabel>
        </FormControl>
        <Button type="submit" w="full" variant={'solid'} colorScheme="teal">
          SIGN IN
        </Button>
      </VStack>
    </VStack>
  )
}

export default AdminLoginForm
