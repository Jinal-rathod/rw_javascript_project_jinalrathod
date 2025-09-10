/* Javascript String Methods */

/* String.replace() */

// replace(pattern, replacement)
// replaceAll(pattern, replacement)

{

  let str = "I think Ruth's Dog is cuter than your Dog!"

  let regex = /Dog/g

  // let result = str.replace(regex , "cat")
  let result1 = str.replaceAll(regex , "cat")

  console.log(result1); 
}