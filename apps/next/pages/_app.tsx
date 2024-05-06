import 'raf/polyfill'
import 'setimmediate'

import Head from 'next/head'
import React from 'react'

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Solito Example App</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
