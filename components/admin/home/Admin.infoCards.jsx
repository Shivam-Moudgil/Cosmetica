import React from 'react'
import {
  Card,
  CardBody,
  Center,
  Flex,
  GridItem,
  Icon,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'

const AdminInfoCards = ({
  currentYearData,
  lastYearData,
  quantity,
  title,
  icon,
  totalPendingOrders,
  totalDeleveredOrders,
  checkDiff,
  pendingStatus,
}) => {
  let difference = currentYearData - lastYearData
  let percentage = ((difference / currentYearData) * 100).toFixed(2)
  return (
    <GridItem w={{ md: '380px', lg: '450px' }}>
      <Card bg={'linear-gradient(to right top, #cc2b5e, #753a88);'}>
        <CardBody>
          <Flex flexDirection="row" align="center" justify="center" w="100%">
            <Stat me="auto">
              <StatLabel
                fontSize="sm"
                color="gray.400"
                fontWeight="bold"
                pb="2px"
              >
                {title}
              </StatLabel>
              <Flex>
                <StatNumber fontSize="lg" color="#fff">
                  {whatToPut(
                    quantity,
                    currentYearData,
                    totalPendingOrders,
                    pendingStatus,
                    totalDeleveredOrders,
                  )}
                </StatNumber>
                <StatHelpText
                  alignSelf="flex-end"
                  justifySelf="flex-end"
                  m="0px"
                  fontWeight="bold"
                  ps="3px"
                  fontSize="md"
                  color={'yellow'}
                >
                  {' '}
                  {checkDiff
                    ? difference < 0
                      ? `${percentage}%`
                      : `+${percentage}%`
                    : ''}
                </StatHelpText>
              </Flex>
            </Stat>
            <Center h={'45px'} w={'45px'} bg="gray.200">
              <Icon as={icon} fontSize={25} />
            </Center>
          </Flex>
        </CardBody>
      </Card>
    </GridItem>
  )
}

export default AdminInfoCards

function whatToPut(
  quantity,
  currentYearData,
  pending,
  pendingStatus,
  delevered,
) {
  const formatter = new Intl.NumberFormat('INR', {
    style: 'currency',
    currency: 'INR',
  })
  if (quantity) {
    return currentYearData
  } else if (!quantity && !pendingStatus && !delevered) {
    return formatter.format(+currentYearData)
  } else if (pendingStatus) {
    return pending
  } else return delevered
}
