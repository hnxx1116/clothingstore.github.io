// Масив товарів
const products = [
  {
    image: 'images/products/1.jpg',
    title: 'Rounded Red Hat',
    price: '800 грн.',
    colors: ['black', 'red'],
    isSolded: false,
  },
  {
    image: 'images/products/2.jpg',
    title: 'Green Summer Dress',
    price: '1200 грн.',
    colors: ['green', 'yellow'],
    isSolded: true,
  },
  {
    image: 'images/products/3.jpg',
    title: 'Blue Casual Shirt',
    price: '950 грн.',
    colors: ['blue'],
    isSolded: false,
  },
  {
    image: 'images/products/4.jpg',
    title: 'Elegant Violet Skirt',
    price: '1100 грн.',
    colors: ['violet'],
    isSolded: false,
  },
  {
    image: 'images/products/5.jpg',
    title: 'Classic Black Shoes',
    price: '1500 грн.',
    colors: ['black'],
    isSolded: false,
  },
  {
    image: 'images/products/6.jpg',
    title: 'Yellow Handbag',
    price: '1300 грн.',
    colors: ['yellow'],
    isSolded: false,
  },
  {
    image: 'images/products/7.jpg',
    title: 'Sporty Red Sneakers',
    price: '1800 грн.',
    colors: ['red', 'black'],
    isSolded: false,
  },
  {
    image: 'images/products/8.jpg',
    title: 'Stylish Green Cap',
    price: '700 грн.',
    colors: ['green', 'blue'],
    isSolded: false,
  },
  {
    image: 'images/products/9.jpg',
    title: 'Warm Winter Coat',
    price: '2500 грн.',
    colors: ['black', 'violet'],
    isSolded: true,
  },
];

// Функція для створення картки товару
const createProductCard = (product) => {
  const colorsHtml = product.colors
    .map((color) => `<div class="catalog-grid-item-colors-item item-${color}"></div>`)
    .join('');

  const soldClass = product.isSolded ? 'solded' : '';

  return `
    <div class="catalog-grid-item ${soldClass}">
      <div class="catalog-grid-item-img">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="catalog-grid-item-title ${soldClass}">
        ${product.title} ${product.isSolded ? '(Продано)' : ''}
      </div>
      <div class="catalog-grid-item-price">
        ${product.price}
      </div>
      <div class="catalog-grid-item-colors d-flex">
        ${colorsHtml}
      </div>
    </div>
  `;
};

// Функція для рендерингу каталогу
const renderCatalog = (filter = 'all') => {
  const catalogList = document.getElementById('catalogList');
  if (!catalogList) return;

  // Фільтрація товарів
  const filteredProducts =
    filter === 'solded'
      ? products.filter((product) => product.isSolded)
      : filter === 'available'
      ? products.filter((product) => !product.isSolded)
      : products;

  // Рендеринг
  catalogList.innerHTML = filteredProducts.map(createProductCard).join('');
};

// Функція для додавання подій сортування
const setupFilters = () => {
  const filterSolded = document.getElementById('filterSolded');
  const filterAvailable = document.getElementById('filterAvailable');
  const filterAll = document.getElementById('filterAll');

  if (filterSolded) {
    filterSolded.addEventListener('click', () => renderCatalog('solded'));
  }

  if (filterAvailable) {
    filterAvailable.addEventListener('click', () => renderCatalog('available'));
  }

  if (filterAll) {
    filterAll.addEventListener('click', () => renderCatalog('all'));
  }
};

// Виклик функцій після завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  setupFilters();
});