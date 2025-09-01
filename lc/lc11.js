/* JavaScript String */

// The String object is used to represent and manipulate a sequence of characters.

/* JavaScript String Methods */

/* 1. at(index) */
{
    let str = "Hello World!";

    let atMethod1 = str.at(6);
    let atMethod2 = str.at(-1);
    let atMethod3 = str.at();
    console.log(atMethod1);
    console.log(atMethod2);
    console.log(atMethod3);
}

/* 2. charAt(index) */
{
    let str = "Hello World!";

    let charAtMethod1 = str.charAt(6);
    let charAtMethod2 = str.charAt(-1);
    let charAtMethod3 = str.charAt();
    console.log(charAtMethod1);
    console.log(charAtMethod2);
    console.log(charAtMethod3);
}

/* 3. charCodeAt(index) */
{
    let str = "Hello World!";

    let charCodeAtMethod1 = str.charCodeAt(6);
    let charCodeAtMethod2 = str.charCodeAt(-1);
    let charCodeAtMethod3 = str.charCodeAt();
    console.log(charCodeAtMethod1);
    console.log(charCodeAtMethod2);
    console.log(charCodeAtMethod3);
}

/* 4. codePointAt(index) */
{
    let str = "Hello World!";

    let codePointAtMethod1 = str.codePointAt(6);
    let codePointAtMethod2 = str.codePointAt(-1);
    let codePointAtMethod3 = str.codePointAt();
    console.log(codePointAtMethod1);
    console.log(codePointAtMethod2);
    console.log(codePointAtMethod3);
}

/* 5.concat(str1) */  // concat(str1, str2) // concat(str1, str2, /* …, */ strN)

/* 6. endsWith(searchString) // endsWith(searchString, endPosition) */

/* 7. includes(searchString) // includes(searchString, position) */

/* 8. indexOf(searchString) // indexOf(searchString, position) */

/* 9. isWellFormed() */

/* 10. lastIndexOf(searchString) // lastIndexOf(searchString, position) */

/* 11. localeCompare(compareString) // localeCompare(compareString, locales) // localeCompare(compareString, locales, options) */

/* 12. match(regexp) */

/* 13. matchAll(regexp) */

/* 14. normalize() // normalize(form) */

/* 15. padEnd(targetLength) // padEnd(targetLength, padString) */
{
    let str1 = "Coco is so cold";
    let str2 = "200";

    let padEndMethod = str1.padEnd(25, ".");
    let padEndMethod2 = str2.padEnd(10);

    console.log(padEndMethod);
    console.log(padEndMethod2);

}

/* 16. padStart(targetLength) // padStart(targetLength, padString) */
{
    let str1 = "Coco is so cold";
    let str2 = "200";

    let padStartMethod1 = str1.padStart(25, ".");
    let padStartMethod2 = str2.padStart(10);

    console.log(padStartMethod1);
    console.log(padStartMethod2);

}

/* 17. repeat(count) */

/* 18. replace(pattern, replacement) */

/* 19. replaceAll(pattern, replacement) */

/* 20. search(regexp) */

/* 21. slice(indexStart) // slice(indexStart, indexEnd) */

/* 22. split(separator) // split(separator, limit) */

/* 23. startsWith(searchString) // startsWith(searchString, position) */
{
    let str = "Sunday is fun day !!!";

    let startsWithMethod1 = str.startsWith("Sun");
    console.log(startsWithMethod1);

    let startsWithMethod2 = str.startsWith("San", 3);
    console.log(startsWithMethod2);
}

/* 24. substring(indexStart) // substring(indexStart, indexEnd) */
{
    let str = "Beautiful";

    let substringMethod1 = str.substring(1, 3);
    console.log(substringMethod1);

    let substringMethod2 = str.substring(2);
    console.log(substringMethod2);
}

/* 25. toLocaleLowerCase() // toLocaleLowerCase(locales) */

/* 26. toLocaleUpperCase() // toLocaleUpperCase(locales) */

/* 27. toLowerCase() */
{
    let sentence = "THIS IS beautiful BUTTERFLY";
    let toLowerCaseMethod = sentence.toLowerCase();
    console.log(toLowerCaseMethod);
}

/* 28. toString() */

/* 29. toUpperCase() */
{
    let sentence = "This is BEAUTIFUL butterfly";
    let toUpperCaseMethod = sentence.toUpperCase();
    console.log(toUpperCaseMethod);
}

/* 30. toWellFormed() */

/* 31. trim() */
{
    let greeting = "   Hello world!   ";
    let trimMethod = greeting.trim();
    console.log(trimMethod);
}

/* 32. trimEnd() // trimRight() */
{
    let greeting = "   Hello world!   ";
    let trimEndMethod = greeting.trimEnd();
    console.log(trimEndMethod);
}

/* 33. trimStart() // trimLeft() */
{
    let greeting = "   Hello world!   ";
    let trimStartMethod = greeting.trimStart();
    console.log(trimStartMethod);
}

/* 34. valueOf() */