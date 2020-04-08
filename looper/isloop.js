'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    let curr = linkedlist.head;
    
    while(curr !== null) {
        
         if (curr.next === null) {
            return false;
        }
        curr.head.value++;
    }
    return true
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop