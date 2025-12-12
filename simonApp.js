let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};

function userFlash(btn){
    btn.classList.add("user");
    setTimeout(function(){
        btn.classList.remove("user");
    },250);


}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    //random btn choose means random color 
    let index=Math.floor(Math.random()*3);
    let randColor=btns[index];
    let randbtn=document.querySelector(`.${randColor}`);
    gameFlash(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
};


function checkAns(indx){
    console.log("curr level",level);
    
    if(userSeq[indx]===gameSeq[indx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over!Your score was <b>Score:${level}</b> <br> Press any key to start `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },500)
        reset();
    }
}


function btnpress(){
    
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
};

let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener('click',btnpress);
};


function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}



    