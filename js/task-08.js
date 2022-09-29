//Напиши скрипт управления формой логина.
//Обработка отправки формы form.login-form должна быть по событию 
//submit.
//При отправке формы страница не должна перезагружаться.
//Если в форме есть незаполненные поля, выводи alert с 
//предупреждением о том, что все поля должны быть заполнены.
//Если пользователь заполнил все поля и отправил форму, собери 
//значения полей в обьект, где имя поля будет именем свойства, 
//а значение поля - значением свойства.Для доступа к элементам 
//формы используй свойство elements.
//Выведи обьект с введенными данными в консоль и очисти значения 
//полей формы методом reset.

const form = document.querySelector(".login-form");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {elements: { email, password }} = event.currentTarget;
    console.log('email:', email.value);
    console.log('password:', password.value);

    if (email.value === '' || password.value === '') {
        alert('Bсе поля должны быть заполнены');
    }



  /*const inputEmailEl = document.querySelector('input[type="email"]');
    const inputPasswordEl = document.querySelector('input[type="password"]');
    console.log(inputEmailEl.value);
    console.log(inputPasswordEl.value);*/

});
/*
const inputEmailEl = document.querySelector('input[type="email"]');
const inputPasswordEl = document.querySelector('input[type="password"]');
const buttonEl = document.querySelector('button[type="submit"]');
//console.log(inputEmailEl);
//console.log(inputPasswordEl);
//console.log(buttonEl);
//buttonEl.addEventListener('click', onSubmitFill);
console.log(inputEmailEl.currentTarget.value)
*/

/*function onSubmitFill() {
    if (inputEmailEl.currentTarget.value === '' ||
        inputPasswordEl.currentTarget.value === '')
    {
        alert('Bсе поля должны быть заполнены');
    }
}*/
