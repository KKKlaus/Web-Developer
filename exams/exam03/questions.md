# Exam 3 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

* NOTE: Because there is no coding portion to Exam 3, each of these questions is worth more to your grade than the questions on previous Exams!  Be sure to have answers you are confident shows your understanding!

## Q: I have said that React JSX components are like functions and follow many of the same best practices.  Give at least 2 such best practices that are good for both JS functions and JSX Components.  (Be substantive!)
    (1)functional components like proptypes:
    import React from 'react'
    import { observer } from 'mobx-react'
    import { func, bool } from 'prop-types'
    import './styles/Form.css'
    ExpandableForm.propTypes = {
        onSubmit: func.isRequired,
        expanded: bool
    }
    // Component declaration
    (2)setState as a function:
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.model.save()
    }
    
    handleNameChange = (e) => {
        this.props.model.changeName(e.target.value)
    }
    
    handleExpand = (e) => {
        e.preventDefault()
        this.setState(prevState => ({ expanded: !prevState.expanded }))
    }

## Q: I have said that using Progressive Enhancement (supporting both MPA and SPA) is best, but many places don't do so because of the effort involved.  What is at least one major reason not to use SPA alone?
    (1)SPA would load up the huge bundle of JavaScript code from the server, often measured in megabytes. If it won’t load, user will get nothing.Each of these requests can fail and this requires programmer to write more defensive code to handle those cases.
    (2)When you are building a Single-Page Application, automated testing is more difficult, especially in a functional, top-to-bottom manner.

## Q: Using class-based components and function-based components is largely a matter of preference.  However, (excluding the recent "hooks" addition to React), there are 2 things class-based components give you that function-based components do not.  What are those 2 things? 
    state and lifecycle methods

## Q: The "proxy" setting in your package.json is required for the create-react-app dev server to call a local service, but not if you are calling a service that will always be on a different domain (such as jsonstore.io).  Explain what happens (in terms of network traffic) when your dev server is running on localhost port 3000 and makes a call to `/service` when you have "proxy" set to `http://localhost:4000` and a server running on localhost port 4000 that has the `/service` service.  
    (1) when you do fetch in development, the dev server will recognize that it’s not a static asset, and will proxy your request to http://localhost:4000/ as a fallback. The development server will only attempt to send requests without text/html in its Accept header to the proxy.
    (2)HTTP will request server to go localhost port 4000 not throught proxy

## Q: Follow-up: Using the above scenario, explain what the network calls are like after you run `npm run build` and are only running all of your content on localhost port 4000 when your JSX makes a call to `/service`
    The network's request URL is local host 4000 and make no connection with port 3000

## Q: Additional follow-up: Using the above scenario, explain what changes you would make to your JSX if you were putting your JSX and server on a host on a site such as `http://favorite-cats-with-hats.com` (Not a real site)
    change the local host port to the exact site

## Q: I have said that you can only pass data "down" in React, not "up".  What does that mean?
     props are only passed from top to bottom in React’s component tree. There is no way to pass props up to a parent component

## Q: Follow-up: If you can't pass data "up", how can anything that is "down" change data?
    there is no way passing props from a child to a parent component. But you can always pass functions from parent to child components, whereas the child components make use of these functions and the functions may change the state in a parent component above. Once the state has changed, the state is passed down as props again. All affected components will render again. 

## Q: A component should not set its own state (if it has one) based on props it was passed in.  Why?  What is the problem with setting state based on props?
    the constructor of the component is executed only once, when the component is mounted. It will not get executed when component re-renders. When the parent component is re-rendered it will not destroy and recreate the child component. React will reuse the child component rendered earlier and do not run the constructor.
## Q: Why should you have only a few components that have state?  What is wrong with having many components that have state? 
    (1)If too many components get connected to the store, components may get updated at different (and incorrect) times.
    (2)When an overabundance of components are connected, it becomes more difficult to figure out what is causing changes to occur in the page
