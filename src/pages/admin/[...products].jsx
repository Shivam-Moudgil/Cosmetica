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
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BiDownArrowAlt } from 'react-icons/bi'
import { BsArrowUpShort } from 'react-icons/bs'
import { RiFilterLine } from 'react-icons/ri'
import styled from 'styled-components'
import AdminNavbar from '../../../components/admin/home/Admin.navbar'
import AdminSidebar from '../../../components/admin/home/Admin.sidebar'
import AddNewproductModel from '../../../components/admin/products/AddNewProduct'
import DisplaySingleProductModel from '../../../components/admin/products/DisplaySingleProductModel'
import EditProductDetails from '../../../components/admin/products/EditProduct'
import Pagination from '../../../components/admin/products/Pagination'
import ShowLimit from '../../../components/admin/products/ShowLimit'
import TableBody from '../../../components/admin/products/TableBody'
import TableHeadRow from '../../../components/admin/products/TableHeadRow'
import { refreshCookie } from '../../../middlewares/checkCookie'
import Products from '../../../models/Product'
import { wrapper } from '../../../redux/store'
import dbConnect from '../../../utils/mongo'

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

RecentOrders.getLayout = function PageLayout(page) {
  return <>{page}</>
}

const StyledTableContainer = styled(TableContainer)`
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: grey;
  }
`

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { query } = ctx

    const { page = 1, limit = 15, quantity, price, rating } = query
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
