import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AdminSidebar from '../../../components/admin/home/Admin.sidebar'
import Pagination from '../../../components/admin/products/Pagination'
import ShowLimit from '../../../components/admin/products/ShowLimit'
import dbConnect from '../../../utils/mongo'
import { PurchasedItems } from '../../../models/purchasedItems.model'
import { useRouter } from 'next/router'
import axios from 'axios'
import { BiShow } from 'react-icons/bi'
import DisplaySingleProductModel from '../../../components/admin/products/DisplaySingleProductModel'
import { useDispatch } from 'react-redux'

const fetchData = (url) => {
  return axios.get(url)
}

const Orders = ({ purchasedItems, length: len }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [items, setItems] = useState(purchasedItems)
  const [length, setLength] = useState(len || 0)
  const [status, setStatus] = useState(router.query.status || '')
  const [orderDate, setOrderDate] = useState(router.query.orderDate || '')
  const [deleveryDate, setDeleveryDate] = useState(
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
      }${deleveryDate ? `&deleveryDate=${deleveryDate}` : ''}${
        qty ? `&qty=${qty}` : ''
      }${page ? `&page=${page}` : ''}${limit ? `&limit=${limit}` : ''}`,
      undefined,
    )
    fetchData(
      `/api/admin/orders/orders?${status ? `status=${status}` : ''}${
        orderDate ? `&orderDate=${orderDate}` : ''
      }${deleveryDate ? `&deleveryDate=${deleveryDate}` : ''}${
        qty ? `&qty=${qty}` : ''
      }${page ? `&page=${page}` : ''}${limit ? `&limit=${limit}` : ''}`,
    )
      .then(({ data }) => {
        setItems(data.purchasedItems)
        setLength(data.length)
      })
      .catch((err) => console.error)
  }, [status, orderDate, deleveryDate, qty, page, limit])

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
        <HStack boxShadow={'md'} w="full" h="fit-content" px="10px">
          <FormControl>
            <FormLabel fontSize={14}>Filter Status</FormLabel>
            <Select
              defaultValue={router.query.status}
              onChange={({ target: { value } }) => setStatus(value)}
              bg="#424c4f"
              color={'white'}
              placeholder="select"
            >
              <option style={{ color: 'black' }} value="pending">
                Pending
              </option>
              <option style={{ color: 'black' }} value="delevered">
                Delevered
              </option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel fontSize={14}>Filter Order-Date</FormLabel>
            <Input
              value={orderDate || router.query.orderDate}
              onChange={({ target: { value } }) => setOrderDate(value)}
              bg="#424c4f"
              color="white"
              type={'month'}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={14}>Filter Delevery-Date</FormLabel>
            <Input
              value={deleveryDate || router.query.deleveryDate}
              onChange={({ target: { value } }) => setDeleveryDate(value)}
              bg="#424c4f"
              color="white"
              type={'month'}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={14}>Sort by Quantity</FormLabel>
            <Select
              defaultValue={router.query.qty}
              onChange={({ target: { value } }) => {
                setQty(value)
              }}
              bg="#424c4f"
              color="white"
              placeholder="select"
            >
              <option style={{ color: 'black' }} value="asc">
                asc
              </option>
              <option style={{ color: 'black' }} value="desc">
                desc
              </option>
            </Select>
          </FormControl>
        </HStack>
        <StyledTableContainer
          w="full"
          h="490px"
          overflowY="scroll"
          boxShadow={'lg'}
        >
          <Table variant="simple">
            <Thead bg="#2C3539">
              <Tr>
                <Th color="white">Order id</Th>
                <Th color="white">status</Th>
                <Th color="white">mode of Payment</Th>
                <Th color="white">order-date</Th>
                <Th color="white">delevery-date</Th>
                <Th color="white">quanity</Th>
                <Th color="white">Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {items?.map((ele) => (
                <Tr key={ele?._id}>
                  <Td fontSize={14}>{ele?._id}</Td>
                  <Td>{ele?.status}</Td>
                  <Td>{ele?.modeOfPayment}</Td>
                  <Td>{setTimeString(ele?.dateOfPurchase?.slice(0, 10))}</Td>
                  <Td>{setTimeString(ele?.dateOfDelevery?.slice(0, 10))}</Td>
                  <Td>{ele?.quantity}</Td>
                  <Td>
                    <Icon
                      fontSize={18}
                      color="red"
                      cursor={'pointer'}
                      onClick={() => {
                        setVisible(!isVisible)
                        dispatch(getPurchasedItem(ele._id))
                      }}
                      as={BiShow}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </StyledTableContainer>
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
      <DisplaySingleProductModel
        isVisible={isVisible}
        toggleVisibility={() => setVisible(!isVisible)}
      />
    </HStack>
  )
}

export default Orders

const StyledTableContainer = styled(TableContainer)`
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: grey;
  }
`

function setTimeString(YMD) {
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  let month = months[new Date(YMD).getMonth()]
  let date = new Date(YMD).getDate()
  let year = new Date(YMD).getFullYear()
  return `${date}-${month}-${year}`
}

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
    return {
      props: {},
    }
  }
}
