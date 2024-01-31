// const KIDS=15;
// const EASY=9;
// const MEDIUM=6;
// const HARD=3;

enum KKIDS {
    four = 4, five = 5, sex = 6, seven = 7
}

enum level {
    kids = KKIDS.four, Easy = 9, Medium = 6, Hard = 3
}

let lvl: string = "Easy";
if (lvl == "Easy") {
    console.log(`your level is ${lvl} and is ${level.Easy} second`);

}let lvl2: string = "Easy";
if (lvl2== "Easy") {
    console.log(`your level is ${lvl} and is ${level.kids} second`);
}
