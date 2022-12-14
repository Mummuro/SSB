const weaponsButtons = document.querySelectorAll('.weapon-button');
const rounds = document.querySelector('.round');
const combatText = document.querySelector('.combat-text');
const buttonPlayAgain = document.querySelector('.play-again');

let playerLives = 5;
let computerLives = 5;
let round = 0;

function getComputerChoice(){
    const weapons = ['stone', 'scissors', 'paper'];
    const computerIcon = document.querySelector('.computer-icon');
    let computerSelection = weapons[Math.floor(Math.random() * weapons.length)];
    computerIcon.classList.remove('fa-skull', 'fa-gem', 'fa-scissors', 'fa-toilet-paper');
    if(computerSelection === 'stone'){
        computerIcon.classList.add('fa-gem');
        computerIcon.style.color = '#28b40c';
    } else if(computerSelection === 'scissors'){
        computerIcon.classList.add('fa-scissors');
        computerIcon.style.color = '#DFF109';
    } else if(computerSelection === 'paper'){
        computerIcon.classList.add('fa-toilet-paper');
        computerIcon.style.color = '#1a35b8';
    }
    return computerSelection;
}

function playRound(){
let playerSelection;
  weaponsButtons.forEach((weapon) => {
    weapon.addEventListener('click', () => {
      const weaponIcons = document.querySelectorAll('.weapon-icon');
      if (weapon.classList.contains('gem-button')) {
        weaponIcons[0].style.color = '#28b40c';
        weaponIcons[1].style.color = '#5e5e5e';
        weaponIcons[2].style.color = '#5e5e5e';
        playerSelection = 'stone';
      } else if (weapon.classList.contains('scissors-button')) {
        weaponIcons[1].style.color = '#DFF109';
        weaponIcons[0].style.color = '#5e5e5e';
        weaponIcons[2].style.color = '#5e5e5e';
        playerSelection = 'scissors';
      } else {
        weaponIcons[2].style.color = '#1a35b8';
        weaponIcons[0].style.color = '#5e5e5e';
        weaponIcons[1].style.color = '#5e5e5e';
        playerSelection = 'paper';
      }
    })
  })
  countRounds();
  countLives(playerSelection, getComputerChoice());
  resetGame();
}

function countRounds() {
    round += 1;
    rounds.innerText = `Round: ${round}`;
    return round;
  }

function resetGame() {
    buttonPlayAgain.addEventListener('click', () => {
      window.location.reload();
    });
  }

function countLives(playerSelection, computerSelection){
    const gameOutput = document.querySelector('.game-output');
    const computerPlayDiv = document.querySelector('.computer-play-div');
    const leftBorder = document.querySelector('.game-results');
    while(playerLives != 0 || computerLives !=0){
        if(playerSelection === computerSelection){
            combatText.innerText = `Wow, look....you have two ${playerSelection}s, it means a draw. It's even more interesting now!`;
            gameOutput.classList.remove('grey-border');
            gameOutput.classList.add('purple-border');
            leftBorder.style.color = "#8070ac";
        } else if(playerSelection === 'stone'){
            if(computerSelection === 'paper'){
              combatText.innerText = `Unfortunate defeat.. You lost one life, because your ${playerSelection} lacks of power against enemy's ${computerSelection}!`;
              gameOutput.classList.remove('grey-border', 'purple-border', 'green-border', 'red-border');
              gameOutput.classList.add('red-border');
              leftBorder.style.color = "#b96b78";
              playerLives -= 1;
            }
            else{
              combatText.innerText = `Impressive attack! The enemy lost one life, because the great power of your ${playerSelection} crushed his ${computerSelection}!`;
              gameOutput.classList.remove('grey-border', 'purple-border', 'green-border', 'red-border');
              gameOutput.classList.add('green-border');
              leftBorder.style.color = "#62b49c";
              computerLives -= 1;
            }
        } else if(playerSelection === 'scissors'){
            if(computerSelection === 'stone'){
              combatText.innerText = `Unfortunate defeat.. You lost one life, because your ${playerSelection} lacks of power against enemy's ${computerSelection}!`;
              gameOutput.classList.remove('grey-border', 'purple-border', 'green-border', 'red-border');
              gameOutput.classList.add('red-border');
              leftBorder.style.color = "#b96b78";
              playerLives -= 1;
            }
            else{
              combatText.innerText = `Impressive attack! The enemy lost one life, because the great power of your ${playerSelection} crushed his ${computerSelection}!`;
              gameOutput.classList.remove('grey-border', 'purple-border', 'green-border', 'red-border');
              gameOutput.classList.add('green-border');
              leftBorder.style.color = "#62b49c";
              computerLives -= 1;
            }
        } else if(playerSelection === 'paper'){
            if(computerSelection === 'scissors'){
              combatText.innerText = `Unfortunate defeat.. You lost one life, because your ${playerSelection} lacks of power against enemy's ${computerSelection}!`;
              gameOutput.classList.remove('grey-border', 'purple-border', 'green-border', 'red-border');
              gameOutput.classList.add('red-border');
              leftBorder.style.color = "#b96b78";
              playerLives -= 1;
            }
            else{
              combatText.innerText = `Impressive attack! The enemy lost one life, because the great power of your ${playerSelection} crushed his ${computerSelection}!`;
              gameOutput.classList.remove('grey-border', 'purple-border', 'green-border', 'red-border');
              gameOutput.classList.add('green-border');
              leftBorder.style.color = "#62b49c";
              computerLives -= 1;
            }
    }
    const lives = document.querySelector('.lives');
    lives.innerText = `Your Lives: ${playerLives} ︱ Enemy's Lives: ${computerLives}`;
    
}

const gameEndText = document.querySelector('.game-end-text');
const computerIcon = document.querySelector('.computer-icon');
computerIcon.style.opacity = '0.5';

weaponsButtons.forEach((button) => {
  button.setAttribute('disabled', '');
  button.classList.add('disabled-button', 'opacity');
});
if(playerLives > computerLives){
  combatText.innerText = 'Hehe, poor enemy has no lives left.. He barely holds himself in one piece.';
  gameEndText.textContent = 'You Won This Battle!';
  gameEndText.style.color = '#62b49c';
} else {
  combatText.innerText = 'Ouch.. No lives left for you. Enjoy the mocking laughter of the enemy.';
  gameEndText.textContent = 'You Lost This Battle!';
  gameEndText.style.color = '#b96b78';
}

buttonPlayAgain.style.visibility = 'visible';
return [playerLives, computerLives];

}

playRound();




