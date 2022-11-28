import { AppProps } from "next/app";
import { Menu, NavBar } from "../components/layouts/index";
import { Button_UP } from "../components/common/buttons";
import "../sass/global.scss";
import "../public/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Menu>
        <Component {...pageProps} />
        <Button_UP />
      </Menu>
    </>
  );
}

export default MyApp;
