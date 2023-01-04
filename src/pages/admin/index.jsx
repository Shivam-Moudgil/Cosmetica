import { Box, Grid, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { GrDeliver } from 'react-icons/gr'
import { IoWalletSharp } from 'react-icons/io5'
import {
  MdOutlinePendingActions,
  MdOutlineProductionQuantityLimits,
} from 'react-icons/md'
import AdminInfoCards from '../../../components/admin/home/Admin.infoCards'
import AdminNavbar from '../../../components/admin/home/Admin.navbar'
import AdminSidebar from '../../../components/admin/home/Admin.sidebar'
import RevenueBarChart from '../../../components/admin/home/charts/RevenueBarChart'
import UsersBarChart from '../../../components/admin/home/charts/UsersBarChart'
import PurchasedItems from '../../../models/Order'
import { wrapper } from '../../../redux/store'
import dbConnect from '../../../utils/mongo'

import {
  getActiveUsers,
  getAllPendingAndDeleveredItemsOfYear,
  getCurrentTime,
  getDaywiseSaleData,
  getRevenueOfGivenYear,
  getTotalPuchasedItemsQuantity,
  getTotalQuantityOfYear,
} from '../../../assets/chartData'
import { refreshCookie } from '../../../middlewares/checkCookie'

const AdminHome = ({
  totalSaleAndQuantity,
  currentYearRevenue,
  lastYearRevenue,
  totalUsers,
  totalActiveUsers,
  totalCurrentYearQuantity,
  totalLastYearQuantity,
  totalOrdersDetails,
}) => {
  return (
    <HStack w="full" spacing={0} overflowX="hidden" pb="20px" pt="70px">
      <Box w="18%" display={{ base: 'none', lg: 'flex' }}>
        <AdminSidebar location={'Admin__home'} />
      </Box>
      <VStack w={{ base: 'full', lg: '82%' }} bg="whiteAlpha.800" spacing={8}>
        {/* Admin navbar show in small screens */}
        <AdminNavbar />
        {/* Info cards  */}
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr', lg: 'repeat(2,1fr)' }}
          gap="24px"
          w="90%"
          justifyContent={{ base: 'center', md: 'space-between' }}
        >
          <AdminInfoCards
            quantity={false}
            currentYearData={currentYearRevenue}
            lastYearData={lastYearRevenue}
            title={`Total Year's revenue`}
            icon={IoWalletSharp}
            checkDiff={true}
          />
          <AdminInfoCards
            currentYearData={totalCurrentYearQuantity}
            lastYearData={totalLastYearQuantity}
            quantity={true}
            title={`Total Quantity of Year`}
            icon={MdOutlineProductionQuantityLimits}
            checkDiff={true}
          />
          <AdminInfoCards
            quantity={false}
            totalPendingOrders={totalOrdersDetails?.pending}
            title={`Total Pending orders`}
            icon={MdOutlinePendingActions}
            checkDiff={false}
          />
          <AdminInfoCards
            quantity={false}
            totalDeleveredOrders={totalOrdersDetails?.delevered}
            title={`Total delevered orders`}
            icon={GrDeliver}
            checkDiff={false}
          />
        </Grid>
        {/* Chart */}
        <VStack
          w="full"
          justify={'center'}
          style={{ marginTop: '30px' }}
          spacing={10}
        >
          <RevenueBarChart data={totalSaleAndQuantity} />
          <UsersBarChart
            totalUsers={totalUsers}
            totalActiveUsers={totalActiveUsers}
            data={totalSaleAndQuantity}
          />
        </VStack>
      </VStack>
    </HStack>
  )
}

export default AdminHome

AdminHome.getLayout = function PageLayout(page) {
  return <>{page}</>
}

export const getServerSideProps = wrapper.getStaticProps(
  (store) => async (ctx) => {
    try {
      const response = refreshCookie(ctx.req, ctx.res)
      if (response === 'redirect') {
        return {
          redirect: {
            destination: '/admin/login',
            permanent: false,
          },
        }
      }

      //can dispatch reducer here as well now
      dbConnect()
      let purchasedItems = await PurchasedItems.find().populate(['product'])
      let allUsers = []
      purchasedItems = JSON.parse(JSON.stringify(purchasedItems))

      //total Sale data for Revenue Bar chart
      let totalSaleAndQuantity = getDaywiseSaleData(purchasedItems)

      //Revenue related Info-card data
      let currentYearRevenue = getRevenueOfGivenYear(
        purchasedItems,
        getCurrentTime().currYear,
      )
      let lastYearRevenue = getRevenueOfGivenYear(
        purchasedItems,
        getCurrentTime().currYear - 1,
      )

      //Users currentYear and lastYear count and total user count

      let totalUsers = allUsers.length
      let totalActiveUsers = getActiveUsers(purchasedItems)

      //total Quantity purchased
      const todayTotalQuantity = getTotalPuchasedItemsQuantity(
        purchasedItems,
        getCurrentTime().currDate,
      )
      const lastDayTotalQuantity = getTotalPuchasedItemsQuantity(
        purchasedItems,
        getCurrentTime().currDate - 1,
      )

      //Yearly quantity
      const totalCurrentYearQuantity = getTotalQuantityOfYear(
        purchasedItems,
        getCurrentTime().currYear,
      )
      const totalLastYearQuantity = getTotalQuantityOfYear(
        purchasedItems,
        getCurrentTime().currYear - 1,
      )

      //Details of pending and delevered orders
      const totalOrdersDetails = getAllPendingAndDeleveredItemsOfYear(
        purchasedItems,
      )

      return {
        props: {
          totalSaleAndQuantity,
          currentYearRevenue,
          lastYearRevenue,
          totalUsers,
          totalActiveUsers,
          todayTotalQuantity,
          lastDayTotalQuantity,
          totalCurrentYearQuantity,
          totalLastYearQuantity,
          totalOrdersDetails,
        },
      }
    } catch (error) {
      console.log(error)
      return {
        props: {},
      }
    }
  },
)
