interface Settings {
    theme: boolean;
    fontSize?: number;

    save(): void
}

class Where implements Settings {
    constructor(public username: string, public theme: boolean) {
    }

    save(): void {
        console.log("Save")
    }

    update(): void {
        console.log("update")
    }
}

let userone=new Where("Qasem",true);

console.log(userone.username)
console.log(userone.theme)
userone.save();
userone.update()