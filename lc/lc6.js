// 1. Grade Calculation Based on Marks

{
  let marks = 45
  let grade = (marks >= 90) ? "A+" :
    (marks >= 80) ? "A" :
      (marks >= 70) ? "B" :
        (marks >= 60) ? "C" :
          (marks >= 50) ? "D" : "Fail"

  console.log("Grade:", grade);

  // condition ? "option" : "option2"  
}

// 2. Bill Calcuation

{
  let quantity = 45
  let price = 200
  let total = quantity * price
  let discount = (total > 1000) ? total * 0.1 : 0

  let finalbill = total - discount

  console.log(finalbill);
}

// 3. Simple Interest

{
  let principal = 5000
  let rate = 10
  let time = 2

  let si = (principal * rate * time) / 100

  console.log(si);
}

//4. Employee Salary

{
  let basic = 60000
  let hra = basic * 0.2
  let da = basic * 0.1
  let gross = basic + hra + da

  console.log("Salary", gross);
}

//5. Swapping Two Number

{
  let a = 10, b = 20;

  console.log(a, b);

  // [a , b] = [b , a]

  let x = [a, b]
  let y = [b, a]

  let z = (y = x)

  console.log(a, b);

  console.log(x);
  console.log(y);
  console.log(z);
}


//6. Basic Number Methemetical Calculation


{
  // let x = 20 + '20' + 20
  // let x = 20 + 20 + '20' + 20
  // let x = 20 + 20 + '20' + 20 + 20 + 20 + 20 + 20 + 20
  // let x = 20 + 20 + '20' - 20 + 20 + 20 + 20 + 20 + 20
  // let x = 20 + 20 + '20' - 20 + '20' + 20 + 20 + 20 + 20
  let x = 20 + 20 + '20' - 20 + '20' - 20 + 20 + 20 + 20
  // 4020 - 20 = 4000 + 100 = 4100
  // 4020 - 20 = 40002020202020

  // 4020 - 20 = 4000 + 20 = 400020 - 20 = 400000 + 60 = 400060


  console.log(x);

}