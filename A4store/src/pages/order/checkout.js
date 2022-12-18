import { useRouter } from "next/router";
import React from "react";
import Multistep from "../../../components/Checkout/Main.jsx/Mainfile";

const checkout = () => {
  const router = useRouter();
  const redirecting=() => {
   return router.push("/cart")
  }
  return (
    <div>
      <Multistep redirecting={redirecting} />
    </div>
  );
};

export default checkout;

