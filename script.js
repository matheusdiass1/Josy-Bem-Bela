/**
 * =====================================================
 * Josy Bem&Bela - CLÍNICA DE ESTÉTICA
 * Script Principal
 * =====================================================
 *
 * Este arquivo contém todas as funcionalidades JavaScript
 * da landing page, incluindo:
 * - Menu mobile (hambúrguer)
 * - Scroll suave para âncoras
 * ÍNDICE:
 * 1. Menu Mobile
 * 2. Scroll Suave
 *
 * =====================================================
 */

// Aguarda o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', function () {

    /* =====================================================
       1. MENU MOBILE (HAMBÚRGUER)
       =====================================================
       Controla a abertura e fechamento do menu em dispositivos móveis.
       O menu é ativado ao clicar no botão hambúrguer.
    */

    // Seleciona os elementos do menu
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    // Verifica se os elementos existem antes de adicionar eventos
    if (navToggle && navMenu) {

        // Toggle do menu ao clicar no hambúrguer
        navToggle.addEventListener('click', function () {
            // Adiciona/remove a classe 'active' em ambos os elementos
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fecha o menu ao clicar em qualquer link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Fecha o menu ao clicar fora dele
        document.addEventListener('click', function (e) {
            // Verifica se o clique foi fora do menu e do botão
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    /* =====================================================
       2. SCROLL SUAVE
       =====================================================
       Implementa rolagem suave ao clicar em links de âncora.
       Leva em conta a altura do header fixo.
    */

    // Seleciona todos os links que começam com #
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Ignora links que são apenas "#"
            if (href !== '#') {
                e.preventDefault();

                // Encontra o elemento alvo
                const target = document.querySelector(href);

                if (target) {
                    // Calcula a altura do header para compensar
                    const headerHeight = document.querySelector('.header').offsetHeight;

                    // Calcula a posição final (posição do elemento - altura do header)
                    const targetPosition = target.offsetTop - headerHeight;

                    // Executa o scroll suave
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


});