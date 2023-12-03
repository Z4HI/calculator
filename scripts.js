
const buttons = document.querySelectorAll('button')
const output = document.querySelector('.output')
const current = document.querySelector('.current')
const previous = document.querySelector('.previous')


buttons.forEach((button)=>

    button.addEventListener('click',() =>{
        const invalidsigns = ['*','/','%'];
        const firstChar = current.innerHTML.charAt(0);

        if(invalidsigns.includes(firstChar)){
            clearDisplay();
        }    
        else if(button.textContent === 'clear'){
            clearDisplay();
        }
        else if(button.textContent === 'DEL'){
            del();
        }
        else if(button.textContent === '='){
            calculate();
        }
        else{
            appendNumber(button.textContent)
        }
    })
)

function clearDisplay(){
    current.innerHTML = '';
    output.innerHTML = '';
}
function del(){

    current.innerHTML = current.innerHTML.slice(0,-1);

}
function calculate(){
    const answer = eval(current.innerHTML)
    
    if(answer%1===0){
        output.innerHTML = answer;
    }else{
    output.innerHTML =  (parseFloat(answer)).toFixed(2);
}
}
function appendNumber(value){
    
    const operators = ['+','-','*','/'];
    const lastChar = current.innerHTML.slice(-1);

    if((operators.includes(value) && operators.includes(lastChar))){

        return;
    }
    
    else{
       current.innerHTML+=value;
    }
}

