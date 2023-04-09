/*
crypto.pbkdf2 also known as password based key derivation function provides asynchronous implemention of derivative function
A key is derived by using the Hmac digest of a specified algorithm from password, salt and iterations

password defined by getting key of requested byte length
salt-similar to password for getting key,possible values are of type string,dataview,buffer
iterations-getting the key of requested byte length, it accepts the value as number
keylen-this is requested bytelength of the key,it accepts the value as number
digest-the hmac algorithm is specified by this digest value. default valaue is sha1
callback – If any error occurs in the async mode, it will be handled in the callback
*/

const crypto=require('crypto')

crypto.pbkdf2('secret','salt',10000,64,'sha512',(err,derivedKey)=>{
    if(err) throw err;
    //printing derived key
    console.log('derived key is ',derivedKey.toString('hex'))
})