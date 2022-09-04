import Head from 'next/head';
import '../public/index.css'
import '../sass/global.scss'

import { Footer } from '../components/layouts/footer'
import { Menu } from '../components/layouts/menu'
import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from '../contexts/userContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <UserProvider>
        <Menu />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </UserProvider>
    </ChakraProvider>
  )
}

export default MyApp
