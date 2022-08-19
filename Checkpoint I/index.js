const readlineSync = require("readline-sync");

let time1 = 10;
let time2 = 8;
let time3 = 15;
let time4 = 12;
let time5 = 8;

console.log(`
  1 - Pipoca
  2 - Macarrão
  3 - Carne
  4 - Feijão
  5 - Brigadeiro
`);

let option = readlineSync.question("Escolha a sua opcao: ");
let clock = readlineSync.question("Escolha o seu tempo de preparo: ");

if (
  (option == 1 && clock >= time1 && clock <= time1 * 2) ||
  (option == 2 && clock >= time2 && clock <= time2 * 2) ||
  (option == 3 && clock >= time3 && clock <= time3 * 2) ||
  (option == 4 && clock >= time4 && clock <= time4 * 2) ||
  (option == 5 && clock >= time5 && clock <= time5 * 2)
) {
  console.log("Prato pronto, bom apetite!!!");
} else if (
  (option == 1 && clock < time1) ||
  (option == 2 && clock < time2) ||
  (option == 3 && clock < time3) ||
  (option == 4 && clock < time4) ||
  (option == 5 && clock < time5)
) {
  console.log("Tempo insuficiente para preparo");
} else if (
  (option == 1 && clock > time1 * 2 && clock < time1 * 3) ||
  (option == 2 && clock > time2 * 2 && clock < time2 * 3) ||
  (option == 3 && clock > time3 * 2 && clock < time3 * 3) ||
  (option == 4 && clock > time4 * 2 && clock < time4 * 3) ||
  (option == 5 && clock > time5 * 2 && clock < time5 * 3)
) {
  console.log("Seu prato queimou");
} else if (
  (option == 1 && clock >= time1 * 3) ||
  (option == 2 && clock >= time2 * 3) ||
  (option == 3 && clock >= time3 * 3) ||
  (option == 4 && clock >= time4 * 3) ||
  (option == 5 && clock >= time5 * 3)
) {
  console.log("KABOOOM");
} else {
  console.log("Prato inexistente");
}
