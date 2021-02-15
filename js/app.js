'use strict';

//Welcoming

let inputName = prompt ('Enter Your Name Please:', 'Mohammad');

alert ( 'Welcome ' + inputName + '!' );


// Guessing Game:
//Q1
let photography = prompt ('Do I Enjoy Photography?', 'y' );
photography = photography.toLowerCase();

if (photography==='y')
{
  //console.log('Correct Answer! Yes, I Enjoy Photography? ');
  alert ('Correct Answer! Yes, I Enjoy Photography? ');
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
} else {
  alert ('Wrong Answer! NO, I Am a Sweet-tooth ');
}



