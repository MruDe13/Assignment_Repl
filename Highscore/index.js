var readlineSync = require('readline-sync');

const chalk = require('chalk');

var username = readlineSync.question(chalk.bgBlack.bold.white("What's your name? "));

console.clear()

var userChoice = readlineSync.question(`Welcome to ${chalk.cyan('Do You Know Me Well?')} Quiz,${chalk.bold.green(username)}.
Each right answer adds ${chalk.bold.green('1')} to your score and a wrong answer deducts ${chalk.bold.red('1')}. So, shall we begin?

Press "y" and 'Enter' key to Begin or any key and 'Enter' key to Exit...`);

var userScore = 0;
var beatenScore=0;
var beatenUser ='';

highScores = [{name : 'Sachin',score: 5},{  name : 'Sushil',score : 4},{name :'Sushma', score : 3}];

var one = {
    Question: `Which is my Favorite Color?
      a. Black
      b. Green
      c. Blue  
      
      Your Answer is:  `,
    Answer: 'c'
  };
  
var two = {
    Question: `What is my nickname in Counter Strike 1.6? 
    a. Batman
    b. Mr. Degale
    c. MruDe  

    Your Answer is:   `,
    Answer: 'c'
}
  
var three = {
    Question: `What am I the most interested in? 
      a. Philosophy
      b. Programming
      c. Poetry  
  
      Your Answer is:  `,
    Answer: 'a'
}
  
var four = {
    Question: `What is my birth year? 
      a. 1991
      b. 1993
      c. 1992    
  
      Your Answer is:  `,
    Answer: 'c'
}
  
var five = {
    Question: `Which is my favorite pet animal? 
      a. Cat
      b. Dog
      c. None   
  
      Your Answer is:  `,
    Answer: 'b'
}

listofQnA = [one, two, three, four, five];

function gameBegins() {
    console.log(chalk.bold.white.bgRed(`Please choose the right option and press 'Enter'.`))
    for(i=0; i< listofQnA.length; i++) {
      ask_question = readlineSync.question(chalk.bgWhite.bold.blue(listofQnA[i].Question));
      if (ask_question===listofQnA[i].Answer){
        userScore += 1;
  
        console.log(chalk.bold.black.bgGreen(`Congrats, ${chalk.cyan.bgGreen.bold(username)}. Right answer.
        Your score is: ${userScore}.`));
  
      } else {
        userScore -= 1;
        
        console.log(chalk.bgRed.bold.black(`Oops! That's a wrong answer ${chalk.bgRed.bold.black(username)}. Your score is: ${userScore}.`));
  
      }
    }
}

function top3(){
  beatenScore = userScore;
  beatenUser = username;
  for (i=0;i<highScores.length; i++){

    if (beatenScore>highScores[i].score){
    beatenScore = highScores[i].score;
    beatenUser = highScores[i].name;
    highScores[i].name = username;
    highScores[i].score = userScore;
    userScore = beatenScore;
    username = beatenUser;

    } 
  }
  console.log('Top 3 Scorers are:')
  for (i=0;i<highScores.length; i++){
  console.log(`${highScores[i].name} : ${highScores[i].score}`)
}

}

if (userChoice=== "y"){
    console.clear();
    gameBegins();
    top3();
    exit = readlineSync.question(chalk.bgBlack.bold.red(`Press any key to exit`));
    console.clear();
  }