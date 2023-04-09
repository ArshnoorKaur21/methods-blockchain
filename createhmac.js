/*
hmac is hash based message authentication code. it is cryptographic authentciation technique that uses hash function 
and secret key
with hmac you can achieve authentication and verify that data is correct and authentic with shared secrets

Two parties want to communicate, but they want to ensure that the contents of their connection remain private. 
They also distrust the internet, and they need a way to verify that the packets they receive haven't been tampered 
with. HMAC is a valid solution.

Cryptographic keys. An encryption algorithm alters data, and a recipient needs a specific code (or key) to make it
 readable once more. HMAC relies on a shared sets of secret keys.
Hash function. A hash algorithm alters or digests the message once more. HMAC uses generic cryptographic hash 
functions, such as SHA-1, MD5, or RIPEMD-128/60.

there are 3 types of encryption:
1. message encryption
2. message authenticaton code
3. hash fxns

difference between mac and hash is dependancy on key, in mac we have to apply message authentication fxn and key on plain txt
in hash fxn we apply hash code on plain txt

MAC algorithm is a symmetric key cryptographic technique to provide message authentication. For establishing MAC process, the sender and receiver share a symmetric key K.
Essentially, a MAC is an encrypted checksum generated on the underlying message that is sent along with a message to ensure message authentication.
The process of using MAC for authentication is depicted in the following illustration −

The sender uses some publicly known MAC algorithm, inputs the message and the secret key K and produces a MAC value.

Similar to hash, MAC function also compresses an arbitrary long input into a fixed length output. The major difference between hash and MAC is that MAC uses secret key during the compression.

The sender forwards the message along with the MAC. Here, we assume that the message is sent in the clear, as we are concerned of providing message origin authentication, not confidentiality. If confidentiality is required then the message needs encryption.

On receipt of the message and the MAC, the receiver feeds the received message and the shared secret key K into the MAC algorithm and re-computes the MAC value.

The receiver now checks equality of freshly computed MAC with the MAC received from the sender. If they match, then the receiver accepts the message and assures himself that the message has been sent by the intended sender.

If the computed MAC does not match the MAC sent by the sender, the receiver cannot determine whether it is the message that has been altered or it is the origin that has been falsified. As a bottom-line, a receiver safely assumes that the message is not the genuine.
*/

const crypto=require('crypto')

//defining the secret key
const secret='mysecretkey'

//initializing the createhmac method using secret
const hmacval=crypto.createHmac('sha256',secret)
//data to be encoded
.update('my data to get encoded')
//defininf encoding type
.digest('hex')

//printing the hmac value
console.log('hmac value obtained is ',hmacval)