# Rest basic

* start from the up-to-date master branch (`git checkout master; git pull origin master`)
* Create a feature branch named 'rest-basic' (`git checkout -b rest-basic`)
* Modify the files in this directory as requested
* Add files as required
* add, commit, and push the branch to github
* Create a PR to merge to master
* Be sure to include the TA and I as reviewers.  
* Due by 11:59pm Sun Mar 3

## Goal and Requirements

The goal is to:
* Write a REST service to get the list of messages and users
* poll this service every 5 seconds and update the DOM to show the messages and users
* You will be able to send messages and update the list without reloading the page
* Augment the application behavior with front-end javascript
* All of this WITHOUT changing the code that returns the dynamic HTML
  * Exception: Adding an area(s) to display any error messages

## Requirements

### Visuals

* Your app and interactions should be attractive and usable
* The functionality should be understandable and discoverable
* The Refresh button will be REMOVED via client-side JS

### Functionality
* The "login" button will be disabled if there is no username started
* The "send" button will be disabled if there is no message started
* Every 5 seconds you will make a service call to GET /messages/
* The list of current messages will update based on the service results
* The list of current users will update based on the service results
* When a new message is sent - INSTEAD of having the browser load the /chat page, make a service call to POST /messages/ to send the new message and update the message list
* A message (NOT alert()!) will be shown to the user if there are errors reaching the service.  This message is removed the next time there is a successful communication with the service.
   * You can test this by loading the app, using it, and then setting Chrome to Offline (on the Network subtab)

### Code
* Your CSS should not use names to describe the appearance
* Your JS should be broken up into smaller, well-named functions
* Your client-side JS should be contained within an IIFE and "use strict"
    * If you use browserify, it will provide the IIFE, but you must add any "use strict" statements    
* If you use browserify:
    * you must add a "build" option to the "scripts" section of package.json so that I/TA can use `npm run build` from this directory to generate the bundled JS in the correct file location.  
    * you must add browserify to the devDependencies (for example, using '--save-dev')
    * All of your source JS files must be in the repository

## Allowances
* You may create your HTML as you see fit, but it must be fundamentally semantically valid and other best practices from class
* You may create the CSS as you see fit but you must follow the best practices given in class
* You may add icons and background images but there is no requirement to do so
* You may provide additional visual feedback (e.g. messages) for the user
* You may add client-side JS files that you create (or bundle using browserify) as you desire
* You may add server-side JS only as allowed above ( do not modify the dynamic HTML except for adding any areas to put in messages)

## Restrictions
* Do not use external JS (Exception: Nodemon and Browserify are permitted but not required)
   * Either of Nodemon and browserify can be listed as a devDependency, but not as a normal dependency.
* All data from services should be JSON
* All data POSTed to a service should be JSON
* Do NOT modify server-side JS that generates the HTML
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
  * I and the TA must be able to read it easily
