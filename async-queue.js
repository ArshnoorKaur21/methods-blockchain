/*
the async.queue() method returns the queue that is further used concurrent processing of processes i.e multiple
processing of items at a time
async.queue('function', 'concurrency value')
function – This parameter defines the function that will be executed over the element added to the queue.
concurrency value – This field defines the number of elements to be processed at a time.
he async.queue() method further has multiple methods and properties that will be used while processing async requests.

1. push(element, callback) - Similar to an ordinary queue, the push method is used for adding an element at the tail of a queue.

2.length() - The length method is used for returning the number of elements present in a queue at a time.
queue.length()

3. started property - This property returns a boolean value providing information about the queue whether it has started processing its elements or not.
queue.started()

4. unshift(element, callback) - The unshift property also adds an element to the queue like a push() method. 
The only difference between the two is – It adds elements at the head whereas push adds it in the tail. This method 
is used for priority elements.
queue.unshift(item, callback)

5. drain() Method - This method issues a callback when the queue has executed all the tasks/elements. It only works
when the function is described in an arrow function.
queue.drain(() => {
   console.log(“All Tasks are completely executed...”);
}

6.pause() Method  This method holds the execution of remaining elements in the queue. The function will continue after
resume() is called.
queue.pause()

7. resume() Method - This method is used for resuming the execution of elements which were put on hold using the 
pause() method.
queue.resume()

8.kill() Method - This method removes all the remaining elements from the queue and forces it into an idle state.
queue.kill()

9.idle() Method - This method returns a boolean state indicating if the queue is idle or processing something.
queue.idle
*/

const async=require('async')

//creating array for all elements execution
const tasks=[1,2,3,4,5,6,7,8,9,10]

// Initializing the queue
const queue = async.queue((task, executed) => {
    console.log("Currently Busy Processing Task " + task);
 
    setTimeout(()=>{
       // Number of tasks remaining and to be processed
       const tasksRemaining = queue.length();
       executed(null, {task, tasksRemaining});
    }, 1000);
 
 }, 1); // concurrency value = 1
 
 // Queue is idle initially as no elements are there...
 console.log(`Queue Started ? ${queue.started}`)
 
 // Adding each task from the tasks list
 tasks.forEach((task)=>{
 
    // Adding the task 5 to the head for priority execution
    if(task == 5){
       queue.unshift(task, (error, {task, tasksRemaining})=>{
          if(error){
             console.log(`An error occurred while processing task ${task}`);
          }else {
             console.log(`Finished processing task ${task}. ${tasksRemaining} tasks remaining`);
          }
       })
       // Adding all the tasks at tail to be executed except task 5
    } else {
       queue.push(task, (error, {task, tasksRemaining})=>{
          if(error){
             console.log(`An error occurred while processing task ${task}`);
          }else {
             console.log(`Finished processing task ${task}. ${tasksRemaining}
             tasks remaining`);
          }
       })
    }
 });
 
 // Executes the callback when the queue is done processing all the tasks
 queue.drain(() => {
    console.log('All items are succesfully processed !');
 })
 
 // Checking if the queue is started after adding tasks
 console.log(`Queue Started ? ${queue.started}`)