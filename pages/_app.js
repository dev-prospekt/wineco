import Layout from '../components/layout'
import '../styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    
    <Script src="https://code.jquery.com/jquery-3.6.2.min.js" onLoad={() => {
      console.log('ucitan jquery')
    }} />

    <Script src="https://cdnjs.cloudflare.com/ajax/libs/jQuery-rwdImageMaps/1.6/jquery.rwdImageMaps.min.js" onLoad={() => {
      console.log('ucitan rwd image')
    }} />
    <Script src="/js/script.js" />

    </>
  )
}