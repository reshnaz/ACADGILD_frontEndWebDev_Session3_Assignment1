// Class Greeter -- contains constructor and method that returns our greeting message.
// This message is displayed as output in HTML
var Greeter = /** @class */ (function () {
    function Greeter(msg) {
        this.greetMsg = msg;
    }
    Greeter.prototype.greet = function () {
        return "Hello there! " + this.greetMsg;
    };
    return Greeter;
}());
var greeting = new Greeter("Welcome home :)"); //Create object of class Greeter
var output = greeting.greet(); //Call method that returns message to be displayed
document.getElementById("result").innerHTML = output; //Displays output in HTML span element with id="result"
