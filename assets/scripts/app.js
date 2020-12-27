const PLAYER_ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 8;
const STRONG_ATTACK_VALUE = 15;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster (mode){
  let maxDemage;
if(mode === 'ATTACK'){
  maxDemage = PLAYER_ATTACK_VALUE;
}else if(mode === 'STRONG_ATTACK'){
  maxDemage = STRONG_ATTACK_VALUE;
}
  const monsterDemage = dealMonsterDamage(maxDemage);
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

function attackHandler() {
 attackMonster('ATTACK')
}

function strongAttackHandler() {
  attackMonster('STRONG_ATTACK');
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);