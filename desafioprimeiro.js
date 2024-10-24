let nomeHeroi = "Docinho";
let quantXp = 9500

let nivelHeroi;

if (quantXp < 1000) {
    nivelHeroi = "Ferro";
} else if (quantXp <= 2000) {
    nivelHeroi = "Bronze";
} else if (quantXp <= 5000) {
    nivelHeroi = "Prata";
} else if (quantXp <= 7000) {
    nivelHeroi = "Ouro";
} else if (quantXp <= 8000) {
    nivelHeroi = "Platina";
} else if (quantXp <= 9000) {
    nivelHeroi = "Ascendente";
} else if (quantXp <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);