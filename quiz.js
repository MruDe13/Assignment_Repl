var readlineSync = require('readline-sync');
const chalk = require('chalk');

var username = readlineSync.question(chalk.bgBlack.bold.white("What's your name? "));

console.clear()

var userChoice = readlineSync.question(chalk.bgBlack.bold.cyan(`Welcome to the world of Disney, ${chalk.bgBlack.bold.green(username)}.

We have 5 Disney questions for you. Each right answer adds ${chalk.bgBlack.bold.green('5')} to your score and a wrong answer deducts ${chalk.bgBlack.bold.red('2')}. So, shall we begin?

Press "y" and 'Enter' key to Begin or any key and 'Enter' key to Exit...`));

var userScore = 0;

var highScore = 0;

var one = {
  Question: `Which team does 'Go Go Tomago' belong to?
    a. The Incredibles
    b. Frozen
    c. Big Hero 6   
    
    Your Answer is:  `,
  Answer: 'c'
};

var two = {
  Question: `Which of the following Disney character is a Villain? 
    a. Aladdin
    b. Jafar
    c. Ariel   

    Your Answer is:   `,
  Answer: 'b'
};

var three = {
  Question: `Which of the following Disney character is not a member of The Incredibles? 
    a. Violet
    b. Honey Lemon
    c. Elastic Girl  

    Your Answer is:  `,
  Answer: 'b'
}

var four = {
  Question: `Which of these Heroes is not a Toy Story character? 
    a. Buzz Lightyear
    b. Woody
    c. Kronk    

    Your Answer is:  `,
  Answer: 'c'
}

var five = {
  Question: `Which of these character is not from the  'The Lion King' series? 
    a. Rafiki
    b. Shere Khan
    c. Scar   

    Your Answer is:  `,
  Answer: 'b'
}

listofQnA = [one, two, three, four, five];

function gameBegins() {
  console.log(chalk.bold.white.bgRed(`Please choose the right option and press 'Enter'.`))
  for(i=0; i< listofQnA.length; i++) {
    ask_question = readlineSync.question(chalk.bgWhite.bold.blue(listofQnA[i].Question));
    if (ask_question===listofQnA[i].Answer){
      userScore += 5;

      console.log(chalk.bold.black.bgGreen(`Congrats, ${chalk.cyan.bgGreen.bold(username)}. Right answer.
      Your score is: ${userScore}.`));

    } else {
      userScore -= 2;
      
      console.log(chalk.bgRed.bold.black(`Oops! That's a wrong answer ${chalk.bgRed.bold.black(username)}. Your score is: ${userScore}.`));

    }
  }

  if (userScore> highScore){
    highScore = userScore;
    console.log(chalk.bgBlack.bold.green(`Hakuna Matata, ${username}! You've set the new highscore in the game. Please send us the screenshot of your score to get mentioned in our Insta Story!
    `));
  } else{
    console.log(`Nice try, ${username}. You should watch more Disney movies to be the Top scorer. ;)
    
    `);
  }
}


if (userChoice=== "y"){
  while ( userChoice === "y"){
    console.clear();
    gameBegins();
    userChoice = readlineSync.question(chalk.bgBlack.bold.red(`Do you want to try again? Press "y" and 'Enter' key to Restart the Quiz or any key and 'Enter' key to Exit...  `));
    userScore = 0;

  }
  console.log(chalk.bgBlack.bold.green(`Bye, ${username}. Please, visit us again.`));
  

} 