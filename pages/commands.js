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
       <div id="utility" className={menuStyles.commandsMenu}>
          <div>
            <div className={menuStyles.list}>
                <a className={menuStyles.tabbuttons} href="#Utility" onClick={() => utilitymenu()}>Utility</a>
            </div>
            <div className={menuStyles.list}>
                <a className={menuStyles.tabbuttons} href="#Manager" onClick={() => managermenu()}>Manager</a>
              </div>
              <div className={menuStyles.list}>
                <a className={menuStyles.tabbuttons} href="#Moderation" onClick={() => moderationmenu()}>Moderation</a>
            </div>
            <div className={menuStyles.list}>
                <a className={menuStyles.tabbuttons} href="#Fun" onClick={() => funmenu()}>Fun</a>
            </div>
            </div>
       </div>
        <div className={menuStyles.commandsList}>
        <div className={menuStyles.header}>Commands</div>
          <div id="commandsList1">
              <div>
                <div className={menuStyles.commands}>avatar</div>
                <div className={menuStyles.commandsDesc}>Replies with the user&apos;s avatar.</div>
                  <br/>
                <div className={menuStyles.commands}>nick</div>
                  <br/>
                <div className={menuStyles.commands}>ping</div>
                  <br/>
              </div>
            </div>
          <div id="commandsList2" className="invisible">
            <div>
              <div className={menuStyles.commands}>settings</div>
                <br/>
              <div className={menuStyles.commands}>role</div>
            </div>
          </div>
          <div id="commandsList3" className="invisible">
              <div className={menuStyles.commands}>ban</div>
                <br/>
              <div className={menuStyles.commands}>unban</div>
                <br/>
              <div className={menuStyles.commands}>kick</div>
                <br/>
              <div className={menuStyles.commands}>warn</div>
                <br/>
              <div className={menuStyles.commands}>infractions</div>
                <br/>
              <div className={menuStyles.commands}>purge</div>
                <br/>
              <div className={menuStyles.commands}>say</div>
          </div>
          <div id="commandsList4" className="invisible">
            <div>
              <div className={menuStyles.commands}>cuddle</div>
                <br/>
              <div className={menuStyles.commands}>hug</div>
                <br/>
              <div className={menuStyles.commands}>pat</div>
                <br/>
              <div className={menuStyles.commands}>slap</div>
                <br/>
              <div className={menuStyles.commands}>coinflip</div>
                <br/>
              <div className={menuStyles.commands}>neko</div>
                <br/>
              <div className={menuStyles.commands}>owoify</div>
                <br/>
              <div className={menuStyles.commands}>gayrate</div>
            </div>
          </div>
        </div>
    </>
  )
}
