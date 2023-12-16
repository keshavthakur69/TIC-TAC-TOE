let btns = document.querySelectorAll(".btns");
let reset_btn = document.getElementsByClassName("reset-btn");
let new_game_btn=document.querySelector(".new-game-btn");
let msg_container=document.getElementsByClassName('massage-container');
let msg=document.querySelector('.massage')

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

btns.forEach((box) => {
  box.addEventListener("click", () => {

    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});


const resetGame=() => {
  turnO = true;
  enabledBoxs();
  console.log("hi");

};

const disabledBoxs=()=>{
  turnO = true;
  btns.forEach((val)=>{
    val.disabled=true;
  });
};

const enabledBoxs=()=>{
  turnO = true;
  msg.innerText = ""
  btns.forEach((val)=>{
    val.disabled=false;
    val.innerText="";
    console.log("hello");
  });
};

const showWinner=(winner)=>{
  msg.innerText = `Congratulations the winner is ${winner}`
  disabledBoxs();
  


};


const checkWinner = function () {
  for (let pattern of winPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   btns[pattern[0]].innerText,
    //   btns[pattern[1]].innerText,
    //   btns[pattern[2]].innerText
    //   );
      let pos1val=btns[pattern[0]].innerText;
      let pos2val=btns[pattern[1]].innerText;
      let pos3val=btns[pattern[2]].innerText;

      if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val==pos2val && pos2val==pos3val){
          // console.log("winner",pos1val);
          showWinner(pos1val);

        }
      }


  };
};

new_game_btn.addEventListener("click",()=>{
  // console.log("hi");
  enabledBoxs();
  // console.log("hdf");

});  

