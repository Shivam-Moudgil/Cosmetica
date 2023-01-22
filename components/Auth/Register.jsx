import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Spinner,
  Stack,
  useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'

import React, { useState } from 'react'

const obj = {
  email: '',
  password: '',
  name: '',
}
const Registering = () => {
  const toast = useToast()
  const router = useRouter()
  const [load, setLoad] = useState(false)
  const [text, setText] = useState(obj)

  const handleChange = (e) => {
    const { value, name } = e.target
    setText({ ...text, [name]: value })
  }

  const { email, password, name } = text

  console.log('ok', text)
  const handleSubmit = async () => {
    if (email !== '' && password !== '' && name !== '') {
      setLoad(true)
      await axios
        .post('/api/auth/register', {
          email: email,
          password: password,
          name: name,
        })
        .then((res) => {
          setLoad(false)
          toast({
            title: 'User registered',
            position: 'top-right',
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
          router.replace('/login')
        })
        .catch((err) => {
          setLoad(false)
          console.log(err)
          toast({
            title: 'User is already registered',
            position: 'top-right',
            status: 'error',
            duration: 1000,
            isClosable: true,
          })
        })

      setText(obj)
    } else {
      toast({
        title: 'Input fields first',
        position: 'top-right',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      })
    }
  }

  return (
    <Stack direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              onChange={handleChange}
              value={name}
              type="name"
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              onChange={handleChange}
              value={email}
              name="email"
              type="email"
            />
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              onChange={handleChange}
              value={password}
              type="password"
            />
          </FormControl>

          <Button onClick={handleSubmit} colorScheme={'blue'} variant={'solid'}>
            {load ? <Spinner /> : 'Sign up'}
          </Button>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          loading="lazy"
          objectFit={'cover'}
          borderRadius={'2rem'}
          w={'90%'}
          src={
            'https://img.freepik.com/premium-vector/secure-login-sign-up-concept-illustration-user-use-secure-login-password-protection-website-social-media-account-vector-flat-style_7737-2270.jpg?w=900'
          }
        />
      </Flex>
    </Stack>
  )
}
export default Registering
