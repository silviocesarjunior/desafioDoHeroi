let nomeDoHeroi = prompt("Digite o nome do herói:");
let xp = prompt("Digite a quantidade de experiência do herói:");

xp = parseInt(xp);

// Verifica o nível do herói com base na experiência
if (xp < 1000) {
  console.log(`${nomeDoHeroi} é um Herói de Ferro.`);
} else if (xp >= 1001 && xp <= 2000) {
  console.log(`${nomeDoHeroi} é um Herói de Bronze.`);
} else if (xp >= 2001 && xp <= 5000) {
  console.log(`${nomeDoHeroi} é um Herói de Prata.`);
} else if (xp >= 6001 && xp <= 7000) {
  console.log(`${nomeDoHeroi} é um Herói de Ouro.`);
} else if (xp >= 7001 && xp <= 8000) {
  console.log(`${nomeDoHeroi} é um Herói de Platina.`);
} else if (xp >= 8001 && xp <= 9000) {
  console.log(`${nomeDoHeroi} é um Herói de Ascendente.`);
} else if (xp >= 9001 && xp <= 10000) {
  console.log(`${nomeDoHeroi} é um Herói de Imortal.`);
} else {
  console.log(`${nomeDoHeroi} é um Herói Radiante.`);
}
