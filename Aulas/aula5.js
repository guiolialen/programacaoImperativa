//Crie uma função que converta polegadas em centímetros. Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
function conversor(pol){
    return pol*2.54
}
const convertido = conversor(3)
console.log(convertido)

//Crie uma função que receba uma string e a converta em um URL. ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"
function url(nome) {
    return `http://www.${nome}.com.br`
}
const site = url('guilherme')
console.log(site)

//Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).
function frase(fraseBase){
    return `${fraseBase}!`
}
const enfase = frase('estou rico')
console.log(enfase)

//Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
function caoculadora(idadeHumano){
    return idadeHumano * 7
}
const idadecao = caoculadora(3)
console.log(idadecao)

//Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal. PS: considere que você trabalhe 160 horas no mês.
function salario(valorHora){
    return valorHora * 160
}
const receita = salario(5.00)
console.log(receita)

//Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores.
function calcImc(altura, peso){
    return peso/((altura/100)*(altura/100))
}
const IMC = calcImc(178, 115)
console.log('Seu IMC é: ' + IMC)

//Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne.
function aumentar(string){
    return `${string}`.toUpperCase()
}
const maiusculo = aumentar('grito')
console.log(maiusculo)

//Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
function tipo(parametro){
    return typeof parametro
}
const qualTipo = tipo('bola')
console.log(qualTipo)

//Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
function calcCirc(raio){
    return 2 * Math.PI * raio
}
const circunferencia = calcCirc(3)
console.log(circunferencia)