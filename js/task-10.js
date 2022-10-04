function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//Напиши скрипт создания и очистки коллекции элементов. Пользователь 
//вводит количество элементов в input и нажимает кнопку Создать, 
//после чего рендерится коллекция.При нажатии на кнопку Очистить, 
//коллекция элементов очищается.

//Создай функцию createBoxes(amount), которая принимает один параметр 
//- число.Функция создает столько < div >, сколько указано в amount и 
//добавляет их в div#boxes.

//Размеры самого первого <div> - 30px на 30px.
//Каждый элемент после первого, должен быть шире и выше предыдущего 
//на 10px.
//Все элементы должены иметь случайный цвет фона в формате HEX. 
//Используй готовую функцию getRandomHexColor для получения цвета.

//Создай функцию destroyBoxes(), которая очищает содержимое 
//div#boxes, тем самым удаляя все созданные элементы.

const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
let boxesEl = document.getElementById('boxes');
console.log(createEl);
console.log(destroyEl);
console.log(boxesEl);


createEl.addEventListener('click', getAmount);
destroyEl.addEventListener('click', destroyBoxes);
function getAmount() {
  let amount = document.querySelector('#controls input').value;
  console.log('input', amount);
  createBoxes(amount);
}
function createBoxes(amount) {
  const firstSize = 30;
  let fragment = document.createDocumentFragment();
  console.log(fragment);
  for (let i = 0; i < amount; i++) {
    let size = firstSize + i * 10;
    let div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()} `;
    fragment.append(div);
  }
  boxesEl.append(fragment);
}
function destroyBoxes() {
  boxesEl.innerHTML = '';
}
