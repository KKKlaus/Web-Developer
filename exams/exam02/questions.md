# Exam 2 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q: The first rule I've given about REST services is that the URL should represent a resource.  What does that mean?  Provide an example where a url DOES not represent a resource, then describe how to modify it so that it does.
     Each resources can own a unique URL, which is better to represent more info about the resource. Like the location of the resource or the type of the resource, so the users can understande the resource more. URLs often have a long lifetime so that clients can directly address a resource long after the resource is initially discovered.
     Example: www.example.com/BookStorage524132/123, This example cannot represent a resource well, though we can know the resource is about the book storage. We can change it to www.example.com/BookStorage/?id=123/....

## Q: I say that "Once you go async, you have to stay async".  What does this mean?  Give an example that demonstrates.
        Any async function returns a promise implicitly, and the resolved value of the promise will be whatever returns from your function. This implies that we can only use await inside functions defined with the async keyword.
    async function myAsyncFunction() {
    const result = await somethingThatReturnsAPromise();
    console.log(result);
    }
    If the promise resolves

## Q: What is a rule of thumb you can follow to understand when async code can and cannot modify your variables and/or call your methods?
    async and await hide the .then() and .catch(), and also they implicitly set all following code to be async. async and await can cause confusion by hiding what is really happening.
    Ex: 
    There are two callbacks:         a(() =>{
    b();
    });
    c(() =>{
    d();
    });
    if we use async, it will come to:
    await a();
    await b();
    await c();
    await d();
    Actually in the callbacks, the a and c functions can run at the same time. However, the async made all codes using async and we need to wait function b and then run function c. The outcome is worse than before.

## Q: What does it mean to "store your state in the DOM"?  Why shouldn't you do this?
    "store your state in the DOM" means using DOM to store and read the values of the state. 
    The reasoon we shouldn't store the state in the DOM because the screent is the visual output and if the display is altered, the way to get the list can also be changed. Also, if the display becomes more complicated, the state interaction also be complicated.

## Q: What is the primary rule to follow to prevent poor web security such as injection attacks?  (This is NOT about safely storing passwords)
    To defense against sql injection we should never craft your SQL from user input and always use"bound variables when possible. If it is not possible to use bound, use the escaping libraries for the vendor and whitelist your data.

## Q: What is a polyfill?  When should one be used?  Give an example of a polyfill that follows these rules.
    Polyfills add newer functionality to older JS. 
    when defines a new object or method in browsers that don’t support that object or method, we can use it.
    Ex: forEach() is a method on Arrays, takes a callback, calls that callback with each elements.

## Q: Give an example of a piece of information you should not store in a cookie, and why you should not store it that way.
    Sensitive data, like passwords, addresses. We cannot use Cookies to store the password because Cookies are text-based key/values pairs, and can be shared between tabs.

## Q: Explain the differences between a multiple-page-web application and single-page-web application.  Be sure to fully demonstrate your understanding.
    A single-page application is an app that works inside a browser and does not require page reloading during use, like Gmail, Facebook. For Multiple-page application, every change, like submitting data back to server requests rendering a new page from the server in the browser. Thus, SPA is fast and development is simplified and streamlined, and also SPA can cache any local storage. However, MPA is large and bigger than SPA.

## Q: What is Progressive Enhancement?  What is the difference in an SPA that uses Progressive Enhancement compared to an SPA that doesn't use Progressive Enhancement?
    Progressive Enhancement is a strategy for web design that emphasizes the most important webpage first. 
    an SPA uses PE can reduce page load better than an SPA that doesn't use, and imporve page load efficiency. 
    


## Q: Explain how a  REST service is or is not similar to a dynamic asset.
    If a REST service wants to be similar to a dynamic asset, it should use dynamic method to return asset to the user and may use AJAX. For example, it can request some asset from the database. On the contrast, if a REST service doesn't  want to be similar to a dynamic asset, it should return static asset to users.


