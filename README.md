Bookmark - Desafio do frontend mentor

# Visão geral

Segundo projeto feito com React do frontend mentor, este projeto me desafiei a criar todas as funcionalidades possíveis para que o projeto ficasse muito bom, é um projeto de gerenciador de extensões de navegador fictícios, é um site que utilizei técnicas de estilização CSS, organização de componentes no React, listas dinâmicas, Menu interativo para versão de celular, utilização do método map para repetir itens HTML que tem padrões. 

# Componentes criados

**Header.jsx**: parte criado para o cabeçalho do site, neste componente criei botões de login com animações de transições suaves e o gerenciamento do menu

**Main.jsx**: Componente responsável por renderizar toda a parte do conteúdo do site, ele é somente um componente que vai englobar os seus componentes filhos (childrens), aplicando uma estilização básica de Grid layout para centralizar os componentes.

## funcionalidades criadas

- Menu para mobile: utilizei técnica de renderização condicional do React para renderizar dois tipos de menu, o menu que vai aparecer no modo desktop, e o menu do modo mobile, gerenciados por um estado chamado menuAberto que vai verificar se o menu para celular está ou não aberto
- 