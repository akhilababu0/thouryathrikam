import NextProgress from 'next-progress'
import Store from 'store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    getLayout(
      <Store>
          <NextProgress color='#ffffff' height='4px' delay={300} options={{ showSpinner: false }} />
          <Component {...pageProps} />
      </Store>
    )
  )
}

export default MyApp
