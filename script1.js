var string = '';
var buttons = document.querySelectorAll("button");

//console.log(buttons);

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        //console.log(e.target.innerHTML);
        if (e.target.innerHTML == "AC") {
            string = '';
            document.querySelector("input").value = string;
        }
        else if (e.target.innerHTML == "=") {
            //document.querySelector("input").value
            string = eval(string);
            document.querySelector("input").value = string;

        }
        else {
            string += e.target.innerHTML;
            document.querySelector("input").value = string;
            //console.log(string);
        }
    })
})