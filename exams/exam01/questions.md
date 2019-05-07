# Exam 1 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q: What is the difference between a dynamic asset and a static asset?
        Static assets(files) do not need to be processed by the application, they just need to be delivered to the browser. While dynamic asset is mostly powered by application and run on the server hosting the website. So changes dynamic asset require the server to restart in that server should process different requrest by users.
## Q: What is the difference between a relative and absolute file path in a URL?  What is the "webserver root" and how does this relate to it?
        Absolute file path is built starting from system root, or the "webserver root", while Reletive file path is starting from current location(or currently loaded page). So if we do not supply the root, it means the relative path. "Webserver root" is like system root, which relative and absolute paths are distinguished from when talks about in web or browser.
## Q: What is the difference between server-side and client-side JS?
        Client-side JS is run on the client machine, which is the borwser. Server-side JS is run on the server which is serving web pages.
## Q: What are the differences between `var`, `const`, and `let`, and when should you use each of them?
        The main difference between `var` and `let` is that `var` is function scoped and `let` is block scoped. Without refrencing, `var` will just get undefined but `let` will result in a reference error. `const` is almost the same as `let`, but once we assigned a value to a variable using `const`, we can not reassign it to a new value.
        Use `const` everywhere I can, 80%-90% of my variables should be `const`. `var` only used when targeting older JS engines. `let` used when variables should be changed in BLOCK scope.
## Q: What are the 4 ways to create inheritance? (no examples needed, just a sentence describing each)
        1.Constructor Function: use prototype of a new object to assign the prototype property.
        2.Object.create: give you a new object with the new object's prototype set to passed object.
        3.ES6 classes: a pattern of simulating class-like inheritance hierarchies using functions and prototypes
        4.Brute Force Prototype Assignment:  set the prototype directly.
## Q: Give a demonstration of 1 way to create JS inheritance to _inherit_ a method named "purr".
        I will use Constructor Function way:   
        const Cat = function(name) {
            this.name = name;
        };
        Cat.prototype.purr = function() {
            console.log(`${this.name} is purring now`);
        };
        const maru = new Cat('Maru');
        maru.spur();
        
## Q: Give a demonstration of a different way to create JS inheritance to _inherit_ a method named "hiss".
        I will use Object.Create way:
        const cat = {
            hiss: function() {
                console.log(`${this.name} is hissing now`);
            }
        };
        const maru = Object.create(cat);
        maru.name = 'Maru';
        maru.hiss();
## Q: Explain this sentence: "In CSS, you can select an element based on its ancestors, but you can't select an element based on its descendants"  Make an example and say a concept that cannot be selected.
        Example:
        <!DOCTYPE html>
        <html>
        <head>
            <title></title>
        </head>
        <body>
            <ul class="first"></ul>
            <li class="second">Second</li>
            <li class="third">Third</li>
        </body>
        </html>
        
        if we want to select the third<li> element, we should use the selector: ul.first > li.secon {...} but we can not specify the parent <ul> element by the <li> element.
## Q: Explain what a callback is, and give an example.
        I will use FizzBuzz() taked in class to explain callback:
            function FizzBuzz({ min = 2, max = 20, fizz = 3, buzz = 5, callback = (val) => console.log(val)} = {}){
                for( let i = min; i <= max; i++){
                    const isFizz = i % fizz == 0;
                    const isBuzz = i % buzz == 0;
                    if(isFizz && isBuzz){
                        callback('FizzBuzz');
                    }
                    else if(isFizz){
                        callback('Fizz');
                    }
                    else if(isBuzz){
                        callback('Buzz');
                    }
                    else{
                        callback(i);
                    }
                }
            }
        We can see, callback passes to FizzBuzz function as a output function, so the FizzBuzz have a output, which means the receiving function gets control over.
## Q: In CSS, what does it mean "You shouldn't name your classes after what they will appear like"?   Why?  Give an example of a class that is well named and a class that is poorly named.
        Like naming a variable, we won't name a variable according its value but according to its meaning.(`let sum = 2 + 3;` but not `let five = 2 + 3;`) CSS class nameing is the same, we should naming properly so that class can be distinguished by another。
        Here is an example : 
        
        -----------------well named-----------------
        #chat-app { 
            border: 1px solid black;
            display: flex;
            flex-direction: column;
        }
        
        .display-panel { 
            display: flex;
            flex-direction: row;
        }
        
        .users { 
            border: 1px solid black;
            list-style: none;
            padding: 5px;
            margin: 0;
        }
        
        .messages { 
            list-style: none;
            padding: 0;
            margin: 0;
        }

        ------------------poorly named----------------
        #blue { 
            border: 1px solid black;
            display: flex;
            flex-direction: column;
        }
        
        .whitePanel { 
            display: flex;
            flex-direction: row;
        }
        
        .SmallBox { 
            border: 1px solid black;
            list-style: none;
            padding: 5px;
            margin: 0;
        }
        
        .BigBox { 
            list-style: none;
            padding: 0;
            margin: 0;
        }

