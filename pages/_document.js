import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Wine" />
        <link rel="icon" href="/favicon.ico" />

        <script src='https://code.jquery.com/jquery-3.6.2.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jQuery-rwdImageMaps/1.6/jquery.rwdImageMaps.min.js'></script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>

    </Html>
  )
}