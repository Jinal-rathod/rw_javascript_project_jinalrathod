/* Javascript Map.Object() Method */

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

{
  let map = new Map([["odrer1" , "HTML"] , ["order2" , "CSS"] , ["odrer3" , "JavaScript"]]).forEach(printMap)

  console.log(map);

  function printMap(key , value , map){
    console.log(`[${key}] = ${value}`);
  }

  let map2 = new Map();
  
  // map.set(key , value)
  map2.set("order1" , "HTML")
  map2.set("order2" , "CSS")
  map2.set("order3"  , "JavaScript")

  // map.has(key)
  let result = map2.has("order4")
  console.log(result);
  
  // map.delete(key)
  map2.delete("order2")

  // map.clear()
  map2.clear()

  console.log(map2);

  // map.get(key)
  let get = map2.get("order2")
  console.log(get);

  // map.size
  console.log(map2.size);

  // map.keys()
  let iteration = map2.keys()
  console.log(iteration.next().value);
  console.log(iteration.next().value);
  console.log(iteration.next().value);
  console.log(iteration.next().value);

  // map.entries()
  let entries = map2.entries()
  console.log(entries.next().value);
  console.log(entries.next().value);
  console.log(entries.next().value);
  console.log(entries.next().value);

  // map.values()
  let values = map2.values()
  console.log(values.next().value);
  console.log(values.next().value);
  console.log(values.next().value);
  console.log(values.next().value);
  
}