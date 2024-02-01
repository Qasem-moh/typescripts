
abstract class Food{
    constructor(public title:string) {
    }
    abstract getCooking():void;
}
class Pizza extends Food{
    constructor(title:string,public salary:number) {
        super(title);
    }
    getCooking() {
        console.log(`getCooking is called`);
    }
}
class burger extends Food{
    constructor(title:string,public salary:number) {
        super(title);
    }
    getCooking() {
        console.log(`getCooking is called`);
    }
}
let pizzaone=new Pizza("Awesome pizza",100)
console.log(pizzaone.title)
console.log(pizzaone.salary)
pizzaone.getCooking()