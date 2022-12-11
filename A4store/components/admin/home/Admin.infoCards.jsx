import React from 'react'
import {
  Card,
  CardBody,
  Center,
  Flex,
  GridItem,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import { IoWalletSharp } from 'react-icons/io5'


const AdminInfoCards = () => {
  return (
    <GridItem w="450px">
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
                Today's Money
              </StatLabel>
              <Flex>
                <StatNumber fontSize="lg" color="#fff">
                  $53,000
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
                  +55%
                </StatHelpText>
              </Flex>
            </Stat>
            <Center h={'45px'} w={'45px'} bg="gray.200">
              <IoWalletSharp fontSize={25} />
            </Center>
          </Flex>
        </CardBody>
      </Card>
    </GridItem>
  )
}

export default AdminInfoCards
