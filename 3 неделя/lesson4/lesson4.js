// Objects methods

// Копирование обьектов (глубокое, неглубокое)

let obj1 = {
    name:"Danil"
}
let obj2 = {
    name: "Herrington",
    age:20,
}
let newObj = Object.assign({},obj1,obj2); // копирование обьектов (поверхностное)
console.log(newObj == obj1);

console.log(JSON.stringify(obj1));

let objJson = JSON.stringify(obj1); // JSON_Stringify- j,mtrn d cnhjre json
newObj = JSON.parse(objJson);
console.log(newObj);

// Object keys - возвращает методы массива

let keys = Object.keys(obj1); // создаёт массив ключей
console.log(keys); 

let values = Object.values(obj1);
console.log(values);

let entries = Object.entries(obj1); // возвращает массив где пара елементов - ключ-значение
console.log(entries);

let objFromEntries = Object.fromEntries([["a","value"]]);
console.log(objFromEntries);
