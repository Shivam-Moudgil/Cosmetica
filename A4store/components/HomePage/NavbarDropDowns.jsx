import { useDisclosure, Menu, MenuItem, MenuButton, useColorModeValue, MenuList, } from '@chakra-ui/react'

export function Brands () {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
    <Menu isOpen={isOpen}>
        <MenuButton 
            variant='ghost' 
            // mx={1}
            // py={[1, 2, 2]}
            px={4}
            h='50px'
            borderRadius={1} 
            _hover={{ bg: useColorModeValue('gray.100', 'gray.900')}}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
        >Brands</MenuButton>
        <MenuList display={'flex'} justifyContent='space-between' gap={1} px={4} mt={-4}>
            <MenuItem w='50px' mx={-2}>0-9</MenuItem>
            <MenuItem w='25px'>A</MenuItem>
            <MenuItem w='25px'>B</MenuItem>
            <MenuItem w='25px'>C</MenuItem>
            <MenuItem w='25px'>D</MenuItem>
            <MenuItem w='25px'>E</MenuItem>
            <MenuItem w='25px'>F</MenuItem>
            <MenuItem w='25px'>G</MenuItem>
            <MenuItem w='25px'>H</MenuItem>
            <MenuItem w='25px'>I</MenuItem>
            <MenuItem w='25px'>J</MenuItem>
            <MenuItem w='25px'>K</MenuItem>
            <MenuItem w='25px'>L</MenuItem>
            <MenuItem w='25px'>M</MenuItem>
            <MenuItem w='25px'>N</MenuItem>
            <MenuItem w='25px'>O</MenuItem>
            <MenuItem w='25px'>P</MenuItem>
            <MenuItem w='25px'>Q</MenuItem>
            <MenuItem w='25px'>R</MenuItem>
            <MenuItem w='25px'>S</MenuItem>
            <MenuItem w='25px'>T</MenuItem>
            <MenuItem w='25px'>U</MenuItem>
            <MenuItem w='25px'>V</MenuItem>
            <MenuItem w='25px'>W</MenuItem>
            <MenuItem w='25px'>X</MenuItem>
            <MenuItem w='25px'>Y</MenuItem>
            <MenuItem w='25px'>Z</MenuItem>
        </MenuList>
    </Menu>)
}
