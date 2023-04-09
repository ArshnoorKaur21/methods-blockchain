const crypto=require('crypto')

//importing the aes algorithm
const algorithm='aes-192-cbc'

//initializing the password used for generating key
const password='123456789'

//retrieveing the key for cipher object
crypto.scrypt(password,'salt',24,{N:512},(err,key)=>{
    if(err) throw err;

    //initializing the static iv
    const iv=Buffer.alloc(16,0)

    //initializing the cipher object to get cipher
    const cipher=crypto.createCipheriv(algorithm,key,iv)

    //getting the updated string with new data
    let updatedValue=cipher.update('updated data','utf-8','hex')

    //adding the old and updated value
    updatedValue+=cipher.final('hex')

    //printing the result
    console.log('updated value ',updatedValue)
})