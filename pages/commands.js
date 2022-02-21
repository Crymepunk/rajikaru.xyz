import Head from 'next/head'
import menuStyles from '../styles/menu.module.css'
import Navbar from '../components/navbar.js'

export default function commands() {
  function utilitymenu() {
    document.getElementById('commandsList2').classList.add('invisible');
    document.getElementById('commandsList3').classList.add('invisible');
    document.getElementById('commandsList4').classList.add('invisible');
    document.getElementById('commandsList1').classList.remove('invisible');
  };

  function managermenu() {
    document.getElementById('commandsList1').classList.add('invisible');
    document.getElementById('commandsList3').classList.add('invisible');
    document.getElementById('commandsList4').classList.add('invisible');
    document.getElementById('commandsList2').classList.remove('invisible');
  };

  function moderationmenu() {
    document.getElementById('commandsList1').classList.add('invisible');
    document.getElementById('commandsList2').classList.add('invisible');
    document.getElementById('commandsList4').classList.add('invisible');
    document.getElementById('commandsList3').classList.remove('invisible');
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
          display: none;
        }`}
      </style>
      <Navbar />
      <aside id="utility" className={menuStyles.commandsMenu}>
        <ul>
          <li className={menuStyles.list}>
            <a className={menuStyles.tabbuttons} href="#Utility" onClick={() => utilitymenu()}>Utility</a>
          </li>
          <li className={menuStyles.list}>
            <a className={menuStyles.tabbuttons} href="#Manager" onClick={() => managermenu()}>Manager</a>
          </li>
          <li className={menuStyles.list}>
            <a className={menuStyles.tabbuttons} href="#Moderation" onClick={() => moderationmenu()}>Moderation</a>
          </li>
          <li className={menuStyles.list}>
            <a className={menuStyles.tabbuttons} href="#Fun" onClick={() => funmenu()}>Fun</a>
          </li>
        </ul>
      </aside>
      <div className={menuStyles.commandsList}>
      <div className={menuStyles.header}>Commands</div>
        <div id="commandsList1">
            <ul>
              <li className={menuStyles.commandstop}>avatar</li>
              <li className={menuStyles.commands}>nick</li>
              <li className={menuStyles.commands}>ping</li>
            </ul>
          </div>
        <div id="commandsList2" className="invisible">
          <ul>
            <li className={menuStyles.commands}>settings</li>
            <li className={menuStyles.commands}>role</li>
          </ul>
        </div>
        <div id="commandsList3" className="invisible">
          <ul>
            <li className={menuStyles.commands}>ban</li>
            <li className={menuStyles.commands}>unban</li>
            <li className={menuStyles.commands}>kick</li>
            <li className={menuStyles.commands}>warn</li>
            <li className={menuStyles.commands}>infractions</li>
            <li className={menuStyles.commands}>purge</li>
            <li className={menuStyles.commands}>say</li>
          </ul>
        </div>
        <div id="commandsList4" className="invisible">
          <ul>
            <li className={menuStyles.commands}>cuddle</li>
            <li className={menuStyles.commands}>hug</li>
            <li className={menuStyles.commands}>pat</li>
            <li className={menuStyles.commands}>slap</li>
            <li className={menuStyles.commands}>coinflip</li>
            <li className={menuStyles.commands}>neko</li>
            <li className={menuStyles.commands}>owoify</li>
            <li className={menuStyles.commands}>gayrate</li>
          </ul>
        </div>
      </div>
    </>
  )
}
