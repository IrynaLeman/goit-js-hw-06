//Посчитает и выведет в консоль количество категорий в ul#categories,
//то есть элементов li.item.
//Для каждого элемента li.item в списке ul#categories, найдет и выведет
//в консоль текст заголовка элемента(тега < h2 >) и количество элементов
//в категории(всех вложенных в него < li >).
//В результате, в консоли будут выведены такие сообщения.

//Number of categories: 3

//Category: Animals
//Elements: 4

//Category: Products
//Elements: 3

//Category: Technologies
//Elements: 5

const categories = document.querySelectorAll('.item');
console.log('Number of categories:', categories.length);

const titleCategoryEl = document.querySelectorAll('h2');
//console.log(titleCategoryEl[0]);
//console.log(titleCategoryEl[1]);
//console.log(titleCategoryEl[2]);


const firstTitleCategoryEl = titleCategoryEl[0].textContent;
const secondTitleCategoryEl = titleCategoryEl[1].textContent;
const thirdTitleCategoryEl = titleCategoryEl[2].textContent;

console.log('Category:', firstTitleCategoryEl);

const firstCategoryListEl = titleCategoryEl[0].nextElementSibling;
const firstCategoryListItemsEl = firstCategoryListEl.children;
console.log('Elements:', firstCategoryListItemsEl.length);


console.log('Category:', secondTitleCategoryEl);

const secondCategoryListEl = titleCategoryEl[1].nextElementSibling;
const secondCategoryListItemsEl = secondCategoryListEl.children;
console.log('Elements:', secondCategoryListItemsEl.length);


console.log('Category:', thirdTitleCategoryEl);

const thirdCategoryListEl = titleCategoryEl[2].nextElementSibling;
const thirdCategoryListItemsEl = thirdCategoryListEl.children;
console.log('Elements:', thirdCategoryListItemsEl.length);
