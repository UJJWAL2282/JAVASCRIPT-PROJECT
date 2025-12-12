let button=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

button.addEventListener("click",function(){
    let li=document.createElement("li");
    li.innerText=inp.value;
    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");

    ul.appendChild(li);
    li.appendChild(delbtn);
    inp.value="";
});

ul.addEventListener("click", function(event){  // yaha pe bubbling ho raha hai jaise div ke andar kuch likha thaa and hum anadar bale element pe click kaar rahe the taab div vhi target ho raha thaa same ul pe laagne pe li pe click karne pe vhi event hogaa
    console.log(event.target.nodeName); // yaa btaata hai kiske karn event ho raha hai

    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
    
});


//yaa jo niche me code hai usse old bala delete ho jaa rahe lekin jo new add ho raha oo nahi ho raha hai 

// let delbtns=document.querySelectorAll(".delete");

// for(delbtn of delbtns){
//     delbtn.addEventListener('click',function(){
//         let par=this.parentElement; // isse parent milta hai
//         par.remove();
//         console.log("element deleted");
//     });
// };


//-----------------Event Delegation-------------------------------

//bubbling ke phenomena kaa use kaar ke hum event delegration karte hai hum child pe aplly karenge and oo parent pe apply ho jayegaa
