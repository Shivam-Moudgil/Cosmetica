import { HStack, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const Pagination = ({ newLimit, newPage, updatePage, length }) => {
  return (
    <HStack>
      <Text color="white" fontSize={{ base: '9', md: '15' }}>
        {newLimit * newPage - newLimit + 1}-
        {newLimit * newPage < length ? newLimit * newPage : length} of {length}
      </Text>
      <HStack color="white" fontSize={25}>
        <IconButton
          variant={'outline'}
          isDisabled={newPage === 1}
          size="sm"
          colorScheme={'grey'}
          onClick={() => updatePage(newPage - 1)}
          icon={<MdKeyboardArrowLeft fontSize={22} />}
        />
        <IconButton
          variant={'outline'}
          isDisabled={newLimit * newPage > length}
          size="sm"
          colorScheme={'grey'}
          onClick={() => updatePage(newPage + 1)}
          icon={<MdKeyboardArrowRight fontSize={22} />}
        />
      </HStack>
    </HStack>
  )
}

export default Pagination
