import { Container, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CategoriesMainItemsSection from '../../../components/categories/CategoriesMainItemsSection'
import FilterSection from '../../../components/categories/FilterSection'
import Products from '../../../models/Product'
import dbConnect from '../../../utils/mongo'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { getAllFilteredProducts } from '../../../redux/categories/category.actions'

const CategoriesPage = ({ products }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { filteredProducts, loading, length } = useSelector(
    (s) => s.categoryFilter,
  )
  const [filters, setFilters] = useState({
    category: router.query.category[0] || '',
    typeOfSort: router.query.typeOfSort || '',
    price: router.query.price || '',
    avgReview: router.query.avgReview || '',
  })
  const [allProducts, setAllProducts] = useState(products)

  useEffect(() => {
    router.push(
      `/category/${router.query.category[0]}?${
        filters.typeOfSort ? `typeOfSort=${filters.typeOfSort}&` : ''
      }${filters.price ? `price=${filters.price}&` : ''}${
        filters.avgReview ? `avgReview=${filters.avgReview}&` : ''
      }`,
      undefined,
      { shallow: true },
    )
    dispatch(
      getAllFilteredProducts({
        category: router.query.category[0],
        avgReview: filters.avgReview,
        price: filters.price,
        typeOfSort: filters.typeOfSort,
      }),
    )
  }, [
    router.query.category[0],
    filters.typeOfSort,
    filters.price,
    filters.avgReview,
  ])

  const updateFilters = (filterName, filterValue) => {
    setFilters({
      ...filters,
      [filterName]: filterValue,
    })
  }

  return (
    <Container maxW={{ base: 'full', lg: '96%' }} mx={10} m="auto" p={0}>
      <Flex w="full" justifyContent="space-between" gap={5}>
        <FilterSection filters={filters} updateFilters={updateFilters} />
        <CategoriesMainItemsSection
          updateFilters={updateFilters || allProducts}
          products={filteredProducts}
          length={length}
          filters={filters}
        />
      </Flex>
    </Container>
  )
}

export default CategoriesPage

export const getServerSideProps = async (ctx) => {
  const {
    query: { category },
  } = ctx
  try {
    await dbConnect()
    let products = await Products.find({ category }).limit(25)
    products = JSON.parse(JSON.stringify(products))
    return {
      props: { products },
    }
  } catch (error) {
    console.log(error)
    return { props: {} }
  }
}
