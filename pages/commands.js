import Head from 'next/head'
import menuStyles from '../styles/menu.module.css'

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
        <link rel="icon" href="/favicon.png" />
      </Head>
      <style>
        {`.invisible {
          transition-duration: 0.4s !important;
          display: none;
        }`}
      </style>
      <div className={menuStyles.commandsPage}>
       <div className={menuStyles.commandsMenu}>
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
        <div className={menuStyles.CommandsHeader}>Commands</div>
          <div id="commandsList1">
              <div>
                <div className={menuStyles.commands}>/help</div>
                <div className={menuStyles.commandsDesc}>View a list of commands</div>
                  <br/>
                <div className={menuStyles.commands}>/avatar</div>
                <div className={menuStyles.commandsDesc}>Replies with the user&apos;s avatar</div>
                  <br/>
                <div className={menuStyles.commands}>/userinfo</div>
                <div className={menuStyles.commandsDesc}>Replies with information about the mentioned user</div>
                  <br/>
                <div className={menuStyles.commands}>/serverinfo</div>
                <div className={menuStyles.commandsDesc}>Replies with information about the server</div>
                  <br/>
                <div className={menuStyles.commands}>/ping</div>
                <div className={menuStyles.commandsDesc}>Replies with Pong!</div>
                  <br/>
              </div>
            </div>
          <div id="commandsList2" className="invisible">
            <div>
              <div className={menuStyles.commands}>/settings</div>
                <br/>
              <div className={menuStyles.commands}>/role</div>
            </div>
          </div>
          <div id="commandsList3" className="invisible">
              <div className={menuStyles.commands}>/ban</div>
              <div className={menuStyles.commandsDesc}>Bans the pinged member</div>
                <br/>
              <div className={menuStyles.commands}>/unban</div>
              <div className={menuStyles.commandsDesc}>Unbans the specified user</div>
                <br/>
              <div className={menuStyles.commands}>/kick</div>
              <div className={menuStyles.commandsDesc}>Kicks the pinged member</div>
                <br/>
              <div className={menuStyles.commands}>/warn</div>
              <div className={menuStyles.commandsDesc}>Warns the pinged member</div>
                <br/>
              <div className={menuStyles.commands}>/infractions</div>
              <div className={menuStyles.commandsDesc}>Show, clear, or remove infractions from a member</div>
                <br/>
              <div className={menuStyles.commands}>/purge</div>
              <div className={menuStyles.commandsDesc}>Removes messages</div>
                <br/>
              <div className={menuStyles.commands}>/nick</div>
              <div className={menuStyles.commandsDesc}>Gives a specified nickname to the mentioned user</div>
                <br/>
              <div className={menuStyles.commands}>/say</div>
              <div className={menuStyles.commandsDesc}>Says the message you tell it to say</div>
          </div>
          <div id="commandsList4" className="invisible">
            <div>
              <div className={menuStyles.commands}>/cuddle</div>
              <div className={menuStyles.commandsDesc}>Cuddles the pinged member</div>
                <br/>
              <div className={menuStyles.commands}>/hug</div>
              <div className={menuStyles.commandsDesc}>Hugs the pinged member</div>
                <br/>
              <div className={menuStyles.commands}>/pat</div>
              <div className={menuStyles.commandsDesc}>Pats the pinged member</div>
                <br/>
              <div className={menuStyles.commands}>/slap</div>
              <div className={menuStyles.commandsDesc}>Slaps the pinged member</div>
                <br/>
              <div className={menuStyles.commands}>/neko</div>
              <div className={menuStyles.commandsDesc}>Sends a random catperson image</div>
                <br/>
              <div className={menuStyles.commands}>/coinflip</div>
              <div className={menuStyles.commandsDesc}>Replies with either Heads or Tails</div>
                <br/>
              <div className={menuStyles.commands}>/8ball</div>
              <div className={menuStyles.commandsDesc}>Answers questions for you</div>
                <br/>
              <div className={menuStyles.commands}>/owoify</div>
              <div className={menuStyles.commandsDesc}>Owoifies your text</div>
                <br/>
              <div className={menuStyles.commands}>/gayrate</div>
              <div className={menuStyles.commandsDesc}>How gay is the pinged person(Random)</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
