import Head from 'next/head';
import '../public/index.css'
import '../sass/global.scss'

import { Footer } from '../components/layouts/footer'
import { Menu } from '../components/layouts/menu'
import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from '../contexts/userContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Notebook</title>
        <meta name="description" content="Personal notebook as a programming student." />
        <link rel="icon" href="icon.png" />
      </Head>
      <main className='app flex flex-col items-center'>
        <ChakraProvider>
          <UserProvider>
            <Menu />
            <Component {...pageProps} />
            {/* <Footer /> */}
          </UserProvider>
        </ChakraProvider>
      </main>
    </>
  )
}

export default MyApp
