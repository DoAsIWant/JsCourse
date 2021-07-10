// Циклы while, do while, for, for in , for of

// While

let i = 10;
while(i--){
    console.log(i)
}

do {
    i--;
    console.log("action");
}while(i>0);

// For

for(let i = 0; i<10; i++){
    console.log(i);
}

let str = "Ass we can";
let res = "";

for(let i = 0; i<str.length;i++){
    res += str[i] + "*";
}
console.log(res);

// For of

const users = [
    {
        name: "Danil",
        age:21,
    },
    {
        name: "Billy",
        age: 48,
    }
]

for(let i = 0 ;i < users.length; i++){
    console.log(users[i].name);
}

// For in

let user = {
    name: "Darkholme",
    age: 30,
}

for(let key in user){
    console.log(key);
}