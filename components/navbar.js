import Link from 'next/link'
import navStyles from '../styles/navbar.module.css'

export default function navbar(){
  return (
      <nav className={navStyles.div}>
        <Link href="/" className={navStyles.navigation}></Link>
        <Link href="/commands"className={navStyles.navigation}>Commands</Link>
        <Link href="https://github.com/Crymepunk/rajikaru-bot" className={navStyles.navigation} target="_blank">GitHub</Link>
      </nav>
  )
}