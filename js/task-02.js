const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const fnLi = (iel) => {
  const masEl = document.createElement("li");
  masEl.classList.add("item");
  masEl.textContent = iel;
  return masEl;
};

const arrEls = ingredients.map((el, index) => {
  return fnLi(el);
});

ingredientsEl.append(...arrEls);

// ingredients.forEach((el) => {
//   const liEl = document.createElement("li");
//   liEl.textContent = el;
//   liEl.classList.add("item");
//   // ingredientsEl.append(liEl);
//   // console.log(liEl);
//   console.log(liEl);
// });

// const masEl = {};

// console.log(obj);

// ingredients.forEach((el) => {
//   masEl.push(el);
// });

// const oneEl = document.createElement("li");
// oneEl.textContent = masEl[0];
// oneEl.classList.add("item");

// const tooEl = document.createElement("li");
// tooEl.textContent = masEl[1];
// tooEl.classList.add("item");

// const thriEl = document.createElement("li");
// thriEl.textContent = masEl[2];
// thriEl.classList.add("item");

// const forEl = document.createElement("li");
// forEl.textContent = masEl[3];
// forEl.classList.add("item");

// const fifeEl = document.createElement("li");
// fifeEl.textContent = masEl[4];
// fifeEl.classList.add("item");

// const sixEl = document.createElement("li");
// sixEl.textContent = masEl[5];
// sixEl.classList.add("item");
