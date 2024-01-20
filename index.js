let evalDone=false;
let btns =document.querySelectorAll("button");
let para =document.querySelector("p");

for (btn of btns){
    btn.addEventListener("click",(evt)=>{
        let value =evt.target.innerText;
        let lastCharIsOperator = para.innerText.match(/[-+*/%]$/);
        if(evalDone){
            para.innerText="";
            evalDone=false;
        }
        else if(value == "="){
            para.innerText =eval(para.innerText);
            evalDone=true;
        }
        else if(value == "AC"){
           para.innerText="";
        }
        else if(value == "DE"){
            para.innerText=para.innerText.slice(0,-1);
         }
        else if(value.match(/[-+*/%]/) && lastCharIsOperator){
            para.innerText = para.innerText.slice(0, -1) + value;
         }
        else {
            console.log(evt.target);
            para.innerText += value;
        }
    })
}