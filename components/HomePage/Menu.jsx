import {EditIcon, HamburgerIcon, UnlockIcon} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {isNotAuth} from "../../redux/auth/auth.actions";

const MenuBar = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  //   const {login} = useSelector((store) => store.Authentication);
  //   let changingBtn;

  //   if (login) {
  //     changingBtn = "Logout";
  //   } else {
  //     changingBtn = "Login";
  //   }

  //   const handleClick = () => {
  //     if (changingBtn === "Logout") {
  //       dispatch(isNotAuth());
  //     } else {
  //       navigate("/login");
  //     }
  //   };

  return (
    <>
      <Button
        as={IconButton}
        icon={<HamburgerIcon />}
        bg="transparent"
        fontSize={20}
        border={"0.5px solid"}
        onClick={onOpen}
      >
        {/* Open */}
      </Button>
      <Drawer fontSize={12} placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent p={2} color={"white"} bg="#0e1823">
          <DrawerHeader
            display={"flex"}
            justifyContent="space-around"
            p={5}
            gap={3}
            borderBottomWidth="3px"
            mb={1}
          >
            <Link href="/">
              <Box>
                <Heading fontFamily={"cursive"} fontSize={22}>
                  Cosmetica
                </Heading>
              </Box>
            </Link>
            <Box
              fontSize={14}
              display={"flex"}
              gap={4}
              justifyContent="space-between"
            >
              <Link href="/login">
                <Button
                  // onClick={handleClick}
                  bg={"transparent"}
                  w="fit-content"
                  p={2}
                  color={"white"}
                  outlineColor={"white"}
                  _hover={{border: "none"}}
                >
                  <UnlockIcon color={"white"} mr={2} />
                  {/* {changingBtn} */}
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  w="fit-content"
                  p={2}
                  color={"white"}
                  bg={"transparent"}
                  _hover={{border: "none"}}
                  outlineColor={"white"}
                >
                  <EditIcon color={"white"} mr={2} />
                  Register
                </Button>
              </Link>
            </Box>
          </DrawerHeader>
          <DrawerBody
            overflow={"scroll"}
            gap={10}
            scrollBehavior={"smooth"}
            p={3}
            display={"flex"}
            fontFamily="fantasy"
          >
            <Link href="/category/bestseller">
              <Box display={"flex"} flexDir="column" alignItems={"center"}>
                BestSeller
              </Box>
            </Link>
            <Link href="/category/skincare">
              <Box display={"flex"} flexDir="column" alignItems={"center"}>
                SkinCare
              </Box>
            </Link>
            <Link href="/category/makeup">
              <Box display={"flex"} flexDir="column" alignItems={"center"}>
                Makeup
              </Box>
            </Link>
            <Link href="/category/haircare">
              <Box display={"flex"} flexDir="column" alignItems={"center"}>
                HairCare
              </Box>
            </Link>
            <Link href="/category/bathbody">
              <Box display={"flex"} flexDir="column" alignItems={"center"}>
                Bath&Body
              </Box>
            </Link>
            <Link href="/category/perfume">
              <Box display={"flex"} flexDir="column" alignItems={"center"}>
                Fragrance
              </Box>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuBar;
