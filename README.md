# Visão Geral
Este projeto consiste em uma página da web simples para assistir a canais de TV online. Permite que os usuários selecionem diferentes canais através de botões, que alteram dinamicamente a origem do reprodutor de vídeo incorporado para transmitir o canal selecionado.

## Estrutura de Arquivos
- `index.html`: O arquivo HTML principal contendo a estrutura da página da web.
- `css/style.css`: A folha de estilo para estilizar a página da web.
- `js/script.js`: Arquivo JavaScript contendo a lógica para alterar a origem do reprodutor de vídeo e atualizar o nome do canal.

## Estrutura HTML
- `DOCTYPE`: Declara o tipo de documento e define o idioma como Português do Brasil.
- Seção `Head`: Contém metadados como conjunto de caracteres, título, links para folhas de estilo e favicon.
- Seção `Body`: Inclui o conteúdo principal da página da web, como título, botões de canal, reprodutor de vídeo e rodapé.

## Funções JavaScript
- `changeVideo(url, channelName)`: Aceita uma URL e o nome do canal como argumentos. Esta função altera a origem do reprodutor de vídeo para a URL fornecida e atualiza a transcrição com o nome do canal.
- `updateTranscription(channelName)`: Atualiza a transcrição com o nome do canal atualmente selecionado.
- Ouvintes de Eventos: Quatro ouvintes de eventos estão ligados aos botões de canal. Quando clicados, cada botão aciona a função `changeVideo()` com a URL e nome do canal correspondentes.
