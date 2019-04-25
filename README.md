# Final Project - Shopping Site

## Summary
I implemented a shopping site based on React that I totally learned from this class. The front and end logic is also based on it. The project satisfied all requirements that can demonstrate the best practices and be usable by multiple users simultaneously

## Configurations and Code

### Installation
* `npm run server` will begin the server

### JS
* non-JSX JS files as well that export functions that components import as needed
* Followed the best practices
* Did not use any external JS
* Did not update the DOM directly, but only through React state updates.

### CSS
* As a CSS rookie, I looking at lots of videos and documents to learn CSS
* Did not use any external CSS libraries and CSS table layouts

### Database
* For more convenient operation, I did not add database to this project
* Actually, I have implemented this part in Chat Application by using lokijs and jsonstore.io respectively

## Interface introduction

### Login
* The first interface is Login
* You should create an account to login, if there is no text in username and password input box, or username does not match password, The page will display an error red message

### Register
* Click `Create an account` will go to Register
* If there is no text in username, password and confirmpassword input box, or password does not equal to confirmpassword, the page will dispaly an error red message
* By click Create button, it successfully created an account object in /server/shopping.js

### Home
* If you successfully create an account, you can go to Home page by enter correct username and password and click LOGIN button
* In home page, you can see 7 shopping items listed which was created in /server/shopping.js, I have not finished post product part now yet, but I am working on that
* There is a black navigation bar on the top of the home page. There are 5 parts in navigation bar:
** Side menu: Well, I did not do this :)
**

