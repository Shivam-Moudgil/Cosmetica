import { Center, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>AVATAR</title>
        <meta name="description" content="It's an e-commerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center flexDir={"column"}>
        <Text fontSize={"2xl"} fontWeight={"extrabold"}>
          Welcome !
        </Text>
        <Text fontSize={"lg"} fontWeight={"extrabold"}>
          Folders are ready........
        </Text>
      </Center>
    </div>
  );
}
