let inputbox = document.getElementById("input");
let addButton = document.getElementById("Adder");

let p2 = document.createElement("p");
Adder.addEventListener("click", function () {
       
    let task = inputbox.value;

  
    p2.innerHTML = task;
    let div = document.getElementById("Added");
    div.append(p2);


document.getElementById("1").innerHTML = task;
});


