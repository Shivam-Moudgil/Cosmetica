import { Container, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import CategoriesMainItemsSection from '../../../components/categories/CategoriesMainItemsSection'
import FilterSection from '../../../components/categories/FilterSection'
import Products from '../../../models/Product'
import dbConnect from '../../../utils/mongo'

const CategoriesPage = ({ products }) => {
  const [allProducts, setAllProducts] = useState(products)

  return (
    <Container maxW={{ base: 'full', lg: '96%' }} mx={10} m="auto" p={0}>
      <Flex w="full" justifyContent="space-between" gap={5}>
        <FilterSection />
        <CategoriesMainItemsSection products={allProducts} />
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
    let products = await Products.find({ category })
    products = JSON.parse(JSON.stringify(products))
    return {
      props: { products },
    }
  } catch (error) {
    console.log(error)
    return { props: {} }
  }
}
