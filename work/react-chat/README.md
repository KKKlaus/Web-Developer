# Rest basic

* start from the up-to-date master branch (`git checkout master; git pull origin master`)
* Create a feature branch named 'react-chat' (`git checkout -b react-chat`)
* Modify the files in this directory as requested
* Add files as required
* add, commit, and push the branch to github
* Create a PR to merge to master
* Be sure to include the TA and I as reviewers.  
* Due by 11:59pm Wed Apr 17

## Goal and Requirements

The goal is to:
* Improve the Chat application in React with RESTful services using full form input 
* ...this means to include our non-password user login/logout options
* ...using RESTful services
* Only SPA - no MPA required
* poll for new messages every 5 seconds and update the React state to show the messages and users
* You will be able to send messages and update the list without reloading the page
* Show meaningful error messages
* Run this all in a single server using `npm install` and `npm run server` (`npm start` should still work for the dev server, but will require that `npm run server` be running as well.  Running only `npm run server` should do all that is required)

## Requirements

### Visuals

* Your app and interactions should be attractive and usable
* The functionality should be understandable and discoverable

### Functionality
* The "login" button will be disabled if there is no username started
* The "send" button (there should be one!) will be disabled if there is no message started
* Every 5 seconds you will make a service call to GET /messages/
* The list of current messages will update based on the service results
* The list of current users will update based on the service results
* When a new message is sent - INSTEAD of having the browser load the /chat page, make a service call to POST /messages/ to send the new message and update the message list

### Code
* Your CSS should not use names to describe the appearance
* Your JSX should be in small, targeted components and follow the best practices from class.
* Non-presentation logic (such as service calls) should be in pure JS files without JSX with functions imported into components as needed

## Allowances
* You may create your generated HTML as you see fit, but it must be fundamentally semantically valid and other best practices from class
* You may create the CSS as you see fit but you must follow the best practices given in class
* You may add icons and background images but there is no requirement to do so
* You may provide additional visual feedback (e.g. messages) for the user

## Restrictions
* Do not read from the DOM directly
* Do not modify the DOM except via React
* Do not use external JS outside of express, nodemon, and what create-react-app installs
* All data from services should be JSON
* All data POSTed to a service should be JSON (unless in URL)
* Do not use external CSS libraries (except for icon libraries if desired - no JS!)
* You may not use floats to do more than manage flowing text with images
* You may not use HTML tables or CSS table layouts
* Do not have any files in your PR except for the assignment (no files from other assignments, for example)
* Do not use var
* Do not use alert
* Do not use terrible variable names
* Do not have console.log debugging messages or commented out code
* Do not use cookies
* Do not use localStorage/sessionStorage/IndexedDB
* You may not use CSS preprocessors, minifiers, or other tools to modify your CSS
