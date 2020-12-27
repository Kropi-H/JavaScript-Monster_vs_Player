const PLAYER_ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 8;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const monsterDemage = dealMonsterDamage(PLAYER_ATTACK_VALUE);
  currentMonsterHealth -= monsterDemage;
  const playerDemage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDemage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('Monster wons!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw!')
  }
}

attackBtn.addEventListener('click', attackHandler);