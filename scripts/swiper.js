document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 3, // Скільки слайдів показувати одночасно
      spaceBetween: 30, // Відстань між слайдами
      loop: true, // Циклічне прокручування
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    const swiper2 = new Swiper('.swiper2', {
        slidesPerView: 1.4, // Скільки слайдів показувати одночасно
        spaceBetween: 30, // Відстань між слайдами
        loop: true, // Циклічне прокручування
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
  });