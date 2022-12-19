import React from "react";
import { Navbarmain } from "../components/HomePage/Navbarmain";

const Navbar = () => {
  // const [len, setLen] = useState([]);
  // const get = async () => {
  //   return await axios.get(process.env.Cart_Route);
  // };
  // useEffect(() => {
  //   get().then((res) => setLen(res.data));
  // }, [len]);
  // console.log(len.length);

  return (
    <>
      <Navbarmain />
    </>
  );
};

export default Navbar;
