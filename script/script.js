'use strict';

let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
};

confirm('Я хочу сыграть с тобой в игру');
function game(){
  let question = +prompt('Угадай число от 1 до 100');
  function checkAnswer(){
    if(question <= 50){
      alert('Загаданное число больше');
      return game();
    } else if(question > 50){
      alert('Загаданное число меньше');
      return game();
    } else if(question !== isNumber){
      alert('Введи число!');
      return game();
    } else {
      confirm('игру завершаем?');
    }
    // switch(question){
    //   case (question === isNumber): alert('Введи число!');
    //   return game();
    //   case (question <= 50): prompt('Загаданное число больше');
    //   return game();
    //   case (question > 50): prompt('Загаданное число меньше');
    //   return game();
    //   default: confirm('игру завершаем?');
    //   break;
    // }
  }
  checkAnswer();
}
game();