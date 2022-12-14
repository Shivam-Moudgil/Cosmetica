import { Center, HStack, Icon, Progress, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaUsers } from 'react-icons/fa'

const UserCard = ({ title, totalActiveUsers, totalUsers }) => {
  let percentage = 100 - ((totalUsers - totalActiveUsers) / totalUsers) * 100
  return (
    <VStack
      w="280px"
      h="fit-content"
      boxShadow={'lg'}
      p="9px"
      bg="#787463"
      alignItems={'flex-start'}
      rounded={'10px'}
    >
      <HStack>
        <Center w="35px" h="35px" bg="grey" rounded={'5px'}>
          <Icon as={FaUsers} color="white" fontSize={22} />
        </Center>
        <Text color="white">
          {title}
          {'   '}
          {`(${totalUsers})`}
        </Text>
      </HStack>
      <Text fontWeight={'bold'} color="white">
        {totalActiveUsers}
      </Text>
      <Progress w="full" size="xs" colorScheme={'green'} value={percentage} />
    </VStack>
  )
}

export default UserCard
