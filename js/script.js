// -------

const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");
const menuClose = document.querySelector(".menu__close");

const menuShadow = document.querySelector(".menu--open");

// menuBtn.addEventListener("click", () => {
//   menuList.classList.add("menu__list--open");
// });

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("menu__list--open");
  menuShadow.classList.toggle("menu--open");
});

menuList.addEventListener("click", () => {
  menuList.classList.remove("menu__list--open");
  menuShadow.classList.remove("menu--open");
});

// ----
// универсальный;!
