import Head from 'next/head'
import menuStyles from '../styles/menu.module.css'
import Navbar from '../components/navbar.js'

export default function commands() {
  function utilitymenu() {
    document.getElementById('commandsList1').classList.remove('invisible');
    document.getElementById('commandsList2').classList.add('invisible');
    document.getElementById('commandsList3').classList.add('invisible');
    document.getElementById('commandsList4').classList.add('invisible');
  };

  function managermenu() {
    document.getElementById('commandsList1').classList.add('invisible');
    document.getElementById('commandsList2').classList.remove('invisible');
    document.getElementById('commandsList3').classList.add('invisible');
    document.getElementById('commandsList4').classList.add('invisible');
  };

  function moderationmenu() {
    document.getElementById('commandsList1').classList.add('invisible');
    document.getElementById('commandsList2').classList.add('invisible');
    document.getElementById('commandsList3').classList.remove('invisible');
    document.getElementById('commandsList4').classList.add('invisible');
  };

  function funmenu() {
    document.getElementById('commandsList1').classList.add('invisible');
    document.getElementById('commandsList2').classList.add('invisible');
    document.getElementById('commandsList3').classList.add('invisible');
    document.getElementById('commandsList4').classList.remove('invisible');
  };

  return (
    <>
      <Head>
        <title>Rajikaru Bot Commands</title>
      </Head>
      <style>
        {`.invisible {
          transition-duration: 0.4s !important;
          opacity: 0%;
          display: none;
        }`}
      </style>
      <Navbar />
      <aside id="utility" className={menuStyles.commandsMenu}>
        <ul>
          <li className={menuStyles.list}>
            <a className={menuStyles.utility} href="#Utility" onClick={() => utilitymenu()}>Utility</a>
          </li>
          <li className={menuStyles.list}>
            <a className={menuStyles.manager} href="#Manager" onClick={() => managermenu()}>Manager</a>
          </li>
          <li className={menuStyles.list}>
            <a className={menuStyles.moderation} href="#Moderation" onClick={() => moderationmenu()}>Moderation</a>
          </li>
          <li className={menuStyles.list}>
            <a className={menuStyles.fun} href="#Fun" onClick={() => funmenu()}>Fun</a>
          </li>
        </ul>
      </aside>
      <div className={menuStyles.commandsList}>
        <div id="commandsList1">
          <div>Commands</div>
            <ul>
              <li className={menuStyles.commands}>avatar</li>
              <li className={menuStyles.commands}>nick</li>
              <li className={menuStyles.commands}>ping</li>
            </ul>
          </div>
        <div id="commandsList2">
          <ul>

          </ul>
        </div>
        <div id="commandsList3">
          <ul>

          </ul>
        </div>
        <div id="commandsList4">
          <ul>

          </ul>
        </div>
      </div>
    </>
  )
}
