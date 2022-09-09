import Head from "next/head";
import "../public/index.css";
import "../sass/global.scss";

import { Footer } from "../components/layouts/footer";
import { Menu } from "../components/layouts/menu";
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "../contexts/userContext";
import { Button_UP } from "../components/common/buttons";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <UserProvider>
        <Menu />
        <Component {...pageProps} />
        {/* <Footer /> */}
        <Button_UP />
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
