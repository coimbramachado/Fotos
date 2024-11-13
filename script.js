// Selecionando o botão de menu e a navegação
const menuToggleButton = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');
const menuItems = document.querySelectorAll('nav ul li a');

// Evento para alternar o menu ao clicar no botão
menuToggleButton.addEventListener('click', function(event) {
    // Alterna a classe 'active' no nav
    nav.classList.toggle('active');
    
    // Alterna o ícone entre ☰ (menu) e ✖ (fechar)
    if (nav.classList.contains('active')) {
        menuToggleButton.textContent = '✖'; // X para fechar
    } else {
        menuToggleButton.textContent = '☰'; // Ícone de hambúrguer
    }
    
    // Impede que o clique no botão feche o menu imediatamente
    event.stopPropagation();
});

// Evento para fechar o menu se o clique for fora do menu ou botão de menu
document.addEventListener('click', function(event) {
    // Verifica se o menu está aberto e se o clique não foi no menu nem no botão
    if (nav.classList.contains('active') && !nav.contains(event.target) && event.target !== menuToggleButton) {
        nav.classList.remove('active'); // Fecha o menu
        menuToggleButton.textContent = '☰'; // Volta ao ícone de hambúrguer
    }
});

// Fecha o menu quando um item de navegação é clicado
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Fecha o menu ao clicar em qualquer item
        nav.classList.remove('active');
        menuToggleButton.textContent = '☰'; // Volta ao ícone de hambúrguer
    });
});

// Função que altera a cor da navbar ao rolar para fora da home
function changeNavbarColorOnScroll() {
    const homeSection = document.querySelector('.logo'); // Supondo que a seção 'Home' tenha a classe 'banner'
    const homeSectionHeight = homeSection.offsetHeight; // Altura da seção 'Home'

    if (window.scrollY > homeSectionHeight) {
        // Se o scroll estiver abaixo da altura da seção Home, adiciona a classe
        nav.classList.add('scrolled');
    } else {
        // Se estiver na área do 'Home', remove a classe
        nav.classList.remove('scrolled');
    }
}

// Evento de scroll para chamar a função
window.addEventListener('scroll', changeNavbarColorOnScroll);
