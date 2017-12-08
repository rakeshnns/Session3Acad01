//Onclick Function ..
function Onclickk() {
    //Input value from HTML page  
    var name = document.getElementById("Ename").value;
    //Class declaration
    var greeter = /** @class */ (function () {
        //Constructor.
        function greeter(name) {
            this.Name = name;
        }
        //Method
        greeter.prototype.greet = function () {
            var msg = "Hello How are you " + this.Name + " ?";
            return msg;
        };
        return greeter;
    }());
    var Greeter = new greeter(name);
    // To display result in HTML view.
    var el = document.getElementById('Result');
    el.innerHTML = Greeter.greet();
}
//End of Onclickk function. 
