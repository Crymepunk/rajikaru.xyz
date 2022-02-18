import Head from 'next/head'
import Script from 'next/script'
import menuStyles from '../styles/menu.module.css'
import Navbar from '../components/navbar.js'

export default function commands() {
  return (
    <>
      <Head>
        <title>Rajikaru Bot Commands</title>
      </Head>
      <Navbar />
      <aside className={menuStyles.commandsMenu}>
        <ul>
          <li className={menuStyles.list}>
            <a className={menuStyles.utility} href="#Utility">Utility</a>
          </li>
          <li className={menuStyles.list}>
            <a className={menuStyles.manager} href="#Manager">Manager</a>
          </li>
          <li className={menuStyles.list}>
            <a className={menuStyles.moderation} href="#Moderation">Moderation</a>
          </li>
          <li className={menuStyles.list}>
            <a className={menuStyles.fun} href="#Fun">Fun</a>
          </li>
        </ul>
      </aside>
    </>
  )
}
