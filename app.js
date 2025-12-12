//--------------------Event Bubbling---------------------------------



let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.log("Div was clicked");
});

ul.addEventListener("click",function(event){
    event.stopPropagation(); // event bubbling ko rhokne ke liye use karte hai
    console.log("ul was clicked");
});

for(li of lis){
    li.addEventListener('click',function(event){
        event.stopPropagation();
        console.log("li was clicked");
    });
};

// nested element ke evenet listner ko trigger karte hai taab oo uske parent and uske upppar bale ko trigger kartaa hai isko event bubbling khate hai

// isko rokne ke liye yaak method hai 
//event.stopPropagation()