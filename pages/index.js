import Styles from '../styles/index.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rajikaru Discord Bot</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1 className={Styles.Rajikaru}>Rajikaru</h1>
      <h2 className={Styles.content}>A general purpose discord bot</h2>
      <div className={Styles.invdiv}>
        <a className={Styles.invite} href="https://discord.com/api/oauth2/authorize?client_id=900694117355487283&permissions=1377073080902&scope=bot%20applications.commands">Invite to server</a>
      </div>
    </>
  )
}
