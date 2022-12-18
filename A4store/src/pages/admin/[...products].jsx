import {
  Box,
  HStack,
  Table,
  TableContainer,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AdminSidebar from '../../../components/admin/home/Admin.sidebar'
import AdminNavbar from '../../../components/admin/home/Admin.navbar'
import { BsArrowUpShort } from 'react-icons/bs'
import { BiDownArrowAlt } from 'react-icons/bi'
import { RiFilterLine } from 'react-icons/ri'
import TableHeadRow from '../../../components/admin/products/TableHeadRow'
import { wrapper } from '../../../redux/store'
import dbConnect from '../../../utils/mongo'
import Products from '../../../models/Product'
import { useRouter } from 'next/router'
import axios from 'axios'
import Pagination from '../../../components/admin/products/Pagination'
import ShowLimit from '../../../components/admin/products/ShowLimit'
import TableBody from '../../../components/admin/products/TableBody'
import EditProductDetails from '../../../components/admin/products/EditProduct'
import AddNewproductModel from '../../../components/admin/products/AddNewProduct'
import DisplaySingleProductModel from '../../../components/admin/products/DisplaySingleProductModel'
import jwt from 'jsonwebtoken'

const fetchData = (url) => {
  return axios.get(url)
}
let length
const RecentOrders = () => {
  const router = useRouter()
  const [products, setProducts] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const [addProductModelIsVisible, setAddProductModelIsVisible] = useState(
    false,
  )
  const [showProductVisiblity, setShowProductVisiblity] = useState(false)
  const [newPage, setNewPage] = useState(+router.query.page || 1)
  const [newLimit, setNewLimit] = useState(+router.query.limit || 15)
  const [priceSort, setPriceSort] = useState(router.query.price || 'asc')
  const [qtySort, setQtySort] = useState(router.query.quantity || 'asc')
  const [ratingSort, setRatingSort] = useState(router.query.rating || 'asc')
  const [columnType, setColumnType] = useState('')
  const [enteredInput, setEnteredInput] = useState('')
  const [refresh, setRefresh] = useState(1)
  useEffect(() => {
    fetchData(
      `/api/admin/products/applysorting/getAll?quantity=${qtySort}&price=${priceSort}&rating=${ratingSort}&page=${newPage}&limit=${newLimit}${
        columnType ? `&category=${columnType}` : ''
      }${enteredInput ? `&name=${enteredInput}` : ''}`,
    )
      .then((res) => {
        setProducts((p) => (p = res.data.products))
        length = res.data.length
      })
      .catch((err) => err)
    router.push(
      `/admin/products/getAll?quantity=${qtySort}&price=${priceSort}&rating=${ratingSort}&page=${newPage}&limit=${newLimit}${
        columnType ? `&category=${columnType}` : ''
      }${enteredInput ? `&name=${enteredInput}` : ''}`,
      undefined,
      { shallow: true },
    )
  }, [
    newPage,
    newLimit,
    priceSort,
    qtySort,
    ratingSort,
    enteredInput,
    columnType,
    refresh,
  ])

  //Functions updaters
  const updatePrice = () => {
    setPriceSort((p) => (p = p === 'asc' ? 'desc' : 'asc'))
  }
  const updateQuantity = () => {
    setQtySort((p) => (p = p === 'asc' ? 'desc' : 'asc'))
  }
  const updateRating = () => {
    setRatingSort((p) => (p = p === 'asc' ? 'desc' : 'asc'))
  }
  const updatePage = (pageToUpdate) => setNewPage(pageToUpdate)
  const updateLimit = (limitToUpdate) => setNewLimit(limitToUpdate)
  const updateColumnType = (newColumnType) => setColumnType(newColumnType)
  const updateInputValueToFilter = (newInputValue) =>
    setEnteredInput(newInputValue)
  const refreshState = () => setRefresh(refresh + 1)
  const addProductToggleVisiblity = () =>
    setAddProductModelIsVisible(!addProductModelIsVisible)
  const toggleVisiblity = () => setIsVisible(!isVisible)
  const toggleShowProductVisibilty = () =>
    setShowProductVisiblity(!showProductVisiblity)
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
        <AdminSidebar location={'Admin__products'} />
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
        <AddNewproductModel
          isVisible={addProductModelIsVisible}
          toggleVisiblity={addProductToggleVisiblity}
        />
        <Text fontWeight={700} fontSize={19}>
          Products detail
        </Text>
        <StyledTableContainer
          w="full"
          h="490px"
          overflowY="scroll"
          boxShadow={'lg'}
        >
          <Table variant="simple">
            <Thead bg="#2C3539">
              <Tr>
                <TableHeadRow
                  title={'Product Id'}
                  iconStatus={false}
                  upArrow={BsArrowUpShort}
                  downArrow={BiDownArrowAlt}
                />

                <TableHeadRow
                  iconStatus={true}
                  title={'Name'}
                  filterIcon={RiFilterLine}
                  updateColumnType={updateColumnType}
                  updateInputValueToFilter={updateInputValueToFilter}
                  enteredInput={enteredInput}
                  columnType={columnType}
                />
                <TableHeadRow
                  iconStatus={true}
                  title={'Category'}
                  filterIcon={RiFilterLine}
                  updateColumnType={updateColumnType}
                  updateInputValueToFilter={updateInputValueToFilter}
                  enteredInput={enteredInput}
                  columnType={columnType}
                />
                <TableHeadRow
                  title={'Price'}
                  iconStatus={true}
                  state={priceSort}
                  setState={updatePrice}
                  upArrow={BsArrowUpShort}
                  downArrow={BiDownArrowAlt}
                />
                <TableHeadRow
                  title={'Quantity'}
                  iconStatus={true}
                  state={qtySort}
                  setState={updateQuantity}
                  upArrow={BsArrowUpShort}
                  downArrow={BiDownArrowAlt}
                />
                <TableHeadRow
                  title={'Ratings'}
                  iconStatus={true}
                  state={ratingSort}
                  setState={updateRating}
                  upArrow={BsArrowUpShort}
                  downArrow={BiDownArrowAlt}
                />
                <Th color="white">Actions</Th>
              </Tr>
            </Thead>
            <TableBody
              toggleShowProductVisibilty={toggleShowProductVisibilty}
              toggleVisiblity={toggleVisiblity}
              refreshState={refreshState}
              products={products}
            />
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
          {<ShowLimit newLimit={newLimit} updateLimit={updateLimit} />}
          {
            <Pagination
              length={length}
              updatePage={updatePage}
              newPage={newPage}
              newLimit={newLimit}
            />
          }
        </HStack>
      </VStack>
      //Model to Edit product
      <EditProductDetails
        isVisible={isVisible}
        refreshState={refreshState}
        toggleVisiblity={toggleVisiblity}
      />
      //Model to display single product
      <DisplaySingleProductModel
        isVisible={showProductVisiblity}
        toggleVisibility={toggleShowProductVisibilty}
      />
    </HStack>
  )
}

export default RecentOrders

const StyledTableContainer = styled(TableContainer)`
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: grey;
  }
`

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { query } = context
    const {
      cookies: { admin_auth },
    } = context.req
    const { page = 1, limit = 15, quantity, price, rating } = query
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
      let products = await Products.find()
        .sort({
          qty: quantity === 'asc' ? 1 : 0,
          price: price === 'asc' ? 1 : 0,
          rating: rating === 'asc' ? 1 : 0,
        })
        .limit(limit)
        .skip((page - 1) * limit)
      products = JSON.parse(JSON.stringify(products))
      return {
        props: {},
      }
    } catch (error) {
      console.log(error)
    }
  },
)
