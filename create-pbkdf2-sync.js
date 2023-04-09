/*
The crypto.pbkdf2Sync(), also known as Password-Based Key Derivation function 2, provides a synchronous implementation
of the derivative function. A key is derived by using the Hmac digest of a specified algorithm from password, salt 
and iterations. This will create the key in a sync process.
*/

const crypto=require('crypto')

//defining pbkdf2 with follwoing options
const pbkdfkey=crypto.pbkdf2Sync('secret','salt',100,32,'sha512')

//printing the derived key
console.log(pbkdfkey.toString('hex'))