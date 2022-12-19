import {
  Button,
  CloseButton,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Select,
  useToast,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { RiFilterLine } from 'react-icons/ri'

const FilterPopOver = ({
  isVisible,
  changeVisibility,
  updateColumnType,
  updateInputValueToFilter,
  enteredInput,
  columnType,
}) => {
  const toast = useToast()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (columnType === '' || enteredInput === '') {
      return toast({
        title: 'Input error!',
        position: 'top',
        description: 'Select any column and enter value!',
        status: 'warning',
        duration: 4000,
        isClosable: true,
      })
    }
    // console.log(enteredInput, columnType)
  }
  return (
    <>
      <Icon onClick={changeVisibility} fontSize={20} as={RiFilterLine} />
      {isVisible && (
        <VStack
          position="absolute"
          top="90%"
          left={{ base: '-120%', md: '0' }}
          h="150px"
          bg="white"
          zIndex={5}
          boxShadow="lg"
          rounded={'10px'}
          w="fit-content"
        >
          <HStack w="full" justifyContent={'flex-end'} pr="10px">
            <CloseButton
              onClick={changeVisibility}
              fontWeight={'bold'}
              color="black"
            />
          </HStack>
          <HStack
            justifyContent={'center'}
            alignItems="center"
            px="7px"
            w="full"
            as="form"
          >
            <FormControl w="130px">
              <FormLabel fontSize={10} color="black">
                Select column
              </FormLabel>
              <Select
                placeholder="Select"
                variant={'outline'}
                outline="1px solid grey"
                h="30px"
                color="black"
                onChange={({ target: { value } }) => updateColumnType(value)}
              >
                <option value="name">Name</option>
                <option value="category">Category</option>
              </Select>
            </FormControl>
            <FormControl w="180px">
              <FormLabel fontSize={10} color="black">
                Name of Value
              </FormLabel>
              <Input
                placeholder="give me any name"
                variant={'outline'}
                outline="1px solid grey"
                h="30px"
                color="black"
                onChange={(e) => updateInputValueToFilter(e.target.value)}
                value={enteredInput}
              />
            </FormControl>
            <Button
              h="30px"
              alignSelf={'flex-end'}
              variant={'outline'}
              colorScheme={'green'}
              type="submit"
              onClick={handleSubmit}
            >
              Search
            </Button>
            <Button
              h="30px"
              alignSelf={'flex-end'}
              variant={'outline'}
              colorScheme={'green'}
              type="submit"
              onClick={() => {
                updateColumnType('')
                updateInputValueToFilter('')
              }}
            >
              Clear Filter
            </Button>
          </HStack>
        </VStack>
      )}
    </>
  )
}

export default FilterPopOver
