# JS Express

* start from the up-to-date master branch (`git checkout master; git pull origin master`)
* Create a feature branch named 'js-express' (`git checkout -b js-express`)
* modify the files in this directory to have the require features
* add, commit, and push the branch to github
* Create a PR to merge to master
* Be sure to include the TA and I as reviewers.  
* Due by Sun Feb 3, 11:59pm

## Goal and Requirements

The Chat application will work for multiple users to have usernames, allow logout, and remove the default messages/users

* Will have a "Logout" button that sends (POST) the username (name=username) that will remove that user from the user list
* The default message/users should be removed
* `http://localhost:3000/` will check to see if the user is considered logged in
    * If they are, it will display the chat application
    * If they are not, it will redirect them to `/login` (GET) which will display a form asking for a username (name = 'username')
* The login form will 
   * POST (not GET) to `/login`
   * which will add the username to the user list, 
   * redirect them to `/`
* The base chat page
   * Will send their user name as a hidden field (name=username) to the server when posting a new message
   * Will have a "Refresh" button that loads the base chat page
* Messages from logged out users should still be visible
* It should be reasonably attractive
* The visuals should make it easy to use
* It should maintain/extend the separation of concerns used in the existing files
* It should follow the best practices outlined in class
* I should be able to run your code with `npm install` and then `node server.js`

## Allowances
* You may modify the HTML as you see fit
    * But it must be fundamentally semantically valid and other best practices from class
* You may modify the CSS as you see fit
    * But you must follow the best practices given in class
* The `name` form fields attributes must NOT change
    * username for the username
    * text for the new message text
* You must use the correct HTTP methods (GET for loading pages, POST for adding content) as listed
* You must use the route paths as given/described
    * /
    * /chat
    * /login
    * /logout
* You may add additional JS files (server-side ONLY) that you write
    * But they must maintain/extend the existing separation of concerns

## Restrictions
* DO NOT HAVE ANY "PASSWORD" behavior
    * Poor security is bad security - we aren't even pretending to have security yet
* Do not add extra routes
* Do not change how the routes get/pass data except as described here
* Do not use external JS other than express itself
* Do not use external CSS libraries
* You may not use floats to do more than manage flowing text with images
* You may not use HTML tables or CSS table layouts
* You may NOT use client-side/browser-side Javascript
* You may not use CSS preprocessors, minifiers, or other tools to modify your CSS
  * I and the TA must be able to read it easily

