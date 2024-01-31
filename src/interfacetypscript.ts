interface User {
    name: string;
    id: number;
    country: string,
    age: number;
    address: string;

    sayHello(): string,

    sayWelcome(): string

    getDouble(num: number): number;
}

let user: User = {
    name: "Qasem", id: 12, country: "Syria", age: 30, address: "New York No. 1 Lake Park", sayHello() {
        return `Hello ${user.name}`;
    },
    sayWelcome() {
        return `Welcome ${user.name}`;
    },
    getDouble(n) {
        return n * 5;
    }
}

console.log(user.id)
console.log(user.name)
console.log(user.sayHello())
console.log(user.sayWelcome())
console.log(user.getDouble(100))