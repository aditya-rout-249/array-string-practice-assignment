// includes  problems solved on array using different array methods

// Using random array of name beers
const beers = ["budweiser magmun", "Kf", "calsberg", "corona", "bira"];

// using push method to add beer brand
beers.push("lemount");

// use cases of array.from method
// an object to be passed in array.from
const employes = {
  id1: {
    name: "Vinod",
  },
  id2: {
    name: "Abbas",
  },
};

// simple Array to have employe details as empDetails
const empDetails = Array.from(employes);
console.log(empDetails);

// using from with callback function
const quantity = Array.from(beers, (beer, index) => {
  return beer + ":" + index;
});
console.log(quantity);

// use of array.at methdos to find elemet at an index
console.log(beers.at(4));

// calling at on a non-Array object
const obj = {
  length: 3,
  0: "vinod",
  1: "abbas",
  2: "Khalid",
};

console.log(Array.prototype.at.call(obj, 0));

// use of array concat Method
const order = quantity.concat("lemonTea : 7");
console.log(order);
const snacks = ["peanuts", "fries", "cheese", "puffcorn"];

// using conact for nested array
const party = beers.concat(snacks);
console.log(party);

// using copywith method with use case to provide (target) , (target,start, end)
const repeat = beers.copyWithin(3);
const repeatOrder = order.copyWithin(0, 4, 6);
console.log(repeat);

// using copy array.entries() to get iterable with key value pair
const nextItem = order.entries();
console.log(nextItem.next().value);
console.log(nextItem.next().value);

// using array.every() method to check for test function
const lengthOfBeer = (element) => {
  return element.length > 1;
};
console.log(beers.every(lengthOfBeer));

console.log(
  beers.every((element, index) => {
    return (element + ":" + index).length > 2;
  })
);

// using array.fill method for passing different no. of arguments
const orderStuff = [...beers];
console.log(orderStuff.fill("kf ultra"));
console.log(orderStuff.fill("white", 2, 5));

// using array.filter method for passing diffrent no. of arguments
const kfUltra = orderStuff.filter((beer) => {
  return beer === "kf ultra";
});
console.log(kfUltra);

// while passing index with element beign parsed
console.log(
  orderStuff.filter((element, index) => {
    return (element + ":" + index).length > 7;
  })
);

// using use cases of find method
const numbers = [32, 47, 4747, 84949, 3992];

const greaterThan = numbers.find((number, index) => {
  return number + index > 4724;
});
console.log(greaterThan);

// using use case array.findIndex method
console.log(
  numbers.findIndex((number, index) => {
    return number + index < 4757;
  })
);

//Use case of findLast method to traverse array from last and find the first element that satisfies the condition
console.log(
  numbers.findLast((number, index) => {
    return number + index > 4757;
  })
);

// use case of findLastIndex of function
console.log(
  numbers.findLastIndex((number, index) => {
    return number + index > 4757;
  })
);

// Use Cases Of flat function
const orderTilNow = [beers, [snacks]];
console.log(orderTilNow.flat(1));

// use Cases of flatmap
const usingFlatMap = [beers, snacks].flatMap((element, index) => {
  return element + ":" + index;
});

console.log(usingFlatMap);

// use Cases of for each method
numbers.forEach(( element, index, array ) => {
  console.log(element, index, array.length);
  console.log(element * 10);
});

// use case on array.include() method
console.log(beers.includes("bira", 3));

// use case of array.indexOf()  method
console.log(beers.indexOf("kf", 1));

//use of Array.isArray to check whether passed arguments is an array object or not return tyoe boolean
console.log(Array.isArray(beers));

// use cases of Array.join() while passing an array
const joinedBeers = beers.join(" Drink :-");
console.log(joinedBeers);

// use of array.keys() method
const iterateOrder = order.keys();

// use cases array.lastIndexOf() method return the index of last occurence of an object in an array
console.log(beers.lastIndexOf("Kf", 3));

// use cases of array.map() return a new array by passing each element of calling array to callback passed
const iterateMap = numbers.map((element, index, array) => {
  return element + index + array.length;
});
console.log(iterateMap);

//use cases of array.of() method return an array of all the passed arguments
const totalItems = Array.of(...repeatOrder);
console.log(totalItems);

// use of array.pop method to remove elemnt from last
totalItems.pop();
console.log(totalItems);

// use of array.Reduce method
const initialString = "";
const beersObject = beers.reduce((returnString, element, index) => {
  return returnString + element;
}, initialString);
console.log(beersObject);

// use of array.Reduceright method
const orderFromLast = order.reduceRight((finalOrder, element, index) => {
  return finalOrder.concat(index + "-" + element);
}, []);
console.log(orderFromLast);

// use cases array.reverse method it reverses the order of original array
console.log(beers.reverse());

// array.shift method to remove element from start
console.log(repeat.shift());

// use case of array.slice method to get shallow copy specifc part
// start and end index of require array segment is passed as argument
const partOrder = order.slice(2, 5);
console.log(partOrder);

// use cases of some to return if any one elemnt in array satisfies the   condition
console.log(
  numbers.some((value, index) => {
    return value + index > 3000;
  })
);

// use cases of sort function we can pass function for comparison as we want
const sortedArray = numbers.sort();

const beerSorted = beers.sort((beer1, beer2) => {
  if (beer1 < beer2) {
    return -1;
  } else {
    return 1;
  }
});

//use cases of  splice method  from array
console.log(numbers.splice(2, 0, 12, 233));

// use case for to tolocalString from array
console.log(beers.toLocaleString());

// use cases for unshift to add element to start of the array
beers.unshift('brocode' ,'hunter');
