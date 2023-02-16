import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Wine" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="google-site-verification" content="cr63gV0MR3g6_vxrwkIxd92lsrrS8JvqTfJpZsJBMlU" />

        <script src='https://code.jquery.com/jquery-3.6.2.min.js'></script>
        <script src='/js/jquery.rwdImageMaps.min.js'></script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>

    </Html>
  )
}