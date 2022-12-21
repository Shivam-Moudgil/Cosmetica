import {ChevronDownIcon} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
} from "@chakra-ui/react";
import {FaUserAlt} from "react-icons/fa";
import axios from "axios";
import Link from "next/link";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {isNotAuth} from "../../redux/AuthUser/actions";
export default function ServerSecondaryOptions() {
  const {login} = useSelector((store) => store.Authentication);
  let changingBtn;
  login ? (changingBtn = "Logout") : (changingBtn = "Login");
  const dispatch = useDispatch();
  const toast = useToast();
  const router = useRouter();
  const handleClick = async () => {
    if (changingBtn === "Logout") {
      await axios.post("/api/auth/logout").then((res) => {
        dispatch(isNotAuth());
        toast({
          title: "logged out",
          position: "top-right",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      });
    } else {
      router.push("/login");
    }
  };
  return (
    <>
      <Menu>
        <MenuButton
          bg={"transparent"}
          _hover={{bg: "transparent"}}
          _active={{bg: "transparent"}}
          as={Button}
          rightIcon={<ChevronDownIcon bg={"transparent"} />}
        >
          <Box gap={1.5} display="flex">
            <FaUserAlt /> Account
          </Box>
        </MenuButton>
        <MenuList bg="blackAlpha.900">
          <MenuItem onClick={handleClick} fontWeight={"semibold"} bg={"black"}>
            {changingBtn}
          </MenuItem>
          <Link href={"/register"}>
            <MenuItem fontWeight={"semibold"} bg={"black"}>
              Register
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </>
  );
}
