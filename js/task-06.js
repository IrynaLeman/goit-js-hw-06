//Напиши скрипт, который при потере фокуса на инпуте (событие blur),
//проверяет его содержимое на правильное количество введённых символов.

//  <input
//    type="text"
//    id="validation-input"
//    data-length="6"
//    placeholder="Please enter 6 symbols"
//  />

//Сколько символов должно быть в инпуте, указывается в его атрибуте
//data - length.
//Если введено подходя щее количество символов, то border инпута
//становится зелёным, если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid,
//которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector('#validation-input');

const lengthValue = Number(inputEl.dataset.length);
//console.log(lengthValue);

inputEl.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
    if (event.currentTarget.value.length === lengthValue) {
        inputEl.classList.add('valid');
    }
    else {
        inputEl.classList.add('invalid');
    }
}