'use strict';

let score = 0;


//Welcoming -------------------------------------------------------------------

let inputName = prompt ('Enter Your Name Please:', 'Furat');

alert ( 'Welcome ' + inputName + '!' );



git remote set-url origin https://github.com/furatmalkawi29/Guessing-Game.git


// Guessing Game:
//Q1

  let photography = prompt ('Do I Enjoy Photography? (y/n) or (yes/no)' , 'y' ).toLowerCase(); //get input

    while (photography !== 'n' && photography !== 'no' && photography !=='yes' && photography !== 'y' ) 
    { // check input //run only in one case: all statements : false -----> input != y, yes, n, no 
      photography = prompt ('Error: Enter (y/n) or (yes/no)', 'y' ).toLowerCase(); // keep asking for input
    }


    if (photography==='y'|| photography==='yes') // if answer is yes or y ---> alert
    {
      //console.log('Correct Answer! Yes, I Enjoy Photography? ');
      alert ('Correct Answer! Yes, I Enjoy Photography? ');
      score = score + 1;
    } 
    
    else if (photography==='n'|| photography==='no') // check if answer is no or n ----> alert
    {
      alert ('Wrong Answer! NO, I Enjoy Photography? ');
    }
    
  



//-----------------------------------------------------------------------------
//Q2
let siblings = prompt ('Do I Have Older Siblings? (y/n) or (yes/no)' , 'n' ).toLowerCase();;

while (siblings !== 'n' && siblings !== 'no' && siblings !=='yes' && siblings !== 'y' ) 
{ // check input //run only in one case: all statements : false -----> input != y, yes, n, no 
  siblings = prompt ('Error: Enter (y/n) or (yes/no)', 'y' ).toLowerCase(); // keep asking for input
}

if (siblings==='n' || siblings==='no') //check if answer no / n  ----> alert
{
  //console.log('Correct Answer! Yes, I Do Not Have Older Siblings ');
  alert ('Correct Answer! Yes, I Do Not Have Older Siblings ');
  score = score + 1;
} 



else if (siblings==='y'|| siblings==='yes') // check if answer is yes or y  ----> alert
{
  alert ('Wrong Answer! NO, I Do Not Have Older Siblings ');
}





//-------------------------------------------------------------------------
//Q3
let carDriving = prompt ('Can I Drive a Car? (y/n) or (yes/no)' , 'n' );
carDriving = carDriving.toLowerCase();


while (carDriving !== 'n' && carDriving !== 'no' && carDriving !=='yes' && carDriving !== 'y' ) 
{ // check input //run only in one case: all statements : false -----> input != y, yes, n, no 
  carDriving = prompt ('Error: Enter (y/n) or (yes/no)', 'y' ).toLowerCase(); // keep asking for input
}


if (carDriving==='n'|| carDriving==='no') //check if answer no / n
{
  //console.log('Correct Answer! Yes, I Can not Drive a Car Yet ');
  alert ('Correct Answer! Yes, I Can not Drive a Car Yet ');
  score = score + 1;
} 



else if (carDriving==='y'|| carDriving==='yes') // check if answer is yes or y 
{
alert ('Wrong Answer! NO, I Can not Drive a Car Yet ');
}





//-----------------------------------------------------------------------------
//Q4
let catPerson = prompt ('Am I a Cat Person? (y/n) or (yes/no)' , 'y' );
catPerson = catPerson.toLowerCase();

while (catPerson !== 'n' && catPerson !== 'no' && catPerson !=='yes' && catPerson !== 'y' ) 
{ // check input //run only in one case: all statements : false -----> input != y, yes, n, no 
  catPerson = prompt ('Error: Enter (y/n) or (yes/no)', 'y' ).toLowerCase(); // keep asking for input
}


if (catPerson==='y'|| catPerson==='yes') // check if answer is Yes or y 
{
  //console.log('Correct Answer! Yes, I Am a Cat Person ');
  alert ('Correct Answer! Yes, I Am a Cat Person ');
  score = score + 1;
} 


else if (catPerson==='n'|| catPerson==='no') // check if answer is no or n
{
  alert ('Wrong Answer! NO, I Am a Cat Person ');
}






//---------------------------------------------------------------------------
//Q5
let sweetTooth = prompt ('Am I a Sweet-tooth? (y/n) or (yes/no)' , 'y' );
sweetTooth = sweetTooth.toLowerCase();

while (sweetTooth !== 'n' && sweetTooth !== 'no' && sweetTooth !=='yes' && sweetTooth !== 'y' ) 
{ // check input //run only in one case: all statements : false -----> input != y, yes, n, no 
  sweetTooth = prompt ('Error: Enter (y/n) or (yes/no)', 'y' ).toLowerCase(); // keep asking for input
}

if (sweetTooth==='y'|| sweetTooth==='yes') // check if answer is Yes or y 
{
  //console.log('Correct Answer! Yes, I Am a Sweet-tooth ');
  alert ('Correct Answer! Yes, I Am a Sweet-tooth ');
  score = score + 1;
} 


else if (sweetTooth==='n'|| sweetTooth==='no') // check if answer is no or n
{
  alert ('Wrong Answer! NO, I Am a Sweet-tooth ');
}







//-------------------------------------------------------------------------------

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





//------------------------------------------------------------------------------------
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



//SCORE -----------------------------------------------------------------------------------------

alert ('YOUR SCORE IS  :' + score + '/ 7' ); //score



