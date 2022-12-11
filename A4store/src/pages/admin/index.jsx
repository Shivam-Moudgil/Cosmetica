import React from 'react'
import { Box, Grid, HStack, VStack } from '@chakra-ui/react'
import AdminSidebar from '../../../components/admin/home/Admin.sidebar'
import AdminNavbar from '../../../components/admin/home/Admin.navbar'
import AdminInfoCards from '../../../components/admin/home/Admin.infoCards'
import LineChart1 from '../../../components/admin/home/charts/LineChart'

const AdminHome = () => {
  return (
    <HStack w="full" spacing={0} overflow="hidden">
      <Box w="18%" display={{ base: 'none', lg: 'flex' }}>
        <AdminSidebar location={'Admin__home'} />
      </Box>
      <VStack w={{ base: 'full', lg: '82%' }} bg="whiteAlpha.800" h="100vh">
        {/* Admin navbar show in small screens */}
        <AdminNavbar />
        {/* Info cards  */}
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr', lg: 'repeat(2,1fr)' }}
          gap="24px"
          w="full"
          justifyContent={'space-between'}
        >
          {new Array(4).fill(0).map((ele, ind) => (
            <AdminInfoCards key={new Date().getMilliseconds + ind} />
          ))}
        </Grid>
        {/* Chart */}
        <LineChart1 />
      </VStack>
    </HStack>
  )
}

export default AdminHome

AdminHome.getLayout = function PageLayout(page) {
  return <>{page}</>
}
