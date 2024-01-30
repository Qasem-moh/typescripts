'use strict';
function addAll(...nums:number[]){
    let result=0;
    nums.forEach(num => result+=num)
    return result;
}

console.log(addAll(1,2,3,10.5,+true));