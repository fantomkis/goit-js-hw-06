// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

const categoriesEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesEl.children.length}`);

const itemAl = document.querySelectorAll("#categories .item");
itemAl.forEach((el) => {
  const titel = el.querySelector("h2");
  const namberIs = el.querySelector("ul").children.length;
  console.log(`Category: ${titel.textContent}`);
  console.log(`Elements: ${namberIs}`);
});

// const titel = list.querySelectorAll("h2");
// console.log("Category:", titel[9].textContent);

// const lisEl = list.children;
// // console.log(lisEl[0].children);

// const nem = document.querySelectorAll(".item ul");
// const liel = nem[0].childNodes;
// console.log(liel.length);
