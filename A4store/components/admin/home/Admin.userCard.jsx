import { Center, HStack, Icon, Progress, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaUsers } from 'react-icons/fa'

const UserCard = () => {
  return (
    <VStack
      w="140px"
      h="fit-content"
      boxShadow={'lg'}
      p="9px"
      bg="#d2c9a0"
      alignItems={'flex-start'}
      rounded={'10px'}
    >
      <HStack>
        <Center w="35px" h="35px" bg="grey" rounded={'5px'}>
          <Icon as={FaUsers} color="white" fontSize={22} />
        </Center>
        <Text>Users</Text>
      </HStack>
      <Text>220</Text>
      <Progress w="full" size="xs" colorScheme={'green'} value={40} />
    </VStack>
  )
}

export default UserCard
