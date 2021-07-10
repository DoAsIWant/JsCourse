/* Operators*/

let value;
value = 1>2; // true
value = 1 == "1"; // true
value = 1 === '1'; //true;
value = "a" >"a" // false (сравниваються по юникоду и посимвольно);
value = "a".charCodeAt() // Взять юникод у символа
console.log(value)

// if else

if(1 === 2){
    console.log(true);
}
else{
    console.log(false);
}


value = [];
if(value.length){
    console.log("Array isn't empty");
}
else{
    console.log("Array is empty");
}

let user = {
    name:"Dan",
}

if(user.hasOwnProperty("name")){
    console.log("Name is " + user.name);
}

else{
    console.log("No name")
}

// Логические операторы || && !

// ||

value = 1 || 0; // 1 Возвращает первое true или последний false
console.log(value);

value = 1 && 0 && 0 // 0 Возвращает первое false или последнее true
console.log(value);

let serverNick = "Danil";
let nick = serverNick || "default";
console.log(nick);

// &&

value = 1 && 0 && 5;
console.log(value);