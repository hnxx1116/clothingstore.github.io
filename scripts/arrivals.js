document.addEventListener("DOMContentLoaded", () => {
    
    const arrivals = [
        {
          photo: "images/arrivals/1.png",
          name: "Shiny Dress",
          manufacturer: "Prada",
          views: 1,
          price: 1800,
          rating: 4,
          almostSoldOut: true,
        },
        {
            photo: "images/arrivals/2.png",
          name: "Long Dress",
          manufacturer: "ZimaWear",
          views: 2.1,
          price: 4200,
          rating: 5,
          almostSoldOut: false,
        },
        {
            photo: "images/arrivals/3.png",
          name: "Full Sweater",
          manufacturer: "Denim Style",
          views: 2.2,
          price: 1500,
          rating: 3,
          almostSoldOut: false,
        },
        {
            photo: "images/arrivals/4.png",
          name: "White Dress",
          manufacturer: "SmartLook",
          views: 1.1,
          price: 1200,
          rating: 4,
          almostSoldOut: true,
        },
        {
            photo: "images/arrivals/5.png",
          name: "Colorful Dress",
          manufacturer: "ActiveStep",
          views: 1.8,
          price: 2900,
          rating: 5,
          almostSoldOut: false,
        },
        {
            photo: "images/arrivals/6.png",
          name: "White Shirt",
          manufacturer: "ElegantCo",
          views: 1.0,
          price: 5600,
          rating: 5,
          almostSoldOut: true,
        },
      ];

      const arrivalsGrid = document.querySelector(".arrivals-grid");

  arrivals.forEach((item) => {
    const gridItem = document.createElement("div");
    gridItem.classList.add("arrivals-grid-item", "radius");

    gridItem.innerHTML = `
      <div class="arrivals-grid-item-img">
        <img src="${item.photo}" alt="${item.name}">
      </div>
      <div class="arrivals-grid-item-row">
        <div class="arrivals-grid-item-row-l">
        <div>  
            <div class="arrivals-title">${item.name}</div>
            <div class="arrivals-producer">${item.manufacturer}</div>
        </div>
          <div class="review">(${item.views}k) переглядів</div>
          <div class="arrivals-price">${item.price} грн.</div>
        </div>
        <div class="arrivals-grid-item-row-r">
          <div class="rank">
            ${generateStars(item.rating)}
          </div>
          <div class="sold-text">
            ${item.almostSoldOut ? "Майже розпродано" : ""}
          </div>
        </div>
      </div>
    `;
    arrivalsGrid.appendChild(gridItem);
  });

  function generateStars(rating) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars += `<i class="fa-solid fa-star"></i>`;
      } else {
        stars += `<i class="fa-regular fa-star"></i>`;
      }
    }
    return stars;
  }

  });