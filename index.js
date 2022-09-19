// nested functions = Functions inside other functions.
//                                   Outer functions have access to inner functions.
//                                   Inner functions are "hidden" from outside.
//                                   used in closures (future video topic)
 
let userName = "Bro";
let userInbox = 0;

login();

function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log(`Welcome ${userName}`);
    }
    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`);
    }
}

//things to remember:
/* global variable is used. thats how each inner function can access the userName
and userInbox variable
You have to call a function in order to use it. Simply wrting out the function
will not invoke the function => call it
 */