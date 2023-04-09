/*
The Diffie–Hellman (DH) Algorithm is not encryption algo. used to exchange secret keys between 2 users, we will use asymmetric 
encryption to exchange secret key
why this algo?
when we are sending key to reciever it can be attacked in between ,is algo ka use krke hm reciever tk apna key pahuchare
taki woh aram se apna decrypt kr ske

https://www.geeksforgeeks.org/implementation-diffie-hellman-algorithm/

Elliptic Curve Cryptography (ECC) is an approach to public-key cryptography, based on the algebraic structure of elliptic curves over finite fields.
The Diffie-Hellman algorithm is being used to establish a shared secret that can be used for secret communications while exchanging data over a public network using the elliptic curve to generate points

crypto.createDiffieHellman() Method in Node.js
the above method creates diffieHellman key exchange object with help of supplied prime  value
generator argument can hold either string,number or buffer value. default value for generator is 2

syntax- cypto.createDiffieHelmmanGroup(prime,[primeEncoding],generator,[generatorEncoding])

prime-no of prime bytes that willbe generted
primeEncoding-paramter defines encoding of prime string . possible inputs are string,number
gnerator- generator for generating excahnging key object
generator encoding-this parameter defines generator string encoding
*/


const crypto = require('crypto');

// Initializing and defining the prime value
const server = crypto.createDiffieHellman(20);

// Generating keys
console.log(server.generateKeys().toString('hex'));

// Creating keys using server prime and generator
const client= crypto.createDiffieHellman(
   server.getPrime(), server.getGenerator());

console.log(server.getPrime().toString('hex'))
console.log(server.getGenerator().toString('hex'))


console.log(client.generateKeys().toString('hex'));

// Printing the server and client values
//Since the arguments passed for both server and client are same. Therefore, the keys generated are also same.
console.log("Server prime: ", server.getPrime().toString('hex'), 
"Server generator: ", server.getGenerator().toString('hex'));

console.log("Client prime: ", client.getPrime().toString('hex'), 
"Client generator: ", client.getGenerator().toString('hex'));