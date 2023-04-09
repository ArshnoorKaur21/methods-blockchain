/*
crypto.createVerify() will create and return verify object
*/

const crypto=require('crypto')
const verify=crypto.createVerify('SHA256')
console.log(verify)