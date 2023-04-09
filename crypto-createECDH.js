/*
the crypto.createECDH() is used to create elliptic curve also known as elliptic curve diffie-hellman ,
we can use crypto.getCurves to get the list of available curve names
crypto.createECDH(curveName)

*/ 

const crypto=require('crypto')
const curve=crypto.createECDH('secp521r1')

console.log(curve.generateKeys().toString('hex'))
console.log('public key is ',curve.getPublicKey().toString('hex'))