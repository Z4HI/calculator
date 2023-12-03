
const buttons = document.querySelectorAll('button')
const output = document.querySelector('.output')
const current = document.querySelector('.current')
const previous = document.querySelector('.previous')


buttons.forEach((button)=>

    button.addEventListener('click',() =>{

        if(button.textContent === 'clear'){
            clearDisplay();
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

function calculate(){

    output.innerHTML = eval(current.innerHTML)
    output.value = ''

}

function appendNumber(value){

    current.innerHTML += value;
}