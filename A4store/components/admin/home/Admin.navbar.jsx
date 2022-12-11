import { Avatar, Button, HStack, Icon, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import AdminBurgerNav from './Admin.burgerNav'

const AdminNavbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleSidebarVisiblity = () => setIsVisible(!isVisible)
  return (
    <HStack w="full" h="70px">
      <HStack w="60%" display={{ base: 'none', md: 'flex' }}></HStack>
      <HStack w={{ base: 'full', lg: '40%' }} pr={'15px'} justify="flex-end">
        <HStack border="1px solid gray" p="7px" rounded={'15px'} px="10px">
          <Icon as={BsSearch} />
          <Input variant={'unstyled'} type="text" placeholder="search..." />
        </HStack>
        <HStack>
          <Avatar
            size={'sm'}
            src={
              'data:image/jpeg;base64,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'
            }
          />
        </HStack>
        <Button variant={'ghost'}>SignIn</Button>
        <HStack display={{ lg: 'none' }}>
          <AdminBurgerNav
            isVisible={isVisible}
            toggleSidebarVisiblity={toggleSidebarVisiblity}
          />
        </HStack>
      </HStack>
    </HStack>
  )
}

export default AdminNavbar
