// Obtém o botão de troca de tema e o corpo do documento
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se há um tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    // Se houver um tema salvo, aplica-o ao corpo do documento
    body.classList.add(savedTheme);
    // Se o tema salvo for escuro, atualiza o ícone do botão
    if (savedTheme === 'dark-mode') {
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
}

// Adiciona um ouvinte de evento de clique ao botão de troca de tema
themeToggle.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no corpo do documento
    body.classList.toggle('dark-mode');

    // Verifica se o modo escuro está ativado
    if (body.classList.contains('dark-mode')) {
        // Se estiver, salva o tema no localStorage e muda o ícone para o sol
        localStorage.setItem('theme', 'dark-mode');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        // Se não, remove o tema do localStorage e muda o ícone para a lua
        localStorage.removeItem('theme');
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

// Obtém o menu hambúrguer e a lista de navegação
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');

// Adiciona um ouvinte de evento de clique ao menu hambúrguer
hamburger.addEventListener('click', () => {
    // Alterna a classe 'nav-active' na lista de navegação
    // Isso irá mostrar ou esconder o menu de navegação em telas menores
    navUl.classList.toggle('nav-active');
});