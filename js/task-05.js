//Напиши скрипт который, при наборе текста в инпуте input#name-input
//(событие input), подставляет его текущее значение в
//span#name - output.Если инпут пустой, в спане должна
//отображаться строка "Anonymous".

//<input type="text" id="name-input" placeholder="Please enter your name" />
//<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);
function onInputChange(event) {
    //console.log(event.currentTarget.value);
    if (event.currentTarget.value === '') {
        nameEl.textContent = 'Anonymous';
    }
    else {
        nameEl.textContent = event.currentTarget.value;
    }    
}