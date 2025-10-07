// Javascript Object and It's Method

// 1. Js Object
// 2. Object Properties
// 3. Object Method
// 4. Object with Array
// 5. Array with Object
// 6. Looping through Objects & Arrays
// 7. Object Access with Conditions
// 8. Make Qoutes

{
    // an object in javascript is a collection of key : value pairs.

    // Keys are called Properties.

    // Values can be any data type (string , number , function , array)

    // Dot Notation

    let student = {
        name: "Manthan",
        age: 21,
        batch: "VIVEK-JAVASCRIPT_09_10 - 9:00AM",
    };


    console.log(student.name);
    console.log(student.age);
    console.log(student.batch);
}

{
    // Keys are the variable inside Object 

    // you can access the value inside object Bracket Notation

    let student = {
        name: "Manthan",
        age: 21,
        batch: "VIVEK-JAVASCRIPT_09_10 - 9:00AM",
    };

    console.log(student["name"]);
    console.log(student["age"]);
    console.log(student["batch"]);
}

{
    // A method is a function defined inside an object 

    let person = {
        firstname: "Jigar",
        lastname: "Pipaliya",
        fullname: function () {
            return this.firstname + " " + this.lastname
        }
    }

    console.log(person.fullname());

}

{
    let person = {
        firstname: "Jigar",
        lastname: "Pipaliya",
        marks: [10, 20, 30, 40, 50],
        fullname: function () {
            return this.firstname + " " + this.lastname
        }
    }

    console.log(person.marks[2]);

}

{
    let users = [
        { id: 1, name: 'jigar', marks: 45 },
        { id: 2, name: 'Kiran', marks: 56 },
        { id: 3, name: 'Khushal', marks: 89 },
        { id: 4, name: 'Jinkal', marks: 78 }
    ]

    console.log(users[2].name);
}


{
    let users = [
        { id: 1, name: 'jigar', marks: 45 },
        { id: 2, name: 'Kiran', marks: 56 },
        { id: 3, name: 'Khushal', marks: 89 },
        { id: 4, name: 'Jinkal', marks: 78 }
    ]

    for (let i = 0; i < users.length; i++) {
        console.log(users[i].name + "__" + users[i].marks);
    }
}

{
    let students = [
        { name: 'Satish', marks: 78 },
        { name: 'Rakesh', marks: 98 },
        { name: 'Prakash', marks: 80 }
    ]

    for (let i = 0; i < students.length; i++) {
        if (students[i].marks >= 80) {
            console.log(students[i].name + " passed with " + students[i].marks);
        }
    }
}

{
    // Quotes Maker

    let quote = [
        { author: 'ઝવેરચંદ મેઘાણી (Zaverchand Meghani)', text: 'બાળકને સારું ખાવાનું, પાણી અને સ્વચ્છ હવા જ શ્રેષ્ઠ દવા છે.' },
        { author: "Mahatma Gandhi (મહાત્મા ગાંધી)", text: "તમે જે બદલાવ દુનિયામાં જોવા માંગો છો તે બનો." },
        { author: "Kavi Kalapi (કવિ કલાપી)", text: "હા ! પસ્તાવો – વિપુલ ઝરણું સ્વર્ગથી ઊતર્યું છે, પાપી તેમાં ડૂબકી દઈને પુણ્યશાળી બને છે!" },
        { author: "Kavi Narmad (કવિ નર્મદ)", text: "ડગલું ભર્યું કે ના હઠવૂં ના હઠવૂં" }
    ]

    let randomIndex = Math.floor(Math.random() * quote.length)

    console.log(quote[randomIndex].text + " " + quote[randomIndex].author);

}