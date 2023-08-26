// Aguarda o evento de carregamento do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada!"); // Exibe uma mensagem de log indicando que a página foi carregada

    // Obtém todas as seções e adiciona eventos de mouseover e mouseout
    sections.forEach((section) => {
        section.addEventListener("mouseenter", () => {
            section.classList.add("animate"); // Adiciona a classe "animate" ao entrar o mouse na seção
        });

        section.addEventListener("mouseleave", () => {
            section.classList.remove("animate"); // Remove a classe "animate" ao sair o mouse da seção
        });
    });

    // Adiciona evento de clique para o título principal
    mainTitle.addEventListener("click", () => {
        alert("Você clicou no título principal!"); // Exibe um alerta ao clicar no título principal
    });


    // Adiciona evento de clique para o botão de voltar ao topo
    backButton.addEventListener("click", () => {
        scrollToTop(); // Chama a função para rolar suavemente até o topo da página
    });

    // Adiciona evento de clique para o botão de compartilhamento
    shareButton.addEventListener("click", () => {
        shareOnSocialMedia(); // Chama a função para compartilhar nas redes sociais
    });

    // Adiciona evento de rolagem para atualizar o conteúdo dinâmico
    window.addEventListener("scroll", () => {
        updateDynamicContent(); // Chama a função para atualizar o conteúdo dinâmico durante a rolagem
    });

    // Função para rolagem suave
    function scrollToSection(section) {
        const targetPosition = section.offsetTop; // Obtém a posição vertical da seção alvo
        smoothScrollTo(targetPosition); // Chama a função para rolar suavemente até a posição alvo
    }

    // Função para rolar suavemente de volta ao topo
    function scrollToTop() {
        smoothScrollTo(0); // Chama a função para rolar suavemente até o topo da página
    }

    // Função para compartilhar nas redes sociais
    function shareOnSocialMedia() {
        alert("Compartilhando nas redes sociais!"); // Exibe um alerta ao clicar no botão de compartilhamento
    }

    // Função para atualizar o conteúdo dinâmico ao rolar
    function updateDynamicContent() {
        const scrollPosition = window.scrollY; // Obtém a posição de rolagem vertical atual
        const contentPosition = dynamicContent.offsetTop; // Obtém a posição vertical do conteúdo dinâmico

        if (scrollPosition > contentPosition - 300) {
            dynamicContent.innerHTML = "Este é o conteúdo dinâmico carregado!"; // Atualiza o conteúdo quando a posição de rolagem atinge uma certa distância da posição do conteúdo
        }
    }

    // Função para rolagem suave genérica
    function smoothScrollTo(targetPosition) {
        const startPosition = window.pageYOffset; // Obtém a posição de rolagem atual
        const distance = targetPosition - startPosition; // Calcula a distância a percorrer
        const duration = 1000; // Duração da animação em milissegundos
        let startTimestamp = null; // Variável para registrar o início da animação

        function scrollAnimation(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp; // Registra o início da animação
            const progress = timestamp - startTimestamp; // Calcula o progresso da animação
            const easeInOutQuad = progress / duration < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress; // Calcula a curva de aceleração/desaceleração
            window.scrollTo(0, startPosition + distance * easeInOutQuad); // Atualiza a posição de rolagem
            
            if (progress < duration) {
                requestAnimationFrame(scrollAnimation); // Continua a animação até a duração ser atingida
            }
        }

        requestAnimationFrame(scrollAnimation); // Inicia a animação de rolagem
    }
});

// Aguarda o evento de carregamento do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada!"); // Exibe uma mensagem de log indicando que a página foi carregada

    // Adiciona a classe de animação ao entrar
    sections.forEach((section) => {
        section.classList.add("enter-animation"); // Adiciona a classe "enter-animation" a cada seção
    });

});

// Aguarda o evento de carregamento do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.querySelector(".back-to-top"); // Seleciona o botão "back-to-top"

    // Adiciona um evento de clique ao botão "back-to-top"
    backButton.addEventListener("click", () => {
        // Rola suavemente de volta ao topo da página
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Mostra ou oculta o botão com base na posição de rolagem
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backButton.style.display = "block"; // Mostra o botão quando a posição de rolagem é maior que 300
        } else {
            backButton.style.display = "none"; // Oculta o botão quando a posição de rolagem é menor ou igual a 300
        }
    });

});


// Seleciona todos os links de âncora dentro da seção de navegação
const navLinks = document.querySelectorAll('.quick-nav a');

// Para cada link de âncora, adiciona um evento de clique para rolar suavemente para a seção correspondente
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault(); // Impede o comportamento padrão do link

        const targetId = link.getAttribute('href'); // Obtém o ID da seção alvo
        const targetSection = document.querySelector(targetId); // Seleciona a seção alvo

        if (targetSection) {
            // Calcula a posição da seção alvo em relação ao topo da página
            const offset = targetSection.getBoundingClientRect().top + window.scrollY;

            // Usa a função scrollIntoView para rolar suavemente até a seção alvo
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    });
});


// Função para mostrar o aviso de cookies
function showCookieBanner() {
    const cookieBanner = document.getElementById('cookie-banner');
    cookieBanner.style.display = 'block';
}

// Função para ocultar o aviso de cookies
function hideCookieBanner() {
    const cookieBanner = document.getElementById('cookie-banner');
    cookieBanner.style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true'); // Armazena no localStorage que os cookies foram aceitos
}

// Verifica se os cookies já foram aceitos anteriormente
const cookiesAccepted = localStorage.getItem('cookiesAccepted');

if (!cookiesAccepted) {
    showCookieBanner();
}

// Adiciona evento de clique para aceitar os cookies
const acceptCookiesButton = document.getElementById('accept-cookies');
acceptCookiesButton.addEventListener('click', hideCookieBanner);