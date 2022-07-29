/*const chalk = require('chalk')*/
import chalk from 'chalk';
/*const fs = require('fs');*/
import  fs from 'fs';

function trataErro(erro){
    throw new Error(chalk.red(erro.code,'não há arquivo no caminho'));
}

async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo,encoding)
        console.log(chalk.green(texto))
        
    } catch(erro){
        trataErro(erro);
    }


}

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch((erro) => trataErro(erro))
// }

//async await

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro){
//             trataErro(erro)
//         }
//         console.log(chalk.green(texto));
//     })
// }

pegaArquivo('./arquivos/texto1.md');