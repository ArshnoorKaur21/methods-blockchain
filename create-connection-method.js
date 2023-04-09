/*
the agent.createConnection() method is interface provided by 'http' module. This method produces socket/stream which can used for http requests
a socket/stream can be returned in two ways=either by returing socket/stream directly from the function or by passing socket/stream to the callback

syntax:- agent.createConnection(options,[callback])

options- these options will create connection details for which stream has to be created
callback – This will receive the created socket connection from the agent
*/

const http=require('http')

//creating a new agent
const agent=new http.Agent({})

//creating connection with above agent
const conn=agent.createConnection
console.log('connection created successfully')

//printing connection details
console.log('connection is ',conn)
