const crypto=require('crypto')
const { SHA256 } = require('crypto-js')

const verify=crypto.createVerify('SHA256')

//writing the below data to be signed and verified
verify.write('TutorialPoint')

//ending the method
verify.end()

//beginning public key execution
const l1='-----BEGIN PUBLIC KEY-----'

//encrypted data
const l2="MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEXIvPbzLjaPLd8jgiv1TL/X8PXpJNgDkGRj9U9Lcx1yKURpQFVavcMkfWyO8r7JlZNMax0JKfLZUM1IePRjHlFw=="

//finishing public key execution
const l3='----END PUBLIC KEY----'


   // concatenating all public keys
   const publicKey = l1 + l2 + l3

   // Signature that will be verified
   const signature ="MEYCIQCPfWhpzxMqu3gZWflBm5V0aetgb2/S+SGyGcElaOjgdgIhALaD4lbxVwa8HUUBFOLz+CGvIioDkf9oihSnXHCqh8yV";
   
   //prints true if signature is verified else false
   console.log(verify.verify(publicKey,signature))