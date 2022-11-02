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

