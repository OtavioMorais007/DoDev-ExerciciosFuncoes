/*1. Você deve criar um programa que solicite ao seu usuário dois
números A e B.
2. Crie uma função que receba os dois valores fornecidos pelo
usuário e faça uma soma com eles, e retorne o resultado;
3. Crie uma função que receba os dois valores fornecidos pelo
usuário e faça uma subtração com eles, e retorne o resultado;
4. Crie uma função que receba os dois valores fornecidos pelo
usuário e faça uma multiplicação com eles, e retorne o
resultado;
5. Crie uma função que receba os dois valores fornecidos pelo
usuário e faça uma divisão com eles, e retorne o resultado;
6. Faça com que seu usuário escolha qual função ele deseja fazer
com os números que ele inseriu, e depois de realizar essa
operação pergunte se ele deseja fazer outra ou encerrar a
aplicação.
7. Crie um array para salvar o resultado das operações e crie
também uma função para exibir o histórico dos resultados.*/

var num1 = parseInt(prompt('Insira o primeiro número: '))
var num2 = parseInt(prompt('Insira o segundo número: '))

function Somar(num1, num2) {
    var soma = num1 + num2
    return soma
}

function Subtrair(num1, num2){
    var subtracao = num1 - num2
    return subtracao
}

function Multiplicao(num1, num2){
    var multiplicacao = num1 * num2
    return multiplicacao
}

function Dividr(num1, num2) {
    var divisao = num1 / 2
    return divisao
}

while(continuar == 's'){
    var operacao = prompt ('Qual operação deseja fazer? 1 - Soma, 2 - Subtracao, 3 - Multiplicação, 4 - Dividir')
    if (operacao == "1"){
        console.log(Somar(num1, num2))
    } else if (operacao == "2"){
        console.log(Subtrair(num1, num2))
    } else if (operacao == "3"){
        console.log(Multiplicao(num1, num2))
    } else if (operacao == "4"){
        console.log(Dividir(num1, numB))
    }
}