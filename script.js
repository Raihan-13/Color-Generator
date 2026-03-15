let redBtn=document.querySelector("#red");
let blueBtn=document.querySelector("#blue");
let greenBtn=document.querySelector("#green");
let tealBtn=document.querySelector("#teal");
let randomlBtn=document.querySelector("#random");


redBtn.addEventListener("click",function(){
    document.body.style.background="red";
});
blueBtn.addEventListener("click",function(){
    document.body.style.background="blue";
});
greenBtn.addEventListener("click",function(){
    document.body.style.background="green";
});
tealBtn.addEventListener("click",function(){
    document.body.style.background="teal";
});
randomlBtn.addEventListener("click",function(){
    let red=Math.round(Math.random()*255);
    let green=Math.round(Math.random()*255);
    let blue=Math.round(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;

    document.body.style.background=color;
})