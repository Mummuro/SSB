const weaponsButtons = document.querySelectorAll('.weapon-button'); // Creating variables for decor 
const rounds = document.querySelector('.round'); // Creating variables for decor 
const combatText = document.querySelector('.combat-text'); // Creating variables for decor 
const buttonPlayAgain = document.querySelector('.play-again'); // Creating variables for decor 

let playerLives = 5; //  var for counting live
let computerLives = 5; //  var for counting live
let round = 0; // amount of rounds

function getComputerChoice(){ // Function for generating computer's choice of weapon and displaying it  
    const weapons = ['stone', 'scissors', 'paper']; // weapons game has
    const computerIcon = document.querySelector('.computer-icon'); // Icon for displaying answer
    let computerSelection = weapons[Math.floor(Math.random() * weapons.length)]; // generating choice for computer
    computerIcon.classList.remove('fa-skull', 'fa-gem', 'fa-scissors', 'fa-toilet-paper'); // styling for icon
    if(computerSelection === 'stone'){ // styling for icon
        computerIcon.classList.add('fa-gem');
        computerIcon.style.color = '#28b40c';
    } else if(computerSelection === 'scissors'){ // styling for icon
        computerIcon.classList.add('fa-scissors');
        computerIcon.style.color = '#DFF109';
    } else if(computerSelection === 'paper'){ // styling for icon
        computerIcon.classList.add('fa-toilet-paper');
        computerIcon.style.color = '#1a35b8';
    }
    return computerSelection; // returning of computer's weapon 
}

function playRound(){ // Function where we staring game 
let playerSelection;
  weaponsButtons.forEach((weapon) => { // arrow function for second function which styling items
    weapon.addEventListener('click', () => { // Listener for clicks on weapons, after click it styles weapon
      const weaponIcons = document.querySelectorAll('.weapon-icon');
      if (weapon.classList.contains('gem-button')) {
        weaponIcons[0].style.color = '#28b40c'; // style
        weaponIcons[1].style.color = '#5e5e5e'; // style
        weaponIcons[2].style.color = '#5e5e5e'; // style
        playerSelection = 'stone'; // Setting PlayerSelection
      } else if (weapon.classList.contains('scissors-button')) {
        weaponIcons[1].style.color = '#DFF109'; // style
        weaponIcons[0].style.color = '#5e5e5e'; // style
        weaponIcons[2].style.color = '#5e5e5e'; // style
        playerSelection = 'scissors'; // Setting PlayerSelection
      } else {
        weaponIcons[2].style.color = '#1a35b8'; // style
        weaponIcons[0].style.color = '#5e5e5e'; // style
        weaponIcons[1].style.color = '#5e5e5e'; // style
        playerSelection = 'paper'; // Setting PlayerSelection
      }
      countRounds();
      countLives(playerSelection, getComputerChoice());
      endGame(playerLives, computerLives);
      resetGame();
    })
  })
  
  return playerSelection;
}

