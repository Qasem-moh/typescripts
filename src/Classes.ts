class User {
    u: string;
    s: number
    msg: () => string;

    constructor(username:string, salary:number) {
        this.u = username;
        this.s = salary;
        this.msg = function () {
            return `hello ${this.u} your salary is ${this.s}`;
        }
    }

    sayMsg() {
        return `Hello, ${this.u} your salary is ${this.s}`;
    }
}

let userOne = new User("Qasem", 1200)
console.log(userOne.u)
console.log(userOne.s)
console.log(userOne.msg())
console.log(userOne.sayMsg())