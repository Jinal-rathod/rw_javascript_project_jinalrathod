/* JavaScript String */

// at(index)

{
    let str = "This is Javascript String Method."
    //  012345678901234567890123456789012
    //  123456789012345678901234567890123

    let atmethod = str.at(0)
    let atmethod1 = str.at(20)
    let atmethod2 = str.at(-50)

    console.log(atmethod);
    console.log(atmethod1);
    console.log(atmethod2);

}

// charAt(index)

{
    let str = "This is Javascript String Method."

    let charAtMethod = str.charAt(0)
    let charAtMethod1 = str.charAt(20)
    let charAtMethod2 = str.charAt(33)

    console.log(charAtMethod);
    console.log(charAtMethod1);
    console.log(charAtMethod2);
}

// charCodeAt(index)

{
    let str = "This is Javascript String Method."

    let charCodeAtMethod = str.charCodeAt(0)
    let charCodeAtMethod1 = str.charCodeAt(25)

    console.log(charCodeAtMethod);
    console.log(charCodeAtMethod1);
}

// concat(str1)
// concat(str1, str2)
// concat(str1, str2, /* …, */ strN)

{
    let str1 = "Hello"
    let str2 = "World"
    let str3 = "!"

    let str = str1.concat(str2, str3)

    console.log(str);
}

// includes(searchString)
// includes(searchString, position)

{
    let str = "My Cat very cute but my dog is danger but Dog very honest but my cat is not faithfull."

    let includesMethod = str.includes("My", 10)
    let includesMethod1 = str.includes("My", -1)
    let includesMethod2 = str.includes("My")

    console.log(includesMethod);
    console.log(includesMethod1);
    console.log(includesMethod2);
}

// indexOf(searchString)
// indexOf(searchString, position)

{
    let str = "My Cat very cute but my dog is danger but Dog very honest but my cat is not faithfull."
    //  0123456789012

    let indexOfMethod = str.indexOf("Dog")
    let indexOfMethod1 = str.indexOf("T")
    let indexOfMethod2 = str.indexOf("M", 100)

    console.log(indexOfMethod);
    console.log(indexOfMethod1);
    console.log(indexOfMethod2);
}

// self Learning Methods

lastIndexOf()
{
    let str = "My Cat very cute but my dog is danger but Dog very honest but my cat is not faithfull."

    let lastIndexOfMethod = str.lastIndexOf("Dog")
    let lastIndexOfMethod1 = str.lastIndexOf("T")
    let lastIndexOfMethod2 = str.lastIndexOf("M", 100)

    console.log(lastIndexOfMethod);
    console.log(lastIndexOfMethod1);
    console.log(lastIndexOfMethod2);
}

// repeat()
{
    let mood = "Sad :( ";
    let repeatMethod = mood.repeat(2);

    console.log(`I feel ${repeatMethod}`);
}

// search()

// toLowerCase()

// toString()
{
    let stringObj = new String("foo");
    console.log(stringObj);

    let toStringMethod = stringObj.toString();
    console.log(toStringMethod);
}

// toUpperCase()

// trim()

// trimEnd()

// trimStart()

valueOf()
{
    let stringObj = new String("foo");
    console.log(stringObj);

    let valueOfMethod = stringObj.valueOf();
    console.log(valueOfMethod);

    let name = new String("Jinal");
    console.log(name.valueOf());

}

// 2/9/2025

// slice(indexStart)
// slice(indexStart, indexEnd)

{
    let str = "Hello, How are you!"

    let slice1 = str.slice(20)
    let slice2 = str.slice(-20)
    let slice3 = str.slice(10, 27)
    let slice4 = str.slice(-15, 20)

    console.log(slice1);
    console.log(slice2);
    console.log(slice3);
    console.log(slice4);

}

// substring(indexStart)
// substring(indexStart, indexEnd)

{
    let str = "Hello, How are you!"

    let substring1 = str.substring(0)
    let substring2 = str.substring(-1)
    let substring3 = str.substring(20, -30)

    console.log(substring1);
    console.log(substring2);
    console.log(substring3);
}