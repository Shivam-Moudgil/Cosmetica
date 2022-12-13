import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../../Wrappers/Layout";
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {

  //Because Admin section will not different header and footer

  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </>
    )
  }

  return (
    <>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
