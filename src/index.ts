let a = 1, b = 2;
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;

console.log('a is now:', a);
console.log('b is now:', b);

let freindArray=["Ahmad","ALi","Mohammad"]
for (let item of freindArray) {
    console.log(item.charAt(0));
}

let ar=["A","B","C","D","E","F","G","H"
    ,12,3,4,5,6,7,8,9,true,false,["Qasem","ALI","MOHAMMAD","ALI","MOHAMMAD"]];

let showMsg=true

function shoeDetails(name: string, age: string | number, salary: number){
   if (showMsg)
       return("name is: "+name + "\nage is: "+age + "\nsalary is: "+salary);
   return "No Data"
}

console.log(shoeDetails("Qasem",30,3000))