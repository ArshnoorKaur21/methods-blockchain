/*
cipher.final() returns a buffer or string containing the value of cipher object
If an output encoding is specified, a String is returned. If an output encoding is not specified a buffer is returned.
Calling the cipher.final method more than once will throw an error.

syntax:- cipher.final([outputEncoding])

outputEncoding- it takes the outputEncoding as parameter. the input type for this parameter is string.
possible input values are hex,base64 
*/

//retrieveing keyfor cipher object
/*
cyrpto.scryptSync() is an inbuilt function which provides synchronous scrypt implementation in nodejs.scrypt is 
password based key derivation function
https://www.geeksforgeeks.org/node-js-crypto-scryptsync-function/
*/

const crypto = require('crypto');

// Initialising the AES algorithm
const algorithm = 'aes-192-cbc';
// Initialising the password used for generating key
const password = '12345678';

// Retrieving key for the cipher object
const key = crypto.scryptSync(password, 'salt', 24);

// Initializing the static iv
const iv = Buffer.alloc(16, 0);

// Initializing the cipher object to get cipher
const cipher = crypto.createCipheriv(algorithm, key, iv);
const cipher2 = crypto.createCipheriv(algorithm, key, iv);

//Getting the string value as outputEncoding is defined
let hexValue = cipher.final('hex');
let base64Value = cipher2.final('base64');

// Printing the result...
console.log("Hex String:- " + hexValue);
console.log("Base64 String:- " + base64Value)