'use strict';

let score = 0;

//Welcoming

let inputName = prompt ('Enter Your Name Please:', 'Furat');

alert ( 'Welcome ' + inputName + '!' );


// Guessing Game:
//Q1
let photography = prompt ('Do I Enjoy Photography?', 'y' );
photography = photography.toLowerCase();

if (photography==='y')
{
  //console.log('Correct Answer! Yes, I Enjoy Photography? ');
  alert ('Correct Answer! Yes, I Enjoy Photography? ');
  score = score + 1;

} else {
  alert ('Wrong Answer! NO, I Enjoy Photography? ');
}

//----------------------------------------------
//Q2
let siblings = prompt ('Do I Have Older Siblings?' , 'n' );
siblings = siblings.toLowerCase();

if (siblings==='n')
{
  //console.log('Correct Answer! Yes, I Do Not Have Older Siblings ');
  alert ('Correct Answer! Yes, I Do Not Have Older Siblings ');
  score = score + 1;
} else {
  alert ('Wrong Answer! NO, I Do Not Have Older Siblings ');
}

//----------------------------------------------
//Q3
let carDriving = prompt ('Can I Drive a Car?' , 'n' );
carDriving = carDriving.toLowerCase();

if (carDriving==='n')
{
  //console.log('Correct Answer! Yes, I Can not Drive a Car Yet ');
  alert ('Correct Answer! Yes, I Can not Drive a Car Yet ');
  score = score + 1;
} else {
  alert ('Wrong Answer! NO, I Can not Drive a Car Yet ');
}


//----------------------------------------------
//Q4
let catPerson = prompt ('Am I a Cat Person?' , 'y' );
catPerson = catPerson.toLowerCase();


if (catPerson==='y')
{
  //console.log('Correct Answer! Yes, I Am a Cat Person ');
  alert ('Correct Answer! Yes, I Am a Cat Person ');
  score = score + 1;
} else {
  alert ('Wrong Answer! NO, I Am a Cat Person ');
}



//----------------------------------------------
//Q5
let sweetTooth = prompt ('Am I a Sweet-tooth?' , 'y' );
sweetTooth = sweetTooth.toLowerCase();

if (sweetTooth==='y')
{
  //console.log('Correct Answer! Yes, I Am a Sweet-tooth ');
  alert ('Correct Answer! Yes, I Am a Sweet-tooth ');
  score = score + 1;
} else {
  alert ('Wrong Answer! NO, I Am a Sweet-tooth ');
}

//Q6 (Number)
let numberInput = prompt ('Lets PLAY! | Guess What Number I Have In My Head ! ' , '5')

for (let i=0 ; i< 3 ;i++) // 4 attempts
{

  if (numberInput == 5)
  {
    alert ('CONGRAGULATIONS!! You Guessed! Its : 5'); // Equal 5
    score = score + 1;
    break;

  } else if ( numberInput > 5)  // Bigger than 5
  {
    numberInput = prompt ('TRY AGAIN : Too High!' , '5');
    
  } else if ( numberInput < 5)  //less Than 5
  {
    numberInput = prompt ('TRY AGAIN : Too Low!' , '5');
  } 
  
}


//Q7

let arrChocolate =['galaxy','snickers','twix'];
let answer = prompt ('Whats My favorite chocolate?' , 'Galaxy').toLowerCase ();
let check = false;

for (let i=0; i<5 ;i++)
{ check= false;
  for (let i=0; i<3 ;i++)
  {
    if (answer == arrChocolate[i])
    {
      check = true;
    }
  
  }
  if (check== true)
  {
    alert ('CONGRAGULATIONS!! You Guessed! MY Favorites are : Galaxy, Mars, Twix '); // Right answer
    score = score + 1;
    break;
    
  } else {
    answer = prompt ('Try Again!' , 'Galaxy').toLowerCase (); // Another Attemp
  }
} 

if (answer != arrChocolate[0] && answer != arrChocolate[1] && answer != arrChocolate[2] )
{
alert ('You Didnt Guess Right! MY Favorites are : Galaxy, Mars, Twix '); //Out of attempts answer
 
}


alert ('YOUR SCORE IS  :' + score + '/ 7' );



