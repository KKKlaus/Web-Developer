# Course Syllabus: INFO 6250 (Seattle)                                            
# Spring Semester 2019
Instructor: Brett Ritter `<b.ritter@neu.edu>`

This course covers Web Development, focusing on the architectural implications of a rapidly evolving platform that has frequent requirement and environment changes. Students will learn to learn Javascript, recent language upgrades (ES6/ES7), security best practices, JSON, making AJAX requests, authorization and authentication, calling REST services, Single Page Applications (SPA), NodeJS as a backend, and using the React library as examples of approaches to front end architecture.  Students will be expected to complete and extend several projects using the skills covered in class.

## Grading: I reserve the right to adjust based on your final demonstration of applied knowledge.  
```
20% Assignments, Participation, Quizzes
60% Exams (3 Exams, 20% each) 
20% Personal Project
```

## Basic Requirements and Expectations:
- Basic familiarity with CSS and HTML is assumed ( see https://developer.mozilla.org/en-US/docs/Learn )  
- Basic exposure to programming concepts (variables, functions, looping) is assumed
- You will have to use git and github.com following the instructions given
- There is no textbook for the class, but a number of online articles will be shared.
- Many topics will be introduced in class but require you to perform additional research/experimentation
- Additional software (without cost) is required.  Installation and configuration is your responsibility (Mac, Windows, or \*nix)
- A great deal of work will be done online, in and out of class

A more detailed listing of requirements and expectations will be shared in the class github repository 

## Expected Class Schedule (subject to change):

### Section 1: Web Fundamentals
Mon Jan 7, Mon Jan 14, NOT ~~Mon Jan 21~~ (holiday), Mon Jan 28
   - Protocols, Web, HTTP, servers/webservers, browsers, clients, URL/URI, HTTP as stateless, request/response, headers/body
   - The role of HTML, CSS, and JS
   - semantic HTML, MDN, the Browser Wars, evergreen browsers, the unreliability of not-that-old information
   - HTML best practices, CSS best practices
   - absolute vs relative paths/URLs
   - application state, multiple-page web applications
   - static vs dynamic assets, client-side/server-side
   - programming languages as communication, idioms, static/dynamic languages, weak/strong typing
   - Javascript syntax, NodeJS, npm/yarn, package.json, global vs local installs, JSON
   - functions as objects, prototypes, 'this'(context), callbacks, threads, try/catch, closures, scopes

At the end of Section 1 you should be able to write a simple multiple page web application using NodeJS that serves semantic HTML and styles with CSS

### Section 2: The Recent Web
Mon Feb 4, NOT ~~Mon Feb 11~~ (instructor conflict), NOT ~~Mon Feb 18~~ (holiday), Mon Feb 25, NOT ~~Mon Mar 4~~ (holiday), Mon Mar 11, Mon Mar 18
   - HTTPS/SSL, public-key encryption, certificates, Authentication, Authorization
   - Model-View-Controller(MVC)
   - debugging JS, unit tests, testing pyramid, TDD
   - the DOM, state in model vs state in DOM, cookies, localStorage
   - asynchronous events (async), Promises, XHR/fetch/AJAX, HTTP verbs (methods), REST, GraphQL, services/endpoints
   - polyfills, minifiers, linters, bundlers, transpilers, CSS preprocessors, builds
   - Frontend frameworks/libraries, React, virtual DOM, JSX, Single Page Applications (SPA)
   - props vs state, Pure components vs stateful components, render props, Higher Order Components
   - Databases, CRUD, SQL and NoSQL, SQL Injection, OWASP, Same Origin Policy(SOP), CORS, XSS, XSRF/CSRF

At the end of Section 2 you should be able to write a simple single page web application (SPA) calling RESTful, external services, and use NodeJS to provide service endpoints that can make use of a database.

### Section 3: The Modern Web Industry
Mon Mar 25, Mon Apr 1, Mon Apr 8, Mon Apr 15
 - Application state management, Redux
 - Progressive Web Apps (PWA)
 - as-a-service (PaaS, FaaS)
 - Agile, change management, Software Patterns
 - Mockups, wireframes, prototypes
 - Obfuscation, copyrights, and module licensing
 - Password hashing/salting, JWT, Oauth, OIDC
 - Isomorphic/Universal Javascript 
 - JS on other platforms, websockets

At the end of Section 3 you should be able to analyze provided designs to matching write a complex single page web application (SPA) and prior to actual coding identify potential problems with development due to insufficient/poor requirements.

### Final Projects Due Mon Apr 24, 11:59pm (No class)
