const carouselContainer = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
let isMouseDown = false;
let startX;
let scrollLeft;

const totalItems = items.length;
const itemWidth = items[0].offsetWidth + 20;


function duplicateItems() {
  const firstItems = document.querySelectorAll('.carousel-item');
  firstItems.forEach(item => {
    const clone = item.cloneNode(true);
    carouselContainer.appendChild(clone);
  });
}

duplicateItems();
let currentIndex = 0;
let scale = 1;
const total = items.length;

function autoScroll() {

  carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

  if (scale !== 1) {
    items[scale - 1].style.transform = 'scale(1.0)';
  }

  if (scale < total) {
    items[scale].style.transform = 'scale(1.3)';
  }

  if (scale + 1 < total) {
    items[scale + 1].style.transform = 'scale(1.0)';
  }

  if (scale === total - 1) {
    items[scale].style.transform = 'scale(1.3)';
    currentIndex = 0;
    scale = 1;
    items[scale].style.transform = 'scale(1.3)';
  } else {
    scale++;
    currentIndex++; 
  }


}


setInterval(autoScroll, 2000);




