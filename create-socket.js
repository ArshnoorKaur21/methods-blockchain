// Node.js program to demonstrate the creation of socket
// using agent.createConnection() method

const http=require('http')

//crreating a new agent
var agent=new http.Agent({})

//defining options for agent
const aliveAgent=new http.Agent({
    keepAlive:true,
    maxSockets:0,maxSockets:5,
})

//creating connection with alive agent
var aliveConnection=aliveAgent.createConnection

//creating connection with new agent
var connection=agent.createConnection

//printing the connection
console.log('successfully created connection witb agent: ',connection.toString)
console.log('successfully created connection with alive agent ',aliveConnection.toString)