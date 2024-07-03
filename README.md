# Sistema simples de calculadora 
Este é um sistema simples simulando uma calculadora contendo as funções de adição, subtração, multiplicação, subtração e porcentagem, escrito em node.js e que apresenta as informações ao usuário pelo terminal.

## Estrutura do código

### Módulos e variáveis

- `prompt`: Módulo utilizado para ler a entrada do usuário no terminal.
- `numero1`: Variável de tipo **parseFloat** que pergunta e salva o primeiro número que o usuário digitar.
- `numero2`: Variável de tipo **parseFloat** que pergunta e salva o segundo número que o usuário digitar.
- `operação`: Variável de tipo **String** que pergunta e salva a operação que o usuário deseja concluir no programa.
- `resultado`: Variável que vai salvar e apresentar para o usuário o resultado da operação desejada utilizando os números 1 e 2.

### Funções principais

1. `Adição`: O programa utiliza switch para instituir o cálculo desejado pelo usuário, e caso for adição ele deve digitar '+' e assim o programa fara a operação de adição.
2. `Subtração`: O programa utiliza switch para instituir o cálculo desejado pelo usuário, e caso for subtração ele deve digitar '-' e assim o programa fara a operação de subtração.
3. `Multiplicação`: O programa utiliza switch para instituir o cálculo desejado pelo usuário, e caso for multiplicação ele deve digitar '*' e assim o programa fara a operação de multiplicação.
4. `Divisão`: O programa utiliza switch para instituir o cálculo desejado pelo usuário, e caso for divisão ele deve digitar '/' e assim o programa fara a operação de divisão.
5. `Porcentagem`: O programa utiliza switch para instituir o cálculo desejado pelo usuário, e caso for porcentagem ele deve digitar '%' e assim o programa fara a operação de porcentagem.

### Decisões de Design

- *Interface Simples*: Código e interface baseado apenas em texto, consiste em apenas perguntas e respostas, facilitando o entendimento e o uso do programa.
- *Validação Básica*: O sistema verifica se a entrada do usuário é válida antes de realizar as operações, verificando se as informações digitadas pelo usuário são números e as operações inclusas no programa.

## Utilização do Sistema 

### Requisitos

- **Node.js**
- **Prompt**

### Execução 

1. Clone o repositório *calculadora* no GitHub ou copie para um arquivo `calculadora.js`.
2. No terminal, navegue até o diretório onde o arquivo se localiza.
3. Execute o programa com o comando:
    ```bash
    node app.js
     ```