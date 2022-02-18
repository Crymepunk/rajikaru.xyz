import homeStyles from '../styles/Home.module.css'
import Head from 'next/head'
import Navbar from '../components/navbar.js'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rajikaru Discord Bot</title>
      </Head>
      <Navbar />
      <h1 className={homeStyles.Rajikaru}>Rajikaru</h1>
      <h2 className={homeStyles.content}>A general purpose discord bot</h2>
      <div className={homeStyles.invdiv}>
        <a className={homeStyles.invite} href="https://discord.com/api/oauth2/authorize?client_id=900694117355487283&permissions=1377073080902&scope=bot%20applications.commands">Invite to server</a>
      </div>
    </>
  )
}
