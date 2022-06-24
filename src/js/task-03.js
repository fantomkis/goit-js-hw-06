const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listsImg = document.querySelector("ul.gallery");

const imgs = images
  .map(({ url, alt }) => {
    return `<img src="${url}" alt="${alt}" width = "200"></img>`;
  })
  .join("");

listsImg.insertAdjacentHTML("afterbegin", imgs);

// const galrri = document.querySelector("gallery");

// const oneEl = document.createElement("img");
// oneEl.textContent = masEl[0];
// oneEl.classList.add("img");

// const tooEl = document.createElement("img");
// tooEl.textContent = masEl[1];
// tooEl.classList.add("item");

// const thriEl = document.createElement("img");
// thriEl.textContent = masEl[2];
// thriEl.classList.add("item");
