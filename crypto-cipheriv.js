/*
crypto.createCipheriv() will create and return cipher object as per algorihtm passed for given key and iv
syntax:- crypto.createCipheriv(algorihtm,key,iv,options)

1. alogorihtm- it takes input algorihtm that would be used to create cipher, some possible values are aes192, aes512
2. key -it takes input for the raw key that is used by algorihtm and iv
3. iv- initialization vector. this parameter takes input for iv that makes cipher uncertain and unique,
Its possible value types are: string, buffer, TypedArray, DataView. This can be null if not needed by the cipher.

*/

const crypto=require('crypto')

//initializing the algorihtm
const algorithm='aes-256-cbc'

//initializing the key
const key=crypto.randomBytes(32)

//initializing the iv vector
const iv=crypto.randomBytes(16)

//creating the function to encrypt the data
function encrypt(text)
{
    //creating the cipher with above defined parameters
    let cipher=crypto.createCipheriv(algorithm,Buffer.from(key),iv)

    let encrypted=cipher.update(text)

    encrypted=Buffer.concat([encrypted,cipher.final()])

    //returning the iv and encrypted data
    return { iv: iv.toString('hex'),encryptedData: encrypted.toString('hex') };
}

var output=encrypt('encrypt this')
console.log(output)