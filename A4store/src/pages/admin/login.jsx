import React from 'react'
// import Image from 'next/image'

import { Image, HStack, VStack, Box } from '@chakra-ui/react'
import AdminLoginForm from '../../../components/admin/login/Admin.loginForm'
import AdminLoginNav from '../../../components/admin/login/Admin.loginNav'

const AdminLogin = () => {
  return (
    <HStack spacing={0} w="full" justify={'center'}>
      <Box
        position="absolute"
        top="2%"
        left={{ base: '0', lg: '17%' }}
        right={{ base: '0', lg: '17%' }}
      >
        <AdminLoginNav />
      </Box>
      <HStack w="50%" h="100vh" display={{ base: 'none', lg: 'flex' }} objectFit='contain'>
        <Image
          src="/admin_images/Colorlogowithbackground.svg"
          w="full"
          h="full"
        />
      </HStack>
      <VStack w={{ base: 'full', lg: '50%' }}>
        <AdminLoginForm />
      </VStack>
    </HStack>
  )
}

export default AdminLogin

AdminLogin.getLayout = function PageLayout(page) {
  return <>{page}</>
}
