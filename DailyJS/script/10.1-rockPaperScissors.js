const score = JSON.parse(localStorage.getItem('score')) || { win: 0, lose: 0, tie: 0 };

    updateScoreElement();
    
    function playGame(playerMove){
      
      const computerMove = function1(playerMove);
      let result = '';

      if(playerMove === 'rock'){
        if(computerMove === 'rock'){
          result = 'Tie';
        }
        else if(computerMove === 'paper'){
          result = 'Lose';
        }
        else if(computerMove === 'scissors'){
          result = 'Win';
        }
      }

      else if(playerMove === 'paper'){
        if(computerMove === 'rock'){
          result = 'Win';
        }
        else if(computerMove === 'paper'){
          result = 'Tie';
        }
        else if(computerMove === 'scissors'){
          result = 'Lose';
        }
      }

      else if(playerMove === 'scissors'){
        if(computerMove === 'rock'){
          result = 'Lose';
        }
        else if(computerMove === 'paper'){
          result = 'Win';
        }
        else if(computerMove === 'scissors'){
          result = 'Tie';
        }
      }

      if(result === 'Win'){
        score.win += 1;
      }
      else if(result === 'Lose'){
        score.lose += 1;
      }
      else if(result === 'Tie'){
        score.tie += 1;
      }

      //Store the Values of our result in the local storage, so that whenever we refresh out page then the values should be store somewhere.
      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();

      //write for result and Moves
      document.querySelector('.js-result').innerHTML = `You ${result}`;

      document.querySelector('.js-moves').innerHTML = `You
    <img src="images/${playerMove}-emoji.png" 
      class="move-icon">
     -
    <img src="images/${computerMove}-emoji.png" 
      class="move-icon">
    Computer`;


      //alert message when picked
      /*
      alert(`You picked ${playerMove}. Computer picked ${computerMove}. You ${result} \n Wins :${score.win}, Losses :${score.lose}, Ties :${score.tie}.`); 
      */
    }

    function updateScoreElement(){
      document.querySelector('.js-score').innerHTML = `Wins :${score.win}, Losses :${score.lose}, Ties :${score.tie}`;
    }

    function function1(){
      const randomNumber = Math.random();
      let computerMove = '';

      if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
      }
      else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
      }
      else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
      }
      return computerMove;
    }