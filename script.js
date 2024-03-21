let currentIndex = 0;
const images = ['imagens/Capcut.jpg', 'imagens/bolodepote2.jpg', 'imagens/character.png'];

function showImage(index) {
    const image = document.getElementById('carouselImage');
    image.src = images[index];
    currentIndex = index;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Exibindo a primeira imagem ao carregar a página
showImage(currentIndex);
