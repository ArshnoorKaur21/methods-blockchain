/*
The crypto.randomBytes() generates cyprtographically strong pseudo-random data. This method will not be completed until there is sufficient entropy in the bytes created
crypto.randomBytes(size, [callback])
size – This argument defines the number of bytes to be generated. Size must not be greater than 2**31 – 1.
callback – The callback is called if any error occurs in the method.
*/

const crypto=require('crypto')

crypto.randomBytes(64,(err,buf)=>{
    if(err) throw err;
    console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`)
})

const buffer=crypto.randomBytes(256)
console.log(`${buffer.length} bytes of random data: ${buffer.toString('base64')}`)