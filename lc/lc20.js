// Javascript Number() Object in Javascript

{
  let num = new Number(10)
  let num1 = Number(20)

  console.log(typeof num);
  console.log(typeof num1);
  
}

// isFinite()

{
  let infi = Number.isFinite(20/10)
  console.log(infi);
}

{
  let inti = Number.isInteger(10.43)
  let nun = Number.isNaN("box"/10)

  console.log(inti);
  console.log(nun);

}

//Number.prototype.toExponential()

{
  let value = 2600000000

  let expo = value.toExponential(0)
  let expo1 = value.toExponential(10)

  console.log(expo);
  console.log(expo1);
  
}

// Number.prototype.toFixed()

{
  let value = 27.566987
  let fix = value.toFixed()

  console.log(fix);
  
}

// toPrecision()

{
  let value = 200.456
  let pre = value.toPrecision(10)

  console.log(pre);
  
}

// toString()

{
  let value = 200
  let str = value.toString()

  console.log(str);
  
}