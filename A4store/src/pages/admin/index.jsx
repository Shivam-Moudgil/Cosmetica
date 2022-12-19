import React from 'react'
import { Box, Grid, HStack, VStack } from '@chakra-ui/react'
import AdminSidebar from '../../../components/admin/home/Admin.sidebar'
import AdminNavbar from '../../../components/admin/home/Admin.navbar'
import AdminInfoCards from '../../../components/admin/home/Admin.infoCards'
import RevenueBarChart from '../../../components/admin/home/charts/RevenueBarChart'
import UsersBarChart from '../../../components/admin/home/charts/UsersBarChart'
import jwt from 'jsonwebtoken'
import dbConnect from '../../../utils/mongo'
import PurchasedItems from '../../../models/Order'
import { wrapper } from '../../../redux/store'
import { IoWalletSharp } from 'react-icons/io5'
import {
  MdOutlineProductionQuantityLimits,
  MdOutlinePendingActions,
} from 'react-icons/md'
import { GrDeliver } from 'react-icons/gr'

import {
  getCurrentTime,
  getRevenueOfGivenYear,
  getActiveUsers,
  getDaywiseSaleData,
  getTotalPuchasedItemsQuantity,
  getTotalQuantityOfYear,
  getAllPendingAndDeleveredItemsOfYear,
} from '../../../assets/chartData'
import Head from 'next/head'

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
            totalPendingOrders={totalOrdersDetails.pending}
            title={`Total Pending orders`}
            icon={MdOutlinePendingActions}
            checkDiff={false}
          />
          <AdminInfoCards
            quantity={false}
            totalDeleveredOrders={totalOrdersDetails.delevered}
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
  return (
    <>
      <Head>
        <title>Cosmetica</title>
        <meta
          name="description"
          content="Purchase beauty and cosmetic products"
        />
        <link rel="icon" href="/Colorlogowithbackground.svg" />
      </Head>
      {page}
    </>
  )
}

export const getServerSideProps = wrapper.getStaticProps(
  (store) => async (ctx) => {
    const {
      cookies: { admin_auth },
    } = ctx.req
    try {
      if (admin_auth) {
        let verification = jwt.verify(admin_auth, process.env.JWT_SECRET)
        if (verification && verification.isRemembered) {
          let newToken = jwt.sign(
            {
              userName: verification.userName,
              email: verification.email,
              isRemembered: verification.isRemembered,
            },
            process.env.JWT_SECRET,
            { expiresIn: '30 days' },
          )
          res.setHeader(
            'Set-Cookie',
            cookie.serialize('admin_auth', newToken, {
              httpOnly: true,
              secure: process.env.NODE_ENV !== 'development',
              sameSite: 'strict',
              maxAge: 60 * 60 * 24 * 30,
              path: '/',
            }),
          )
        }
      } else {
        return {
          redirect: {
            destination: '/admin/login',
            permanent: false,
          },
        }
      }

      //can dispatch reducer here as well now
      await dbConnect()
      let purchasedItems = await PurchasedItems.find().populate(['product'])
      let allUsers = []
      purchasedItems = JSON.parse(JSON.stringify(purchasedItems))
      // allUsers = JSON.parse(JSON.stringify(allUsers))

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
