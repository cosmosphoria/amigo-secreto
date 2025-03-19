
# Amigo Secreto

Este é um projeto simples de **Amigo Secreto**, onde os usuários podem adicionar os nomes dos seus amigos, sortear um nome e mostrar o resultado do sorteio.

## Funcionalidades

- Adicionar os nomes dos amigos.
- Sortear um amigo secreto.
- Exibir a lista de amigos adicionados e o resultado do sorteio.

## Como rodar o projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/username/amigo-secreto.git
```

2. **Navegue até a pasta do projeto:**

```bash
cd amigo-secreto
```

3. **Abra o arquivo `index.html` em seu navegador:**

Basta abrir o arquivo `index.html` diretamente no seu navegador de preferência para visualizar a aplicação em funcionamento.

## Estrutura do Projeto

- `index.html`: O arquivo HTML principal que contém a estrutura da aplicação.
- `style.css`: O arquivo CSS para estilização da interface.
- `app.js`: O arquivo JavaScript que contém a lógica do sorteio e interações.

## Estilos

O projeto utiliza um conjunto de estilos CSS customizados para uma interface simples e moderna. As cores principais são um tom de roxo, laranja para os botões e um fundo suave para a área de entrada de dados.

### Arquivo CSS (`style.css`)

- **Cor primária**: `#4B69FD` (um roxo vibrante).
- **Cor secundária**: `#FFF9EB` (um tom claro e suave).
- **Botões**: O botão "Sortear amigo" tem fundo laranja (`#fe652b`), enquanto o botão "Adicionar" tem um fundo mais neutro.

## Lógica JavaScript

O arquivo `app.js` implementa a lógica principal da aplicação, que inclui:

1. **Adicionar amigos**: O usuário pode digitar o nome de um amigo no campo de entrada e clicar em "Adicionar". O nome é adicionado à lista de participantes.
2. **Sortear amigo secreto**: Ao clicar em "Sortear amigo", a aplicação embaralha a lista de participantes e garante que ninguém tire a si mesmo. O sorteio é feito usando o algoritmo Fisher-Yates Shuffle.
3. **Validação**: A aplicação valida se o nome inserido já foi adicionado ou se é um nome vazio. Se menos de dois participantes forem adicionados, um alerta será exibido.

## Tecnologias usadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilos e layout da página.
- **JavaScript**: Lógica para adicionar nomes e realizar o sorteio.

## Dependências

Este projeto não possui dependências externas.
