let evalDone=false;
let btns =document.querySelectorAll("button");
let inp = document.querySelector("input");
for (btn of btns){
    btn.addEventListener("click",(evt)=>{
        if(evalDone){
            inp.value="";
            evalDone=false;
        }
        else if(evt.target.innerText == "="){
            inp.value =eval(inp.value);
            evalDone=true;
        }
        else if(evt.target.innerText == "AC"){
           inp.value="";
        }
        else if(evt.target.innerText == "DE"){
            inp.value=inp.value.slice(0, -1);
         }
        else {
            console.log(evt.target);
            inp.value +=evt.target.innerText;
        }
    })
}