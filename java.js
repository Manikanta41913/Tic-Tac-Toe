let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let turn0 = true; // PlayerX or PlayerO
let newGameBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let winPatterns = [[0, 1, 2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerHTML = "X";
            turn0 = false;
        }   else{
            box.innerHTML = "O";
            turn0 = true;
        }
        count++;
        if(count === 9){
            msg.innerText = "It's a Draw!";
            msgContainer.classList.remove("hide");
            count = 0;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerHTML = "";
    });
}

const showWinner = (winner) => {
    msg.innerText = "Congratulations! Winner is " + winner ;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    winPatterns.forEach((pattern) => {
        if (boxes[pattern[0]].innerHTML === boxes[pattern[1]].innerHTML && boxes[pattern[1]].innerHTML === boxes[pattern[2]].innerHTML && boxes[pattern[0]].innerHTML !== "") {
            alert(`Player ${boxes[pattern[0]].innerHTML} wins!`);
            showWinner(boxes[pattern[0]].innerHTML);
        }
    });
};

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    count = 0;
    msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
