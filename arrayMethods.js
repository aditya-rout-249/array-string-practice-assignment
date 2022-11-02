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
const empDetails = Array.from(employes)
console.log(empDetails)   

// using from with callback function
const quantity = Array.from(beers, (beer, index) => {
  return beer + ":" + index;
});
console.log(quantity);

// use of array.at methdos to find elemet at an index
console.log(beers.at(4))

// calling at on a non-Array object
const obj = {
    length : 3,
    0: 'vinod',
    1: 'abbas',
    2: 'Khalid'
}

console.log(Array.prototype.at.call(obj, 0)); 
  
// use of array concat Method
const order = quantity.concat("lemonTea : 7");
console.log(order);
const snacks = ['peanuts', 'fries', 'cheese', 'puffcorn'];

// using conact for nested array
const party = beers.concat(snacks);
console.log(party);

// using copywith method with use case to provide (target) , (target,start.end)
const repeat = beers.copyWithin(3);
const repeatOrder = order.copyWithin(0, 4, 6);
console.log(repeat);

// using copy array.entries() to get iterable with key value pair
const nextItem = order.entries();
console.log(nextItem.next().value);
console.log(nextItem.next().value);

// using array.every() method to check for test function

const lengthOfBeer = (element) =>{

    return element.length > 1;
}
console.log(beers.every(lengthOfBeer));

console.log(beers.every((element,index) => {
    return (element+':'+index).length > 2
  })
);

