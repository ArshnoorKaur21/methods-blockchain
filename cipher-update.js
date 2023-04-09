/*
cipher.update() is used to update cipher with recieved data according to the given encoding format, if the encoding is
specified the data argument is string else data argument is buffer

cipher.update(data, [inputEncoding], [outputEncoding])

data – It takes the data as an input that is passed to update the cipher content.
inputEncoding – It takes the input encoding as a parameter. Possible input values are hex, base64, etc.
outputEncoding – It takes the output encoding as a parameter. The input type for this parameter is string. Possible input values are hex, base64, etc.


*/

const crypto = require('crypto');

// Initialising the AES algorithm
const algorithm = 'aes-192-cbc';
// Initialising the password used for generating key
const password = '12345678';

// Retrieving key for the cipher object
const key = crypto.scryptSync(password, 'old data', 24);

// Initializing the static iv
const iv = Buffer.alloc(16, 0);

// Initializing the cipher object to get cipher
const cipher = crypto.createCipheriv(algorithm, key, iv);

//Getting the updated string value with new data
let updatedValue = cipher.update('Welcome to tutorials point', 'utf8', 'hex');

//Adding the old value and updated value
updatedValue += cipher.final('hex');

// Printing the result...
console.log("Updated String:- " + updatedValue);
