const crypto=require('crypto')
const fs=require('fs')

//getting the current filepath
const filename='home.txt'

const secret='mysecretkey'

//creating hmac for current path
const hmac=crypto.createHmac('sha256',secret)

const input=fs.createReadStream(filename)
input.on('readable',()=>{
    //reading single element produced by mac stream
    const val=input.read()
    if(val)
    {
        hmac.update(val)
    }
    else{
        console.log(`${hmac.digest('hex')} ${filename}`)
    }
})