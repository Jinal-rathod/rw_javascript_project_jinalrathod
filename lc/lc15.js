/* javascript Math.Object Method */

// The Math namespace object contains static properties and methods for mathematical constants and functions.

// Math.E
{

  let math = Math.E
  console.log(math);

}

//Math.PI
{

  let math = Math.PI
  console.log(math);

}

// Math.Pow()
{

  let math = Math.pow(4, 5)

  console.log(math);

}

// Math.ceil()
{

  let math = Math.ceil(23.01)

  console.log(math);

}

// Math.floor()
{

  let math = Math.floor(-45.50)

  console.log(math);

}

// Math.trunc()
{

  let math = Math.trunc(-78.90)

  console.log(math);

}

// Math.max() / Math.min()
{

  let arr = [45, 12, 1, 89, 101, 576]

  let newarray = [...arr]

  console.log(typeof arr);

  console.log(newarray);


  // let math = Math.max(45 , 12 , 1 , 89 , 101 , 576)
  let math = Math.max(...newarray)
  let math1 = Math.min(45, 12, 1, 89, 101, 576)

  console.log(math);
  console.log(math1);

}

// Math.sqrt()
{

  let math = Math.sqrt(625)

  console.log(math);

}

// Math.log() / Math.log2() / Math.log10()
{

  let math = Math.log(10)
  let math1 = Math.log2(10)
  let math10 = Math.log10(10)

  console.log(math);
  console.log(math1);
  console.log(math10);

}

// Math.random()
{

  let math = Math.floor(Math.random() * 10000)

  console.log(math);

}

// Math.sign()
{

  let math = Math.sign()

  console.log(math);

}

// Math.abs()
{

  let math = Math.abs(-45.45)

  console.log(math);

}

// Math.sin() / Math.cos() / Math.tan()
{

  // let math = degree * Math.PI / 180

  // let math =  Math.sin(90 * Math.PI / 180)

  let mathcos = Math.cos(90 * Math.PI / 180)

  // console.log(math);
  console.log(mathcos);

}

// Math.round()
{

  let math = Math.round(21.53)

  console.log(math);
}