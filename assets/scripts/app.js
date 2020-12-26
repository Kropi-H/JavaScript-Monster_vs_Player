const ATTACK_VALUE = 10;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
const demage = dealMonsterDamage(ATTACK_VALUE);
currentMonsterHealth -= demage; 
}

attackBtn.addEventListener('click', attackHandler);