import Head from "next/head";
import "../public/index.css";
import "../sass/global.scss";

import { Menu } from "../components/layouts/menu";
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "../contexts/userContext";
import { Button_UP } from "../components/common/buttons";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ChakraProvider>
        <Menu />
        <Component {...pageProps} />
        <Button_UP />
      </ChakraProvider>
    </UserProvider>
  );
}

export default MyApp;
