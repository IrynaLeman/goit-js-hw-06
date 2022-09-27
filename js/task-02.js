const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//Напиши скрипт, который для каждого элемента массива ingredients:

//Создаст отдельный элемент < li >.Обзательно используй метод
//document.createElement().
//Добавит название ингредиента как его текстовое содержимое.
//Добавит элементу класс item.
//После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingridient = ingredients[0];
const ingredientsContainerEl = document.querySelector('#ingredients')
//console.log(ingredientsContainerEl);
const ingridientsList = ingredients.map(ingridient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingridient;
  return itemEl;
})

ingredientsContainerEl.append(...ingridientsList);
//console.log(ingredientsContainerEl);
//console.log(ingridientsList);
