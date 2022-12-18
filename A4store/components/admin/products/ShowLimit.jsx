import { HStack, Select, Text } from '@chakra-ui/react'
import React from 'react'

const ShowLimit = ({ updateLimit, newLimit }) => {
  return (
    <HStack>
      <Text fontSize={14} color="white">
        Rows per page
      </Text>
      <Select
        onChange={({ target: { value } }) => updateLimit(value)}
        bg="#2C3539"
        h="90%"
        w="70px"
        color="red"
        defaultValue={newLimit}
      >
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
      </Select>
    </HStack>
  )
}

export default ShowLimit
