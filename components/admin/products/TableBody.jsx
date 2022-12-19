import { HStack, Icon, Tbody, Td, Text, Tr } from '@chakra-ui/react'
import React from 'react'
import { BiShow } from 'react-icons/bi'
import { GrEdit } from 'react-icons/gr'
import { MdDeleteOutline } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import {
  deleteSingleProduct,
  getSingleProduct,
} from './../../../redux/admin_products/admin_products.actions'

const TableBody = ({
  products,
  refreshState,
  toggleVisiblity,
  toggleShowProductVisibilty,
}) => {
  const dispatch = useDispatch()
  return (
    <Tbody>
      {products?.map((ele) => (
        <Tr bg="#f3f3f3" key={ele?._id} style={{ height: '60px' }}>
          <Td fontSize={11} color="black">
            {ele?._id}
          </Td>

          <Td fontSize={14} color="black">
            <Text w="150px" whiteSpace={'break-spaces'}>
              {ele?.name && ele?.name.replaceAll(' ', '')}
            </Text>
          </Td>
          <Td fontSize={14} color="black">
            {ele?.category}
          </Td>
          <Td fontSize={14} color="black">
            ${ele?.price}
          </Td>
          <Td fontSize={14} color="black">
            {ele?.qty}
          </Td>
          <Td fontSize={14} color="black">
            {ele?.ratingcount}
          </Td>
          <Td fontSize={14} color="black">
            <HStack fontSize={15}>
              <Icon
                fontSize={18}
                color="blue"
                cursor={'pointer'}
                onClick={() => {
                  toggleShowProductVisibilty()
                  dispatch(getSingleProduct(ele._id))
                }}
                as={BiShow}
              />
              <Icon
                onClick={() => {
                  toggleVisiblity()
                  dispatch(getSingleProduct(ele._id))
                }}
                cursor={'pointer'}
                as={GrEdit}
              />
              <Icon
                fontSize={18}
                color="red"
                onClick={() => {
                  dispatch(deleteSingleProduct(ele._id))
                  refreshState()
                }}
                cursor={'pointer'}
                as={MdDeleteOutline}
              />
            </HStack>
          </Td>
        </Tr>
      ))}
    </Tbody>
  )
}

export default TableBody
