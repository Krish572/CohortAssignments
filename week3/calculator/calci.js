const inputArea = document.querySelector(".input-area");
const spanElement1 = document.createElement('span')
const spanElement2 = document.createElement('span');

let displayValue = "";


const calculate = (op) => {
    if(op === 'c'){
        displayValue = "";
    }else if(op === 'back'){
        displayValue = displayValue.slice(0, -1);
    }else if(op === '='){
        try{
            displayValue = eval(displayValue).toString();
        } catch{
            displayValue = "Error"
        }
    }else{
        displayValue += op;
    }
    render();
}



const render = () => {
    spanElement1.innerText = displayValue || 0;
    let temp = "";
    try{
        temp = eval(displayValue).toString();
    }catch{

    }
    spanElement2.innerText = temp;
    if(displayValue === temp){
        spanElement2.innerText = "";
    }
    inputArea.appendChild(spanElement1);
    inputArea.appendChild(spanElement2);
}

document.addEventListener("keydown", e => {
    const key = e.key;
    if(/[0-9]/.test(key)){
        calculate(key);
    }else if(['+', '-', '*', '/', '%', '.'].includes(key)){
        calculate(key);
    }else if(key === "Enter"){
        calculate('=');
    }else if(key === "Backspace"){
        calculate('back');
    }else if(key === "Escape"){
        calculate('c');
    }
}) 