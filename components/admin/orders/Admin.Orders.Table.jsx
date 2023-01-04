import React from 'react'
import styled from 'styled-components'
import {
  Badge,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { BiShow } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { getSinglePurchasedItem } from '../../../redux/admin_products/admin_products.actions'

const AdminOrdersTable = ({ items, setVisible }) => {
  const dispatch = useDispatch()

  return (
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
            <Th color="white">delivery-date</Th>
            <Th color="white">quanity</Th>
            <Th color="white">Total</Th>
            <Th color="white">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items?.map((ele) => (
            <Tr key={ele?._id}>
              <Td fontSize={14}>{ele?._id}</Td>
              <Td>
                <Badge
                  variant="outline"
                  colorScheme={
                    checkStatus(ele.deliveryDate) === 'pending'
                      ? 'orange'
                      : 'green'
                  }
                >
                  {checkStatus(ele.deliveryDate) === 'pending'
                    ? 'PENDING'
                    : 'DELEVERED'}
                </Badge>
              </Td>
              <Td>{ele?.method}</Td>
              <Td>{setTimeString(ele?.createdAt?.slice(0, 10))}</Td>
              <Td>{setTimeString(ele?.deliveryDate?.slice(0, 10))}</Td>
              <Td>{ele?.quantity}</Td>
              <Td>₹{ele?.total}</Td>
              <Td>
                <Icon
                  fontSize={18}
                  color="red"
                  cursor={'pointer'}
                  onClick={() => {
                    setVisible()
                    dispatch(getSinglePurchasedItem(ele._id))
                  }}
                  as={BiShow}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </StyledTableContainer>
  )
}

export default AdminOrdersTable

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

const checkStatus = (deliveryDate) => {
  if (new Date(deliveryDate) - new Date(Date.now()) > 0) return 'pending'
  else return 'delevered'
}
