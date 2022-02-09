const path = require("path");

module.exports = {
  // O entry é onde definimos o caminho do arquivo principal nosso projeto o ./src/index.jsx
  // a partir daí o webpack monta a árvore de dependências.
  // __dirname será o responsável por resgatar o diretório completo,
  // e os próximos parâmetros informam o caminho do arquivo (evitando que utilzemos / ou \\).
  entry: path.resolve(__dirname, "src", "index.jsx"),

  // O output é onde o pacote gerado pelo webpack será salvo.
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `bundle.js`,
  },

  // aqui informamos as extensões de arquivos que serão lidos.
  resolve: {
    extensions: [".js", ".jsx"],
  },

  // Adicionando arquivos de outras extensões: Por padrão o webpack lê apenas códigos JS, adicionaremos
  // os loaders para auxiliar o webpack a ler outras extensões. Criaremos uma chave module com um objeto
  // de rules que levarão as configurações (cada configuração de loader deve ir em um objeto).
  module: {
    rules: [
      // A primeira rule será a integrar o babel com web, para isso utilizaremos uma regex simples para
      // identificar arquivos que terminam com a extensão ‘.jsx’, o exclude é responsável por tirar os
      // diretórios em que a verificação não será necessária, e o use é o responsável por informar os
      // loaders que serão usados.
      // OBS: É nescessário instalar os loader no projeto.
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loaders",
      },
      // Agora o loader do css:
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
