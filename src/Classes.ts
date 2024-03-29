class User {

    msg: () => string;
    private static created: number = 0;
    constructor(private _username: string, protected salary: number) {
        User.created++;
        this.msg = () => {
            return `hello ${this._username} your salary's ${this.salary}`;
        }
    }

    getCreated(): void {
        console.log(`count object ${User.created}`)

    }
    sayMsg() {
        return `Hello, ${this._username} your salary is ${this.salary}`;
    }
    get username():string{
        return this._username;
    }
    set username(val:string){
        this._username = val;
    }
}

let userOne = new User("Qasem", 1200)
console.log(userOne.username)
userOne.username="Mohammad"
console.log(userOne.username)

// console.log(userOne.salary)
console.log(userOne.msg())
console.log(userOne.sayMsg())
userOne.getCreated()