// this programme consist of all the javaScript use cases of all the string methods

// Varibale string named as namedString
const namedString =
  "aryan249 is github user name ji i jo aryan@gamil.com zimbabe@nisarg.com";

// Length of namedString variable
console.log(namedString.length);

// use cases to create iterator from a string
const stringToArray = [];
const stringIterator = namedString[Symbol.iterator]();
stringToArray.push(stringIterator.next().value);


console.log(stringToArray);

// using test case to get charactior at specific index in string
console.log(namedString.at(9));

// using test case for charmatchAt method of string

let index = 0;
while (namedString.charAt(index)) {
  stringToArray.push(namedString.charAt(index));
  index += 1;
}

//charCodeAt return charactor code of charactor UTF-16
console.log(namedString.charCodeAt(0));

// concat method usecase of strings
namedString.concat("Monty_942", "Dilip_Singh");
console.log(namedString);

// endsWith use Cases of string Methods
console.log(namedString.endsWith("Dilip_Singh"));

// how to string can be form using UTF-16 char code numbers to get a string
console.log(String.fromCharCode(1234, 2839, 223, 333));

// Use case for includes method of string to find whether string has username or not
const validateString = (str = "", userName) => {
  console.log(str.includes(userName, 0));
};
console.log(namedString, "aryan_249");

// use Case for indexOf Method finds index of first occurence of passed string
console.log(namedString.indexOf("github"));

// lastIndexof method of strings  return last occurence of passed string
console.log(namedString.lastIndexOf("name"));

// function to demonstarte use of match method of string
const regex = / [a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
const emailValidator = (email) => {
  return email.match(regex);
};
console.log(emailValidator("user@gmail.com"));

// use case for matchAll methods of
console.log(namedString.matchAll(regex));

// use case of padENd string method for padding at end of string and also including padstart at Same time
// here DOB Stands For date of birth all passed arguments are string type DOB => Date of birth
const paddPassword = (password, firstname, DOB) => {
  password.padEND(password.length + firstname.length, firstname);
  password.padStart(password.lenght + DOB.lenght, DOB);
  return password;
};
paddPassword("--@vikram098", "vicky", "29/04/2009");

// Repeat method use case of string of a given type
console.log(namedString.repeat(100));

// Replace ReplaceAll Methods of string which takes pattern from a RegEx
namedString.replace(/j[a-z]/g, "SIMBa");
console.log(namedString);
namedString.replaceAll(/j[a-z]/g, "simba");
console.log(namedString);

// to search for emails in a paragraph that uses strings Search method for task
const searchTotalMails = (paragraph) => {
  return paragraph.search(/ [a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
};

// Function to extract significant figures from a specific pattern using slice Method of Strings
const findSignificantFigures = (hashValue) => {
  const significantFigure = hashValue.slice(16, hashValue.length - 4);

  return significantFigure;
};

// use cases for split method of strings
const splitString = namedString.split(" ");
console.log(splitString);

// use case for startwith method of to find
console.log(namedString.startsWith("a"));

// use case for substring to determine part of string between start and end of posiyion indexex
console.log(namedString.substring(0, 7));

// function to convert user credebtials to lower case to send them in send to save
const processUserData = (firstName, email, address) => {
  const changedFirstName = firstName.toLowerCase();
  const changedEmail = email.toLowerCase();
  const changedAddress = address.toLowerCase();

  return { changedAddress, changedEmail, changedFirstName };
};
console.log(processUserData('vikrant' , 'viks09@gmail.com', 'north2 19 bhag apartment 456001'));

// use case of ToUppercase String Methods
console.log(namedString.toLowerCase());

// use case of trim method
const removeWhiteSpace = (userAddress) => {
   userAddress.trim();

   return userAddress;
};

console.log(removeWhiteSpace('   new rani bhag  '))