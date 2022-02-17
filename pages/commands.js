import Head from 'next/head'
import Link from 'next/link'
import navStyles from '../styles/navbar.module.css'

export default function commands() {
  return (
    <>
      <Head>
        <title>Rajikaru Bot Commands</title>
      </Head>
      <nav>
        <Link href="/">
          <a className={navStyles.icon}>Home</a>
        </Link>
        <Link href="/commands">
          <a className={navStyles.navigation}>Commands</a>
        </Link>
        <Link href="https://github.com/Crymepunk/rajikaru-bot">
          <a className={navStyles.navigation} target="_blank">Github</a>
        </Link>
      </nav>
    </>
  )
}
