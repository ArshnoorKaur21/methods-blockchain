/*
crypto.createSign() will create and return sign object.One can use, crypto.getHashes() to get the names of all 
the available digest algorithms. 
*/

const crypto=require('crypto')
const sign=crypto.createSign('SHA256')
console.log(sign)
console.log(sign.write('welcome'))