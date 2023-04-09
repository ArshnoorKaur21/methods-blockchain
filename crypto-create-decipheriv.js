const crypto = require('crypto');

// Initializing the algorithm
const algorithm = 'aes-192-cbc';

// Defining and initializing the password
const password = '123456789'

// Initializing the key
const key = crypto.scryptSync(password, 'TutorialsPoint', 24);

// Initializing the iv vector
const iv = Buffer.alloc(16, 0);

// Creating the Decipher with the above defined parameters
const decipher = crypto.createDecipheriv(algorithm, key, iv);

let decrypted = '';

// Reading and encrypting the data
decipher.on('readable', () => {
   let chunk;
   while (null !== (chunk = decipher.read())) {
      decrypted += chunk.toString('utf8');
   }
});

//Handling the closing/end event
decipher.on('end', () => {
   console.log(decrypted);
});

// Encrypted data which is going to be decrypted
const encrypted = 'uqeQEkXy5dpJjQv+JDvMHw==';
// Printing the decrypted text
decipher.write(encrypted, 'base64');
decipher.end();
console.log("Completed... !");