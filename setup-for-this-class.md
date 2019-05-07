# Intial Setup for Info 6250: Web Dev Tools and Methods

## A Warning about Limited Support

For all of the items listed here I will offer what support I can, but deciphering the needs of different operating systems and different software bugs is beyond the scope of this class and often not my skillset.  

## Accounts
### Github.com
You will need a (free of cost) account on github.com
* https://github.com/

Existing accounts are fine.

I recommend using only LOWERCASE letters in your username, because it makes things harder when you need to also worry about capitalization.

### Slack.com
You will need a (free of cost) account on slack.com to join in the discussion there.  That account is specific to the class workspace (there is not a "general" account as on github)
* https://rebrand.ly/seainfo6250-slack

I recommend the desktop client and/or the mobile client over the web-based one.  Slack is where most info on the class is discussed, just like many programming shops.

## Required Software
### Git
You will need to install a git client (free of cost):
* https://git-scm.com/downloads

All instruction and examples in class use the _command-line client_, not a graphical one.

### NodeJS and npm
You will need to install a recent version of NodeJS (which will also install npm) (free of cost)
* https://nodejs.org/   (I recommend LTS version)

All instruction and examples will use `npm` instead of `yarn`.

- Do *NOT* install anything for node/npm with 'sudo' or as administrator unless you know how to clean up the permissions mess it creates.
- Do *NOT* install anything with a '-g' flag, such as ~~`npm install -g whatever`~~.  This installs a single specific version of 'whatever' to use anywhere.  That is often useful unless you're a developer on a project that uses 'whatever'.  *NOTE* online instructions will often advise you to do a global install, because it is easier for them to say that to you.  Don't do it.  It's worth your effort now to do it right rather than doing the easy way and having to untangle it later.
- If you are familiar with node, you are welcome to use a version manager like nvm, but don't use `npx` in the class so there is no confusion later.

### Chrome Web Browser
You will need to install and use the (free of cost) Chrome web browser if you do not already have it
* https://www.google.com/chrome/browser/desktop/index.html

Be sure to configure it as mentioned further down!

### Text Editor
You will need a text editor of your choice (note: A Text Editor is NOT a word processor).  Some popular (and free of cost) available ones include VSCode, Atom, Brackets, or Notepad++ (windows), while some commercial ones that allow limited free demos include SublimeText and WebStorm.  Those users familiar with more old-school editors such as vim or emacs are welcome to use them.
* NOTE: I highly recommend having a specific directory(folder) to hold material from the class.  Students that just work out of "Documents" or "Downloads" quickly find their work lost among other files there.

### Terminal Program of your choice (optional)
To my knowledge all common systems come with a command-line terminal, however some of the OS-provided ones are sub-par.  If you wish to install and use programs like iTerm2 (Mac) or Powershell (Windows) or any of a bazillion options (Linux) you may do so.  (Many free of cost)

## Configuration

### PATH Environment Variable

You will need to configure the PATH environment variable for your system or user account to _include_ (don't replace what is there) `./node_modules/.bin/` as the *last* path in your PATH.  Windows users may have to use backslashes. Notice how multiple entries are separated (comma or semicolon) and follow that rule.

Make sure your configuration will survive closing the terminal or rebooting your machine.  (*Note:* At least one student fails this step every semester)

### Chrome Dev Tools Console

You should make the configuration changes below.  The exact means to get to these options can differ slightly between OS and Chrome version
* View -> Developer -> Javascript Console
* Gear icon on upper right
* Check 'LogXMLHttpRequests'
* Network subtab -> Check 'Disable Cache'
* Application subtab -> Service Workers in left menu -> Check 'Update on reload' and 'Bypass for network'
  * _Note_: This alters the behavior of web applications that run while offline.  If you actually use offline web apps, you should create a different profile (Main Menu -> People -> Add Person) so you can have this configuration for class work and your existing one for everything else.

## Making sure it all works

Do the following, which will let me (and you) know that everything is working.  If you run into a problem you can't solve, speak up on Slack.

1. Complete all the installation and config steps above
1. Fully reboot your system (This is to test that your changes aren't temporary)
  * I know everything says to reboot and you can usually ignore it, but if you skip rebooting now you will not know if your changes will survive a reboot.
1. If you have not cloned the repository this file is in to your computer, do so now (`git clone value-from-the-clone-or-download-button-on-github`)
  * After cloning, be sure to be in the correct directory, the root directory of the project, that is, the directory that git clone just created
1. If you are not strong git, see the 'basic-git' file in the readings/ directory, but for now just follow the steps here
1. Change into the samples/setup-test directory (`cd samples/setup-test`)
1. Run `npm install`
  * You should see some text while it downloads a library or two
  * If you see permissions error (EACCES) you probably installed something as root/administrator, and now your normal user account can't override it. That's a bit messy to clean up, but it's doable and you want to clean that up NOW rather than later in the semester.
  * Lots of ways of addressing this exist, with varying levels of success and computer security.  Speak up on Slack if this is an issue for you.
1. Run `node list.js`
  * You should see some names printed to the console
  * If you see a message about your PATH, you should fix that (and reboot again) first, following the earlier instructions
1. You are going to make changes, so you should first create a "feature branch" to create those changes in
  * run `git checkout -b setup-info6250`
1. Edit list.js and add your name, NEU ID, and github id to the list
1. Run `node list.js` again now that you've saved your changes
  * You should see your name added to the list that outputs
  * Everything should run smoothly
  * Fix any errors that do turn up and repeat this step until everything runs smoothly
1. Add the file to the list of files to commit: `git add list.js`
1. Run `git status` and make sure nothing is listed as an 'Untracked file' and only `list.js` is listed to be added.
   * I have never heard *anyone* say "I run git status too much".  It is much easier to clean up a commit BEFORE you make it, so always run git status before doing a commit.  Always pay attention to the output of git status.  Multiple students fail this step each semester.
1. Commit the file: `git commit -m "Added MYNAME"` (Example: `git commit -m"Added Lex"`
1. Send your changes to github: `git push origin setup-info6250` 
1. Go to the github page for this repository and create a Pull Request(PR), with 'master' on the left dropdown and your setup-info6250 branch on the right dropdown.
  * Do not merge, you must create a Pull Request.  Your repositories should be set so that you cannot merge to master without a Pull Request, but they are created without that requirement so there is a period of time where you can merge, but you shouldn't do it.  Learn how to create the PR, because that's how all assignments for the class will be turned in, and if you do it wrong, your grade could suffer.
  * Add myself and the TA to review the PR.  If you don't do this, we may not know your work is ready and you won't get credit for it.
1. If the changes look correct, Create the Pull Request.
  * If you edited and added `.gitignore`, that change should be listed as well as your changes to list.js
  * There should NOT be changes to other files.
  * Be sure to add me as the review on the PR.
1. Remember to return the master branch!  `git checkout master`.  In this branch, your changes do not exist (not until they are approved, merged in, and you pull the updated master branch)

Then you're done! At some point your code will be reviewed merged into master.  At a real job, you are usually responsible for merging your code after it is approved.

## I'm a bit confused

Here are some resources you can use to get started if you feel particularly lost.
* https://guides.github.com/activities/hello-world/ (fully web-based to focus on the concepts)
* https://www.youtube.com/githubguides

You don't need to be strong with git/github at this point, so long as you are able to navigate the steps above, but I highly recommend improving your git skills as git is used in many, MANY workplaces, and even in those that don't you will often work with open-source libraries that use git.

And you should ask on Slack - odds are if you're having an issue so is someone else.
