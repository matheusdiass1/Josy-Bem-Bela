# ✨ Josy Bem & Bela

Site institucional responsivo desenvolvido como meu primeiro projeto freelancer para Josy - Esteticista, publicado na Hostinger.

🔗 **Site no ar:** https://josybemebela.com/

![Preview do projeto](./assets/preview.png)


## Sobre o projeto

O objetivo foi criar uma presença online simples, rápida e fácil de usar para o cliente, que funcione bem tanto no celular quanto no computador. O site apresenta o negócio, os serviços oferecidos e os canais de contato, incluindo a localização em um mapa integrado.

## Funcionalidades

- Layout responsivo, adaptado para celular, tablet e desktop
- Seção de contato com mapa do Google Maps integrado e adaptável à tela
- Navegação simples entre as seções da página
- Código leve, sem dependências externas pesadas
- Publicação em hospedagem com domínio próprio

## Tecnologias utilizadas

- **HTML**: estrutura semântica das páginas
- **CSS**: estilização, variáveis CSS, Flexbox/Grid e media queries
- **JavaScript**: interações da página
- **Git e GitHub**: controle de versão
- **Hostinger**: hospedagem

## Estrutura do projeto

```
├── index.html
├── style.css
├── script.js
├── img/
└── README.md
```

## Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd nome-do-repositorio
   ```
3. Abra o `index.html` no navegador, ou use a extensão **Live Server** do VS Code para ver as alterações em tempo real.

## Aprendizados

Este projeto me ajudou a praticar o ciclo completo de um trabalho real, do layout até a publicação:

- Tornar elementos incorporados (como o iframe do Google Maps) responsivos, usando `max-width`, `min-width: 0` e `overflow: hidden`
- Depurar problemas de CSS com o DevTools do navegador
- Entender problemas de **cache** em produção: o site funcionava no Live Server, mas a versão publicada exibia o CSS antigo até o cache da hospedagem ser limpo
- Publicar um site em hospedagem e testar em diferentes tamanhos de tela

## Autor

**Matheus Dias**

- LinkedIn: [linkedin.com/in/matheus-oliveira-dias/](https://linkedin.com/in/matheus-oliveira-dias/)
- GitHub: [github.com/matheusdiass1](https://github.com/matheusdiass1)

