let resetBtn= document.querySelector("#reset");
let newGameBtn= document.querySelector("#newGame");
let message= document.querySelector(".message");
let msg = document.querySelector("#msg");
let boxes= document.querySelectorAll(".box");

    
    let turn0= true;
    
    const winPattern = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]
    ];
    const enableBoxes = () => {
        for(let box of boxes) {
            box.disabled=false;
            box.innerText="";
        }
    }
    const resetGame = () => {
        turn0= true;
        enableBoxes();
        message.classList.add("hide");

    }
    boxes.forEach((box) => {
        box.addEventListener ("click", ()=> {
            
            if(turn0) {
                box.innerText = "O";
                turn0= false;
            }
            else {
                box.innerText= "X";
                turn0= true;
            }
            box.disabled= true;
            
            checkWinner();
        })
    }) 
    const disableBoxes = () => {
        for(let box of boxes) {
            box.disabled=true;

        }
    }
    const showWinner= (winner) => {
         msg.innerText= `Congratulation, Winner is ${winner}`;
         message.classList.remove("hide");
         disableBoxes();
    }
    const checkWinner = () => {
        for(pattern of winPattern) {
            let posV1 = boxes[pattern[0]].innerText;
            let posV2 = boxes[pattern[1]].innerText;
            let posV3 = boxes[pattern[2]].innerText;
            if(posV1!="" && posV2!="" && posV3!="") {
                if(posV1 === posV2 && posV2 === posV3) {
                    showWinner(posV1);
                }
            }
        }
    }

    newGame.addEventListener("click",resetGame);
    reset.addEventListener("click",resetGame);
  
