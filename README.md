
# Bookmark Landing Page

# Visão geral

Este projeto me desafiei a criar todas as funcionalidades possíveis para que o projeto ficasse muito bom, é um projeto de gerenciador de extensões de navegador fictícios, é um site que utilizei técnicas de estilização CSS, organização de componentes no React, criação de listas dinâmicas, Menu interativo para versão de celular e utilização do método map para repetir elements HTML. 
> Projeto de landing page para um gerenciador de favoritos, desenvolvido como um desafio do [Frontend Mentor](https://www.frontendmentor.io).

# Componentes mais importantes
**[Acesse a demonstração ao vivo](https://#)** <!-- Sugestão: Adicione o link para o deploy do seu projeto -->

**Header.jsx**: parte criado para o cabeçalho do site, neste componente criei botões de login com animações de transições suaves e o gerenciamento do menu 
## 🚀 Sobre o Projeto

**Main.jsx**: Componente responsável por renderizar toda a parte do conteúdo do site, ele é somente um componente que vai englobar os seus componentes filhos (childrens), aplicando uma estilização básica de Grid layout para centralizar os componentes.
Este projeto é uma landing page completa e responsiva para um gerenciador de favoritos fictício. O objetivo foi criar uma interface moderna e interativa, aplicando conceitos essenciais de desenvolvimento web com React.
_
**SectionExtensions.jsx**: neste componente utilizei a técnica de uso de lista dinâmicas dentro de um useState, dentro da lista temos imagem, título, descrição e um botão padrão para 3 itens

**SectionFeatures.jsx**: o mesmo algoritmo de lista dinâmica foi usado neste componente, porém neste componente a ideia é criar uma lista onde quando o usuário clica em uma determinada opção, vai aparecer outra informação, gerenciadas a partir de um estado chamado ativo, onde quando o usuário clica em uma opção, verifica se o índice do elemento coincide com o indice do botão

**Aside Questions**: outra lista dinâmica, porém aqui ajusta o estado de um elemento HTML, verificando se vai aparecer ou desapacerer a partir de um clique de um botão

*   **Design Responsivo:** A interface se adapta perfeitamente a desktops, tablets e celulares.
*   **Menu Interativo:** Menu de navegação mobile que abre e fecha, melhorando a usabilidade em telas menores.
*   **Abas de Funcionalidades (Features):** Sistema de abas que exibe diferentes conteúdos ao clicar em cada opção.
*   **Acordeão de FAQ:** Seção de perguntas frequentes interativa, onde as respostas são exibidas ou ocultadas com um clique.
*   **Renderização Dinâmica:** Os cards de extensões e as perguntas do FAQ são gerados dinamicamente a partir de uma lista de dados, utilizando o método `map`.