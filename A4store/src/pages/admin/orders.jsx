import { Box, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import AdminNavbar from '../../../components/admin/home/Admin.navbar'
import AdminSidebar from '../../../components/admin/home/Admin.sidebar'

const Orders = () => {
  return (
    <HStack
      w="full"
      spacing={0}
      h="100vh"
      overflowX="hidden"
      pb="20px"
      pt="70px"
      boxShadow={'lg'}
      border="1px solid grey"
    >
      <Box w="18%" display={{ base: 'none', lg: 'flex' }}>
        <AdminSidebar location={'Admin__orders'} />
      </Box>
      <VStack
        align="center"
        w={{ base: 'full', lg: '81%' }}
        bg="whiteAlpha.800"
        spacing={2}
        h="100vh"
        pt="50px"
      >
        <AdminNavbar />
      </VStack>
    </HStack>
  )
}

export default Orders
