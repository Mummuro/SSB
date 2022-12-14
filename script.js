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
}

getComputerChoice();