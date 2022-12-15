import React from 'react'
import { Box, Grid, HStack, VStack } from '@chakra-ui/react'
import AdminSidebar from '../../../components/admin/home/Admin.sidebar'
import AdminNavbar from '../../../components/admin/home/Admin.navbar'
import AdminInfoCards from '../../../components/admin/home/Admin.infoCards'
import RevenueBarChart from '../../../components/admin/home/charts/RevenueBarChart'
import UsersBarChart from '../../../components/admin/home/charts/UsersBarChart'
import Cookie from 'cookies'
import jwt from 'jsonwebtoken'
import dbConnect from '../../../utils/mongo'
import { PurchasedItems } from '../../../models/purchasedItems.model'
import { wrapper } from '../../../redux/store'
import {
  getCurrentTime,
  getRevenueOfGivenYear,
  getActiveUsers,
  getDaywiseSaleData,
  getTotalPuchasedItemsQuantity,
} from '../../../assets/chartData'
import { Users } from '../../../models/users.model'

const AdminHome = ({
  totalSaleAndQuantity,
  currentYearRevenue,
  lastYearRevenue,
  totalUsers,
  totalActiveUsers,
}) => {
  return (
    <HStack w="full" spacing={0} overflow="hidden" pb="20px" pt="70px">
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
          {new Array(4).fill(0).map((ele, ind) => (
            <AdminInfoCards
              currentYearData={currentYearRevenue}
              lastYearData={lastYearRevenue}
              title={`Total Year's revenue`}
              key={new Date().getMilliseconds + ind}
            />
          ))}
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
  (store) => async (req, res) => {
    const cookie = req.req.cookies.authCookie
    try {
      if (cookie) {
        let verification = jwt.verify(cookie, process.env.JWT_SECRET)
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
          cookie.set('authCookie', newToken)
        }
      }
    } catch (error) {
      console.log(error)
    }

    //can dispatch reducer here as well now
    await dbConnect()
    let purchasedItems = await PurchasedItems.find().populate([
      'user',
      'product',
    ])
    let allUsers = await Users.find()
    purchasedItems = JSON.parse(JSON.stringify(purchasedItems))
    allUsers = JSON.parse(JSON.stringify(allUsers))

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
    return {
      props: {
        totalSaleAndQuantity,
        currentYearRevenue,
        lastYearRevenue,
        totalUsers,
        totalActiveUsers,
        todayTotalQuantity,
        lastDayTotalQuantity,
      },
      // revalidate: 3600,
    }
  },
)

// AdminHome.getInitialProps = async ({ req, res }) => {
//   //can dispatch reducer here as well now
//   await dbConnect()
//   let purchasedItems = await PurchasedItems.find().populate(['user', 'product'])
//   let allUsers = await Users.find()
//   purchasedItems = JSON.parse(JSON.stringify(purchasedItems))
//   allUsers = JSON.parse(JSON.stringify(allUsers))

//   //total Sale data for Revenue Bar chart
//   let totalSaleAndQuantity = getDaywiseSaleData(purchasedItems)

//   //Revenue related Info-card data
//   let currentYearRevenue = getRevenueOfGivenYear(
//     purchasedItems,
//     getCurrentTime().currYear,
//   )
//   let lastYearRevenue = getRevenueOfGivenYear(
//     purchasedItems,
//     getCurrentTime().currYear - 1,
//   )

//   //Users currentYear and lastYear count and total user count

//   let totalUsers = allUsers.length
//   let totalActiveUsers = getActiveUsers(purchasedItems)

//   //total Quantity purchased
//   const todayTotalQuantity = getTotalPuchasedItemsQuantity(
//     purchasedItems,
//     getCurrentTime().currDate,
//   )
//   const lastDayTotalQuantity = getTotalPuchasedItemsQuantity(
//     purchasedItems,
//     getCurrentTime().currDate - 1,
//   )

//   //-----------------

//   const cookies = new Cookie(req, res)
//   let cookie = cookies || cookies.get('authCookie')
//   try {
//     if (cookie) {
//       let verification = jwt.verify(cookie, process.env.JWT_SECRET)
//       if (verification && verification.isRemembered) {
//         let newToken = jwt.sign(
//           {
//             userName: verification.userName,
//             email: verification.email,
//             isRemembered: verification.isRemembered,
//           },
//           process.env.JWT_SECRET,
//           { expiresIn: '30 days' },
//         )
//         cookie.set('authCookie', newToken)
//       }
//     }
//   } catch (error) {
//     console.log(error)
//   }
//   return {
//     totalSaleAndQuantity,
//     currentYearRevenue,
//     lastYearRevenue,
//     totalUsers,
//     totalActiveUsers,
//     todayTotalQuantity,
//     lastDayTotalQuantity,
//   }
//   // revalidate: 3600,
// }
