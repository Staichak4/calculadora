const prompt = require('prompt-sync')();

let numero1 = prompt('Número 1: ')
let numero2 = prompt('Número 2: ')
let operação = prompt('Qual a operação desejada?: ')
let resultado

numero1 = parseFloat(numero1)
numero2 = parseFloat(numero2)

if (typeof numero1 == 'number' && typeof numero2 == 'number') {
        switch (operação) {
            case '+':
                resultado = numero1 + numero2
                console.log(`O resultado é igual a ${resultado}`)
            break;
            case '-':
                resultado = numero1 - numero2
                console.log(`O resultado é igual a ${resultado}`)
            break;
            case '*':
                resultado = numero1 * numero2
                console.log(`O resultado é igual a ${resultado}`)
            break;
            case '/':
                resultado = numero1 / numero2
                console.log(`O resultado é igual a ${resultado}`)
            break;
            case '%':
                resultado = numero1 * numero2 && numero1 / numero2
                console.log(`O resultado é igual a ${resultado}`)
            break;
            default:
                console.log('Operação inválida.')
            break;
        }    
} else {
    console.log('Operação inválida.')
}
