const crypto=require('crypto')
const algorihtm='aes-192-cbc'
const password='123456789'

const key=crypto.scryptSync(password,'salt',24)
const iv=Buffer.alloc(16,0)

const cipher=crypto.createCipheriv(algorihtm,key,iv)

let encrypted=''

cipher.on('readable',()=>{
    let chunk
    while(null!==(chunk=cipher.read()))
    {
        encrypted+=chunk.toString('base64')
    }
})

//handling the close/end event
cipher.on('end',()=>{
    console.log(encrypted)
})

cipher.write('encrypt this')
cipher.end()
console.log('completed')