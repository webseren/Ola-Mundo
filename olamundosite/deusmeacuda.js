let index = 0;
const slides = document.querySelectorAll('.slider img');

setInterval(() => {
    slides[index].style.display = 'none';
    index = (index + 1) % slides.length;
    slides[index].style.display = 'block';
}, 3000); // Troca de imagem a cada 3 segundos
