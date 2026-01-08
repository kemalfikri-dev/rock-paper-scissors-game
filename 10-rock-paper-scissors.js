 /*
      when we click a button:
      1. computer randomly selects a move
      2. compare the moves to get the result
      3. display the result in a popup
      */


      let score = JSON.parse(localStorage.getItem('score')) ||
      {
        wins: 0,
        losses: 0,
        ties: 0
      };

      updateScoreElement();
    
      
     /* if(!score) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        };
      } */

      //this is function to play the game

      function playGame (playerMove) {

        const computerMove = pickComputerMove();
        let result;

        if (playerMove === 'scissors' ) {
          if (computerMove === 'rock') {
        result = 'You Lose'
      } else if (computerMove === 'paper') {
        result = 'You Win'
      } else if (computerMove === 'scissors') {
        result = 'Tie'
      }
    } 
    

    else if (playerMove === 'rock' ) {
          if (computerMove === 'rock') {
        result = 'Tie'
      } else if (computerMove === 'paper') {
        result = 'You Lose'
      } else if (computerMove === 'scissors') {
        result = 'You Win'
      }
    } 
    
    
    else if (playerMove === 'paper' ) {
          if (computerMove === 'rock') {
        result = 'You Win.'
      } else if (computerMove === 'paper') {
        result = 'Tie.'
      } else if (computerMove === 'scissors') {
        result = 'You Lose.'
      }
    }


    if(result === 'You Win.') {
      score.wins++;
    } else if(result === 'You Lose.'){
      score.losses++;
    } else if(result === 'Tie.'){
      score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').
        innerHTML = `${result}`;

    document.querySelector('.js-moves').
        innerHTML = `you <img class="move-icon" src="${playerMove}-emoji.png" alt=""> <img class="move-icon" src="${computerMove}-emoji.png" alt=""> computer`;
        
      }



    function updateScoreElement (){
      document.querySelector('.js-score').
        innerHTML = `Wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}.`
      }


        


    function resetScore() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;

        localStorage.removeItem('score');

        updateScoreElement();

      }

      function pickComputerMove() {
        let computerMove = '';
        const randomNumber = Math.random();
      
      if (randomNumber >= 0 && randomNumber < 1/3) {
         computerMove = ('rock');
      } else if (randomNumber>= 1/3 && randomNumber < 2/3) {
         computerMove = ('paper');
      } else if (randomNumber >= 2/3 && randomNumber < 1) {
         computerMove = ('scissors');
      }
        return computerMove;
    }