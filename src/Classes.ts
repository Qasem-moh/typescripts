class User {

    msg: () => string;

    constructor(private username: string, protected salary: number) {

        this.msg = () => {
            return `hello ${this.username} your salary's ${this.salary}`;
        }
    }

    sayMsg() {
        return `Hello, ${this.username} your salary is ${this.salary}`;
    }
}

let userOne = new User("Qasem", 1200)
// console.log(userOne.username)
// console.log(userOne.salary)
console.log(userOne.msg())
console.log(userOne.sayMsg())