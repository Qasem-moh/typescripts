'use strict';

function getType <T>(value: T): T {
    return value;
}

console.log(getType<number>(100))
console.log(getType<string>("Qasem"))
console.log(getType<boolean>(true))