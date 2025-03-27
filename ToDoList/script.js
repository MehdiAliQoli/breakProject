let inputbox = document.getElementById("input");
let addButton = document.getElementById("Adder");
let deletebtn = document.getElementById("delete");
addEventListener("keydown", function (e) {
if (e.key === "Enter") {
    let newli = document.createElement("li");
newli.innerHTML = inputbox.value;
if(inputbox.value === ""){
    alert("Please enter a task");
}
else{
list = document.getElementById("list");
list.prepend(newli);
inputbox.value = "";}
}});
Adder.addEventListener("click", function () {
let newli = document.createElement("li");
newli.innerHTML = inputbox.value;
if(inputbox.value === ""){
    alert("Please enter a task");
}
else{
    list = document.getElementById("list");
    list.prepend(newli);
    inputbox.value = "";
}

});
deletebtn.addEventListener("click" , ()=>{
    while (list.children.length > 1) { // Ensure the first child remains
        list.removeChild(list.firstChild); // Remove the last child
    }
})


