let evalDone=false;
let btns =document.querySelectorAll("button");
let inp = document.querySelector("input");

for (btn of btns){
    btn.addEventListener("click",(evt)=>{
        let value =evt.target.innerText;
        let  lastCharIsOperator = inp.value.match(/[-+*/%]$/);
        if(evalDone){
            inp.value="";
            evalDone=false;
        }
        else if(value == "="){
            inp.value =eval(inp.value);
            evalDone=true;
        }
        else if(value == "AC"){
           inp.value="";
        }
        else if(value == "DE"){
            inp.value=inp.value.slice(0, -1);
         }
         else if(value.match(/[-+*/%]/) && lastCharIsOperator){
            inp.value = inp.value.slice(0, -1) + value;
         }
        else {
            console.log(evt.target);
            inp.value +=value;
        }
    })
}