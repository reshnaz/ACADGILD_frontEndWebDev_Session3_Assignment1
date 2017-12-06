var Greeter = /** @class */ (function () {
    function Greeter(msg) {
        this.greetMsg = msg;
    }
    Greeter.prototype.greet = function () {
        return "Hello there! " + this.greetMsg;
    };
    return Greeter;
}());
var greeting = new Greeter("Welcome home :)");
var output = greeting.greet();
document.getElementById("result").innerHTML = output;
