let boxes = document.querySelectorAll(".box");
let turn = 0; // 0 for X, 1 for O

let winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

boxes.forEach((box) => {
    box.addEventListener("click", function () {
        if (this.innerHTML === "") { // Prevent overwriting
            this.innerHTML = turn === 0 ? "X" : "O";
            console.log("Turn:", turn === 0 ? "X" : "O");
            win();
            turn = 1 - turn; 
        }
    });
});

function win(){
  
       for(let pattern of winPatterns){
        if(boxes[pattern[0]].innerHTML === boxes[pattern[1]].innerHTML && boxes[pattern[1]].innerHTML === boxes[pattern[2]].innerHTML && boxes[pattern[0]].innerHTML !== ""){
            alert(boxes[pattern[0]].innerHTML + " wins!");
            boxes.forEach((box) => {
                box.innerHTML = "";
            });
            break;
       }
    }
}