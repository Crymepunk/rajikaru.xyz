import Link from 'next/link'
import homeStyles from '../styles/Home.module.css'
import navStyles from '../styles/navbar.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
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
      <h1 className={homeStyles.Rajikaru}>Rajikaru</h1>
      <h2 className={homeStyles.content}>A general purpose discord bot</h2>
      <div className={homeStyles.invdiv}>
        <a className={homeStyles.invite} href="https://discord.com/api/oauth2/authorize?client_id=900694117355487283&permissions=1377073080902&scope=bot%20applications.commands">Invite to server</a>
      </div>
    </>
  )
}
