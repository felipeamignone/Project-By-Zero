const path = require('path');

module.exports = {
    // O entry é onde definimos o caminho do arquivo principal nosso projeto o ./src/index.jsx
    // a partir daí o webpack monta a árvore de dependências.
    // __dirname será o responsável por resgatar o diretório completo,
    // e os próximos parâmetros informam o caminho do arquivo (evitando que utilzemos / ou \\).
    entry: path.resolve(__dirname, 'src', 'index.jsx'),

    // O output é onde o pacote gerado pelo webpack será salvo.
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `bundle.js`,
    },
  };