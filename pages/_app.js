import styles from '../styles/globals.css'
import Navbar from '../components/navbar.js'

export default function MyApp({ Component, pageProps }) {
  return ( 
    <>
      <Navbar />
      <Component {...pageProps}/>
    </>
  )
}
