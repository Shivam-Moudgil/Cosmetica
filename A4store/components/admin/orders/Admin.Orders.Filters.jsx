import {
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Select,
} from '@chakra-ui/react'
import React from 'react'

const AdminOrdersFilters = ({
  router,
  setStatus,
  deliveryDate,
  orderDate,
  setOrderDate,
  setDeliveryDate,
  setQty,
}) => {
  return (
    <Grid
      boxShadow={'md'}
      w="full"
      h="fit-content"
      px="10px"
      templateColumns={{
        base: '1fr',
        sm: '1fr 1fr',
        md: '1fr 1fr',
        lg: 'repeat(4,1fr)',
      }}
    >
      <GridItem>
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
      </GridItem>
      <GridItem>
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
      </GridItem>
      <GridItem>
        <FormControl>
          <FormLabel fontSize={14}>Filter Delivery-Date</FormLabel>
          <Input
            value={deliveryDate || router.query.deliveryDate}
            onChange={({ target: { value } }) => setDeliveryDate(value)}
            bg="#424c4f"
            color="white"
            type={'month'}
          />
        </FormControl>
      </GridItem>
      <GridItem>
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
      </GridItem>
    </Grid>
  )
}

export default AdminOrdersFilters
