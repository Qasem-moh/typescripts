class User {
    u: string;
    s: number
    msg: () => string;

    constructor(username, salary) {
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