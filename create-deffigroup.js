/*
The crypto.createDiffieHellmanGroup() is used for creating the DiffieHellmanGroup. This method can also be referred
as an alias for crypto.getDiffieHellman.
*/

const crypto=require('crypto')

//defining the group name
const name='modp1'

//creating the group
var diffiegroup=crypto.createDiffieHellmanGroup(name)

console.log(diffiegroup.generateKeys('hex'))