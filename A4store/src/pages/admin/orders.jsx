import { Box, HStack, VStack } from '@chakra-ui/react'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../../components/admin/home/Admin.sidebar'
import OrdersDisplaySingleProductModel from '../../../components/admin/orders/Admin.Orders.DisplayProdModel'
import AdminOrdersFilters from '../../../components/admin/orders/Admin.Orders.Filters'
import AdminOrdersTable from '../../../components/admin/orders/Admin.Orders.Table'
import Pagination from '../../../components/admin/products/Pagination'
import ShowLimit from '../../../components/admin/products/ShowLimit'
import PurchasedItems from '../../../models/Order'
import dbConnect from '../../../utils/mongo'

const fetchData = (url) => {
  return axios.get(url)
}

const Orders = ({ purchasedItems, length: len }) => {
  const router = useRouter()
  const [items, setItems] = useState(purchasedItems)
  const [length, setLength] = useState(len || 0)
  const [status, setStatus] = useState(router.query.status || '')
  const [orderDate, setOrderDate] = useState(router.query.orderDate || '')
  const [deliveryDate, setDeliveryDate] = useState(
    router.query.deleveryDate || '',
  )
  const [qty, setQty] = useState(router.query.qty || '')
  const [page, setPage] = useState(+router.query.page || 1)
  const [limit, setLimit] = useState(Number(router.query.limit) || 15)
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    router.push(
      `/admin/orders?${status ? `status=${status}` : ''}${
        orderDate ? `&orderDate=${orderDate}` : ''
      }${deliveryDate ? `&deliveryDate=${deliveryDate}` : ''}${
        qty ? `&qty=${qty}` : ''
      }${page ? `&page=${page}` : ''}${limit ? `&limit=${limit}` : ''}`,
      undefined,
    )
    fetchData(
      `/api/admin/orders/orders?${status ? `status=${status}` : ''}${
        orderDate ? `&orderDate=${orderDate}` : ''
      }${deliveryDate ? `&deliveryDate=${deliveryDate}` : ''}${
        qty ? `&qty=${qty}` : ''
      }${page ? `&page=${page}` : ''}${limit ? `&limit=${limit}` : ''}`,
    )
      .then(({ data }) => {
        setItems(data.purchasedItems)
        setLength(data.length)
      })
      .catch((err) => console.error)
  }, [status, orderDate, deliveryDate, qty, page, limit])
  return (
    <HStack
      w="full"
      spacing={0}
      h="100vh"
      overflowX="hidden"
      pb="20px"
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
        //Filters Components
        <AdminOrdersFilters
          router={router}
          deliveryDate={deliveryDate}
          setStatus={(value) => setStatus(value)}
          setOrderDate={(value) => setOrderDate(value)}
          setDeliveryDate={(value) => setDeliveryDate(value)}
          setQty={(value) => setQty(value)}
        />
        <AdminOrdersTable
          items={items}
          setVisible={() => setVisible(!isVisible)}
        />
        <HStack
          justify={'flex-end'}
          w="full"
          spacing={8}
          px="15px"
          boxShadow={'lg'}
          bg="#2C3539"
          h="40px"
        >
          {
            <ShowLimit
              newLimit={limit}
              updateLimit={(newLimit) => setLimit(newLimit)}
            />
          }
          {
            <Pagination
              length={length}
              updatePage={(newPage) => setPage(newPage)}
              newPage={page}
              newLimit={limit}
            />
          }
        </HStack>
      </VStack>
      <OrdersDisplaySingleProductModel
        isVisible={isVisible}
        toggleVisibility={() => setVisible(!isVisible)}
      />
    </HStack>
  )
}

export default Orders

export const getServerSideProps = async (cxt) => {
  const {
    cookies: { admin_auth },
  } = cxt.req
  const { limit = 15, page = 1 } = cxt.query
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
    await dbConnect()
    let items = await PurchasedItems.find()
    let length = items.length
    let purchasedItems = await PurchasedItems.find({})
      .limit(limit)
      .skip((page - 1) * limit)

    purchasedItems = JSON.parse(JSON.stringify(purchasedItems))
    return {
      props: {
        purchasedItems,
        length,
      },
    }
  } catch (error) {
    console.log(error)
    return {
      props: {},
    }
  }
}
