
// Javascript Array() Object Method

{
    let num = [1, 2, 3, 4];
    let num1 = num;
    let num2 = [...num];

    console.log(num);
    console.log(num1);
    console.log(num2);

    let result = num === num1;
    console.log(result);

    let array = [];
    console.log(array === num1);
    console.log(typeof []);
    console.log(typeof num);

    let newarray = new Array(1, 2, 3, 4);
    console.log(newarray);

    let resultarray = newarray === num1;
    console.log(resultarray);
}

{
    let array = [1, , 2, , 3]

    console.log(array);
    console.log(array.length);
    console.log(Object.keys(array));

}

{
    let array = []
    console.log(array.length);

    array.length = 20
    array[20] = "car"

    console.log(array);
    console.log(Object.keys(array));

}

// Array.from()

// Array.from(items)
// Array.from(items, mapFn)
// Array.from(items, mapFn, thisArg)

{
    let array = Array.from("123456789", (item) => item * 10)
    let array2 = Array.from("123456789")

    console.log(array2);

    array2.map((item) => {
        console.log(item + 10);
    })
}

// Array.isArray(value)

{
    let array = new Array()
    let result = Array.isArray(array)

    console.log(result);

}

// Array.of()
// Array.of(element1)
// Array.of(element1, element2)
// Array.of(element1, element2, /* …, */ elementN)

{
    let array = Array.of(1, 2, 3, 4, 5, 6)
    console.log(array);
}
