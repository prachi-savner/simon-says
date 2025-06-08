let gameSeq=[];
let userSeq=[];
let high=0;
let btns=["yellow","red","green","purple"];

let start=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game started");
        start=true;
        levelUp();
    }
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}
function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randColor=btns[randidx];
    let randbtn=document.querySelector(`.${randColor}`);
    // console.log(randColor);
    // console.log(randidx);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function check(idx){
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
            userSeq=[];
        }
    }else{
        if(level>high){
            high=level;
        }
        h2.innerHTML=`game over! your score is <b>${level}</b><br>Press any key to restart<br>Highest Score : ${high}`;
        reset();
        document.querySelector("body").style.backgroundColor="red";

        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="white";
        },250);

    }
}
function btnPress(){
   let btn=this;
   userFlash(btn);
   let usercolor=btn.getAttribute("id");
   userSeq.push(usercolor);
   check(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}