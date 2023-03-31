let count=0
let display = document.getElementById("display")
let num= document.getElementById('countel')
let prev = document.getElementById("sas")
let newPlayer =true;
function increment(){
    if(newPlayer){
        newPlayer=false;
        count=parseInt(num.value)
    }
    count+=20
    display.innerHTML=`${count}`
}
function decrement(){
    count = count-20
    display.innerText=count
}
function save(){
    newPlayer=true;
    prev.textContent+=count + " - "
    count = 0
    num.textContent=count
}