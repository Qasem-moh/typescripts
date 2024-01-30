"use strict";

function optionalParmeter(name:string="Qasem",age:number, salary?:number) {
    return `Hello, ${name}! I'm ${age} years old! I'm ${salary}!`;
}

console.log(optionalParmeter(undefined,30))

