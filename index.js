/*const chalk = require('chalk')*/
import chalk from 'chalk';
/*const fs = require('fs');*/
import  fs from 'fs';

function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (_, texto) => {
        console.log(chalk.green(texto));
    })
}

pegaArquivo('./arquivos/texto1.md');