function endGame(playerLives, computerLives){
  const lives = document.querySelector('.lives');
  lives.innerText = `Your Lives: ${playerLives} ︱ Enemy's Lives: ${computerLives}`;
  if(playerLives === 0 || computerLives === 0){
    weaponsButtons.forEach((button) => {
    button.setAttribute('disabled', '');
    button.classList.add('disabled-button', 'opacity');
    });
    if(playerLives > computerLives){
      combatText.innerText = 'Hehe, poor enemy has no lives left.. He barely holds himself in one piece.';
      gameEndText.textContent = 'You Won This Battle!';
      gameEndText.style.color = '#62b49c';
      buttonPlayAgain.style.visibility = 'visible';
    } else {
      combatText.innerText = 'Ouch.. No lives left for you. Enjoy the mocking laughter of the enemy.';
      gameEndText.textContent = 'You Lost This Battle!';
      gameEndText.style.color = '#b96b78';
      buttonPlayAgain.style.visibility = 'visible';
    }
  }
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
  while(true){
    if(playerSelection === computerSelection){
      combatText.innerText = `Wow, look....you have two ${playerSelection}s, it means a draw. It's even more interesting now!`;
      gameOutput.classList.remove('grey-border', 'green-border', 'red-border');
      gameOutput.classList.add('purple-border');
      leftBorder.classList.remove('grey-border-left', 'green-border-left', 'red-border-left');
      leftBorder.classList.add('purple-border-left');
      break;
    } else if(playerSelection === 'stone'){
        if(computerSelection === 'paper'){
          combatText.innerText = `Unfortunate defeat.. You lost one life, because your ${playerSelection} lacks of power against enemy's ${computerSelection}!`;
          gameOutput.classList.remove('grey-border', 'purple-border', 'green-border', 'red-border');
          gameOutput.classList.add('red-border');
          leftBorder.classList.remove('grey-border-left', 'green-border-left', 'purple-border-left');
          leftBorder.classList.add('red-border-left');
          playerLives -= 1;
          break;
        }
        else{
          combatText.innerText = `Impressive attack! The enemy lost one life, because the great power of your ${playerSelection} crushed his ${computerSelection}!`;
          gameOutput.classList.remove('grey-border', 'purple-border', 'green-border', 'red-border');
          gameOutput.classList.add('green-border');
          leftBorder.classList.remove('grey-border-left', 'purple-border-left', 'red-border-left');
          leftBorder.classList.add('green-border-left');
          computerLives -= 1;
          break;
        }
      } else if(playerSelection === 'scissors'){
          if(computerSelection === 'stone'){
            combatText.innerText = `Unfortunate defeat.. You lost one life, because your ${playerSelection} lacks of power against enemy's ${computerSelection}!`;
            gameOutput.classList.remove('grey-border', 'purple-border', 'green-border', 'red-border');
            gameOutput.classList.add('red-border');
            leftBorder.classList.remove('grey-border-left', 'green-border-left', 'purple-border-left');
            leftBorder.classList.add('red-border-left');
            playerLives -= 1;
            break;
          }
          else{
            combatText.innerText = `Impressive attack! The enemy lost one life, because the great power of your ${playerSelection} crushed his ${computerSelection}!`;
            gameOutput.classList.remove('grey-border', 'purple-border', 'green-border', 'red-border');
            gameOutput.classList.add('green-border');
            leftBorder.classList.remove('grey-border-left', 'purple-border-left', 'red-border-left');
            leftBorder.classList.add('green-border-left');
            computerLives -= 1;
            break;
          }
      } else if(playerSelection === 'paper'){
          if(computerSelection === 'scissors'){
            combatText.innerText = `Unfortunate defeat.. You lost one life, because your ${playerSelection} lacks of power against enemy's ${computerSelection}!`;
            gameOutput.classList.remove('grey-border', 'purple-border', 'green-border', 'red-border');
            gameOutput.classList.add('red-border');
            leftBorder.classList.remove('grey-border-left', 'green-border-left', 'purple-border-left');
            leftBorder.classList.add('red-border-left');
            playerLives -= 1;
            break;
          }
          else{
            combatText.innerText = `Impressive attack! The enemy lost one life, because the great power of your ${playerSelection} crushed his ${computerSelection}!`;
            gameOutput.classList.remove('grey-border', 'purple-border', 'green-border', 'red-border');
            gameOutput.classList.add('green-border');
            leftBorder.classList.remove('grey-border-left', 'purple-border-left', 'red-border-left');
            leftBorder.classList.add('green-border-left');
            computerLives -= 1;
            break;
          }
      }
  }
  
  return [playerLives, computerLives];
    
}

const gameEndText = document.querySelector('.game-end-text');
const computerIcon = document.querySelector('.computer-icon');
computerIcon.style.opacity = '0.5';

playRound();










