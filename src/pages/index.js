import {Center, Text} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import HomePage from "../../components/HomePage/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>AVATAR</title>
        <meta name="description" content="It's an e-commerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}
