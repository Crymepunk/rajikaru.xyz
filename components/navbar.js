import Link from 'next/link'
import navStyles from '../styles/navbar.module.css'

export default function navbar(){
  return (
<nav>
        <Link href="/">
          <a className={navStyles.navigation}>Home</a>
        </Link>
        <Link href="/commands">
          <a className={navStyles.navigation}>Commands</a>
        </Link>
        <Link href="https://github.com/Crymepunk/rajikaru-bot">
          <a className={navStyles.navigation} target="_blank">GitHub</a>
        </Link>
      </nav>
  )
}