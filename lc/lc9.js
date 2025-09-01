
/* Javascript Loops and break and continue statements */

/* 
  while loop
  do-while loop
  for loop
  for-in loop
  for-of loop
*/

/* while loop */

/* syntax */

// while(condition){
//   //print statement
//   // after thought
// }

{
  let num = 0

  while (num < 10) {
    console.log(`while loop ${num}`);
    num++;
  }
}

/* do-while loop */

/* syntax */

// do{
// // print statement
// // after thought
// }while(condition)

{
  let num = 0

  do {
    console.log(`do-while loop ${num}`);
    num++;
  } while (num > 5)
}

/* for loop */

/* syntax */

// for(initilization , condition , afterthought){
//   // print statement
// }

{
  for (let i = 10; i > 0; i--) {
    console.log(`for loop ${i}`);
  }
}
