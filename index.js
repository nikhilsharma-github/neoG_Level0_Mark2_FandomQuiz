console.log("neoG_Level0_Mark2Assignment_02102023")
console.log("____________________________________")

// An input taking library 
let readlinesync=require('readline-sync')

// Variable to store score values 
let score=0

//An array of objects which has question, options and answer in a single object
let questions=[
  {
    question:"What is Professor Dumbledor's first name?",
    options:" A:Albert B:Albus C:Alberd ",
    answer:"B",
    value:"Albus"
  },
  {
    question:"What house is Draco Malfoy in?",
    options:" A:Gryffindor  B:Ravenclaw  C:Slytherin ",
    answer:"C",
    value:"Slytherin"
  },
  {
    question:"Who was the prisoner of Azkaban?",
    options:" A:Sirius Black  B:Peter Pettigrew C:Remus Lupin",
    answer:"A",
    value:"Sirius Black"
  },
  {
    question:"What was Harry Potter’s pet?",
    options:" A:Owl  B:Snake C:Rat",
    answer:"A",
    value:"Owl"
  }
]

function checkValues(question,answer){
  let input=readlinesync.question("Input Here : ")
  if(input==answer){
    console.log("Yay, you guessed it right")
    score+=1
  }
  else{
    console.log("Sorry, Try again, no worries")
  }
}

console.log("Welcome to neoG Mark1 Assignment")
console.log("????HARRY POTTER QUIZ????")

console.log("____________________________________")
for(let i=0;i<questions.length;i++){
  console.log("Here is the question "+(i+1))
  console.log(questions[i].question)
  console.log("Your options are : ")
  console.log(questions[i].options)
  checkValues(questions[i].question,questions[i].answer)
  console.log("____________________________________")
}
console.log("____________________________________")
console.log("The answers for the questions are as follows :")
for(let i=0;i<questions.length;i++){
  console.log(questions[i].question)
  console.log(questions[i].value)
}

console.log("____________________________________")
console.log("Your final score is : "+score)
console.log("THANKYOU FOR YOUR PARTICIPATION")