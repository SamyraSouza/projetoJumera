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
let scale = 1; // Começamos do segundo item (índice 1) já grande
const total = items.length; // Total de itens no carrossel

function autoScroll() {
  // Atualizando a posição do carrossel
  carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

  // Normaliza o item anterior ao próximo item (retorna ao tamanho original)
  if (scale !== 1) {
    items[scale - 1].style.transform = 'scale(1.0)';
  }

  // Aplica o efeito de escala no item atual (item central)
  if (scale < total) {
    items[scale].style.transform = 'scale(1.3)';
  }

  // Aplica o efeito de escala no próximo item (garante que ele seja do tamanho normal)
  if (scale + 1 < total) {
    items[scale + 1].style.transform = 'scale(1.0)';
  }

  // Quando atingir o último item (13), ele ficará grande antes de voltar para o item 1
  if (scale === total - 1) { // Se for o último item (13)
    items[scale].style.transform = 'scale(1.3)'; // Aplica a escala no 13
    currentIndex = 0; // Reseta a posição do carrossel para o primeiro item (0)
    scale = 1; // Reseta para o segundo item
    items[scale].style.transform = 'scale(1.3)'; // Aplica o tamanho maior no segundo item
  } else {
    scale++; // Vai para o próximo item
    currentIndex++; // Move o carrossel
  }

  console.log(scale); // Para depuração
}

// Configura o intervalo para o movimento automático
setInterval(autoScroll, 2000);




