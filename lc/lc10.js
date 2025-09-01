/* Javascript Loops and break and continue statements */

/* 
  while loop
  do-while loop
  for loop
  for-in loop
  for-of loop
*/

/* Array */

{
  let newArray = [];
  let NewArray = new Array();

  console.log(newArray);
  console.log(NewArray);

  let array = [10, 20, 30, 40, 50];
  console.log(array);

  let newarray = new Array(10, 20, 30, 40, 50);
  console.log(newarray);
}

{
  let array = [10];
  console.log(array);

  let newarray = new Array(20);
  console.log(newarray);
}

{
  let array = ["click", 10, true, null, 10.10]

  console.log(array);

  console.log(array[0]);
  console.log(array[1]);
  console.log(array[2]);
  console.log(array[3]);


  for (value of array) {
    console.log(value * 2);
  }

  let str = "Hello Java script!!!"

  for (char of str) {
    console.log(char);
  }

  console.log(str.length);

}

/* Object */

{
  let profile = {
    name: "rakesh",
    age: 30,
    proffesion: "developer"
  }

  console.log(profile.name);
  console.log(profile["name"]);

  for (key, value in profile) {
    console.log(key);
    console.log(value);
  }
}