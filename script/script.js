'use strict';

const isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function game(){
  const goal = 58;
  
   function checkAnswer(){
    let question = prompt('Угадай число от 1 до 100');
    if(isNumber(question)){
        if(+question === goal){
          if(confirm('Вы угадали!Игру повторяем?')){
            checkAnswer();
          }}else if(+question < goal){
            alert('Загаданное число меньше');
            checkAnswer();
          }else if(+question > goal){
            alert('Загаданное число больше');
            checkAnswer();
          }
    } else{
      alert('Введи число!');
      return checkAnswer();
    }
  }
  checkAnswer();
}
game();
