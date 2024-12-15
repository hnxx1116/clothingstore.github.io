document.addEventListener("DOMContentLoaded", () => {
    const subscribeButton = document.getElementById("subscribe");
    const modal = document.getElementById("subscribeModal");
    const closeBtn = modal.querySelector(".close-btn");
    const form = document.getElementById("subscribeForm");
    const thankYouMessage = modal.querySelector(".thank-you-message");
  
    // Відкрити модалку
    subscribeButton.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });
  
    // Закрити модалку
    const closeModal = () => {
      modal.classList.add("hidden");
      form.reset();
      form.classList.remove("hidden");
      thankYouMessage.classList.add("hidden");
    };
  
    closeBtn.addEventListener("click", closeModal);
  
    // Закрити модалку при кліку поза контентом
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  
    // Відправка форми
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.classList.add("hidden");
      thankYouMessage.classList.remove("hidden");
  
      // Автоматичне закриття модалки через 3 секунди
      setTimeout(() => {
        closeModal();
      }, 3000); // 3000 мс = 3 секунди
    });
  });