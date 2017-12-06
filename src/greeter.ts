// Class Greeter -- contains constructor and method that returns our greeting message.
// This message is displayed as output in HTML

class Greeter{
    greetMsg:string;
    constructor(msg:string){
        this.greetMsg=msg;
    }
    greet(){
        return `Hello there! ${this.greetMsg}`;
    }
}

let greeting=new Greeter(`Welcome home :)`); //Create object of class Greeter
let output:string=greeting.greet(); //Call method that returns message to be displayed
document.getElementById("result").innerHTML=output;  //Displays output in HTML span element with id="result"
