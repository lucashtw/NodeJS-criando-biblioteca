const pegaArquivo = require('./index.js');
// import pegaArquivo from './index.js';

const caminho = process.argv;

console.log(pegaArquivo(caminho));