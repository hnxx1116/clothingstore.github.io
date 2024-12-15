document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.querySelector(".burger-menu");
    const headerMenu = document.querySelector("header .header-menu");
  
    burgerMenu.addEventListener("click", () => {
      headerMenu.classList.toggle("active");
      burgerMenu.classList.toggle("active");
    });
  });