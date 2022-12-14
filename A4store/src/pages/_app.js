import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../../Wrappers/Layout";
import '../styles/globals.css'
import { Provider } from 'react-redux'
import { wrapper } from '../../redux/store'
function MyApp({ Component, pageProps }) {

  //Because Admin section will have different header and footer

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

export default wrapper.withRedux(MyApp);
