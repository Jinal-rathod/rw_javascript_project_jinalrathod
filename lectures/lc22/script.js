{
  // Array.prototype.at()

  // // at(index)

  {
    // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // let result = arr.at(5)
    // console.log(result);
  }

  // Array.prototype.copyWithin()

  // The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.

  // copyWithin(target, start)
  // copyWithin(target, start, end)

  {
    // let arr = ['🍕', '🍔', '🍟', '🌭', '🍿', '🧀', '🍩', '🎂', '🍰', '☕', '🌮', '🍜', '🍽', '🧂']
    // console.log(arr);
    // let result = arr.copyWithin(3)
    // console.log(result);
    // let result1 = arr.copyWithin(3, 7)
    // console.log(result1);
    // let result2 = arr.copyWithin(3, 5, 8)
    // console.log(result2);
  }

  // Array.prototype.entries()

  // The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.

  {
    // let arr = ['🍕','🍔','🍟','🌭','🍿','🧀','🍩','🎂','🍰','☕','🌮','🍜','🍽','🧂']
    // let result = arr.entries()
    // console.log(result.next().value);
    // console.log(result.next().value);
    // console.log(result.next().value);
    // console.log(result.next().value);
    // console.log(result.next().value);
    // console.log(result.next().value);
    // console.log(result.next().value);
    // console.log(result.next().value);
    // console.log(result.next().value);
    // console.log(result.next().value);
    // console.log(result.next().value);
    // console.log(result.next().value);
    // console.log(result.next().value);
    // console.log(result.next().value);
    // console.log(result.next().value);
  }

  // Array.prototype.every()

  // The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

  {
    // const data = (item) => item < 50
    // const array1 = [1, 30, 39, 29, 10, 13, 56];
    // console.log(array1.every(data));
  }

  // Array.prototype.fill()

  // fill(value)
  // fill(value, start)
  // fill(value, start, end)

  {
    // const array = [1, 2, 3, 4];
    // let result = array.fill('a')
    // let result1 = array.fill('a', 2)
    // let result2 = array.fill('a', 1, 3)
    // console.log(result);
    // console.log(result1);
    // console.log(result2);
  }

  // Array.prototype.filter()

  // The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

  {
    // const words = ["spray", "elite", "exuberant", "destruction", "present"];
    // const result = words.filter(w => w.length > 5 && w.length < 8)
    // const profiles = [
    //     {
    //         name: 'rohit',
    //         age: 12
    //     },
    //     {
    //         name: 'ronak',
    //         age: 20
    //     },
    //     {
    //         name: 'roshan',
    //         age: 45
    //     },
    //     {
    //         name: 'romil',
    //         age: 30
    //     },
    //     {
    //         name: 'rohan',
    //         age: 23
    //     },
    //     {
    //         name: 'roman',
    //         age: 12
    //     },
    // ]
    // let result1 = profiles.filter((age) => age.age == 12).map((name) => name.name)
    // console.log(result1);
  }
}
