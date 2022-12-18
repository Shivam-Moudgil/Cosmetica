import { HStack, Icon, Text, Th } from '@chakra-ui/react'
import React, { useState } from 'react'
import FilterPopOver from './FilterPopOver'

const TableHeadRow = ({
  title,
  upArrow,
  state,
  downArrow,
  filterIcon,
  setState,
  iconStatus,
  updateColumnType,
  updateInputValueToFilter,
  enteredInput,
  columnType,
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const changeVisibility = () => setIsVisible((p) => (p = !p))
  return (
    <Th cursor={'pointer'} color="white">
      <HStack position={'relative'}>
        {' '}
        <Text>{title}</Text>
        {iconStatus && upArrow && (
          <Icon
            onClick={setState}
            fontSize={20}
            as={state === 'asc' ? upArrow : downArrow}
          />
        )}
        {iconStatus && filterIcon && (
          <FilterPopOver
            isVisible={isVisible}
            changeVisibility={changeVisibility}
            updateColumnType={updateColumnType}
            updateInputValueToFilter={updateInputValueToFilter}
            enteredInput={enteredInput}
            columnType={columnType}
          />
        )}
      </HStack>
    </Th>
  )
}

export default TableHeadRow
