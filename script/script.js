'use strict';

const isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const goal = 58;
confirm('Я хочу сыграть с тобой в игру');
function game(){
  let question = +prompt('Угадай число от 1 до 100');
  function checkAnswer(){
    switch(true){
      case !isNumber(question): alert('Введи число!');
      return game();
      case question === goal: alert('Вы угадали!');
        const answer = confirm('игру завершаем?');
        if(answer === true){
          return null;
        }else{
          game();
        }
        break;
      case question <= 50: alert('Загаданное число больше');
      return game();
      case question > 50: alert('Загаданное число меньше');
      return game();
    }
  return question;
  }
  checkAnswer();
}
game();
