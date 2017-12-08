//Onclick Function ..
function Onclickk(){
    //Input value from HTML page  
    let name = (<HTMLInputElement>document.getElementById("Ename")).value;
//Class declaration
class greeter{
    //Instance member.
    Name: string;
    //Constructor.
    constructor(name){
       this.Name = name;
    }
    //Method
    greet(): string{
       let msg = `Hello How are you ${this.Name} ?`;
       return msg;
    }
}

let Greeter = new greeter(name);

// To display result in HTML view.
let el:HTMLElement = document.getElementById('Result');
el.innerHTML = Greeter.greet();

}
//End of Onclickk function.